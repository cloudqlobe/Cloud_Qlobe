import { useState, useEffect } from 'react';
import Layout from '../../../layout/Layout';
import axiosInstance from '../../../../utils/axiosinstance';

const DEFAULT_DATA_MODEL = {
    countryCode: '',
    country: '',
    qualityDescription: '',
    rate: '',
    status: 'Inactive',
    billingCycle: '',
    rtp: '',
    asr: '',
    acd: '',
    ticker: false,
    testStatus: 'na',
};

const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {

    const [newLead, setNewLead] = useState(() => initialData ?? DEFAULT_DATA_MODEL);

    useEffect(() => {
        if (initialData) {
            setNewLead(initialData);
        } else {
            setNewLead(DEFAULT_DATA_MODEL);
        }
    }, [initialData]); // ✅ ESLint is happy

    const handleAddLead = (e) => {
        e.preventDefault();
        onSubmit(newLead);
        setNewLead(DEFAULT_DATA_MODEL);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-lg font-semibold mb-4">
                    {initialData ? 'Update Rate' : 'Add New Rate'}
                </h3>

                <form onSubmit={handleAddLead}>
                    <input
                        type="text"
                        placeholder="Country Code"
                        value={newLead.countryCode}
                        onChange={(e) => setNewLead({ ...newLead, countryCode: e.target.value })}
                        className="mb-2 w-full px-4 py-2 border rounded-lg"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Country"
                        value={newLead.country}
                        onChange={(e) => setNewLead({ ...newLead, country: e.target.value })}
                        className="mb-2 w-full px-4 py-2 border rounded-lg"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Quality Description"
                        value={newLead.qualityDescription}
                        onChange={(e) =>
                            setNewLead({ ...newLead, qualityDescription: e.target.value })
                        }
                        className="mb-2 w-full px-4 py-2 border rounded-lg"
                        required
                    />

                    {/* rest of inputs unchanged */}

                    <div className="flex justify-between mt-4">
                        <button type="button" onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-lg">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            {initialData ? 'Update Rate' : 'Add Rate'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


const SuperAdminCLIRate = () => {
    const [rateData, setRateData] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('country');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [currentRate, setCurrentRate] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axiosInstance.get('api/admin/clirates');
                setRateData(response?.data?.clirates || []);
            } catch (error) {
                console.error('Error fetching rates:', error);
            }
        };
        fetchRates();
    }, []);

    // Filter, search, and sort
    const filteredData = rateData
        .filter((rate) =>
            (rate.country?.toLowerCase().includes(search.toLowerCase()) || '') ||
            (rate.qualityDescription?.toLowerCase().includes(search.toLowerCase()) || '')
        )
        .filter((rate) =>
            (selectedCountry ? rate.country?.toLowerCase() === selectedCountry.toLowerCase() : true) &&
            (selectedStatus ? rate.status?.toLowerCase() === selectedStatus.toLowerCase() : true)
        )
        .sort((a, b) => {
            if (sort === 'country') return a.country.localeCompare(b.country);
            if (sort === 'rate') return a.rate - b.rate;
            return 0;
        });

    // Pagination calculation
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Add or update rate
    const handleAddLead = async (leadData) => {
        try {
            let response;
            if (isUpdateMode) {
                response = await axiosInstance.put(`api/admin/clirates/${currentRate._id}`, leadData);
                // Update the row in state
                setRateData(prev => prev.map(rate => (rate._id === currentRate._id ? response.data.clirate || leadData : rate)));
            } else {
                response = await axiosInstance.post('api/admin/clirates', leadData);
                // Add the new row to state
                setRateData(prev => [...prev, response.data.clirate]);
            }

            setSuccessMessage(isUpdateMode ? 'Rate updated successfully!' : 'Rate added successfully!');
            setErrorMessage('');
            setModalOpen(false);
            setIsUpdateMode(false);
            setCurrentRate(null);
        } catch (error) {
            console.error('Error adding/updating rate:', error);
            setErrorMessage('Failed to add/update rate. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleUpdateClick = (rate) => {
        setCurrentRate(rate);
        setIsUpdateMode(true);
        setModalOpen(true);
    };

    const handleDeleteClick = async (rateId) => {
        try {
            await axiosInstance.delete(`api/admin/clirates/${rateId}`);
            setRateData(prev => prev.filter(rate => rate._id !== rateId));
            setSuccessMessage('Rate deleted successfully!');
            setErrorMessage('');
        } catch (error) {
            console.error('Error deleting rate:', error);
            setErrorMessage('Failed to delete rate. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <Layout>
            <div className="p-6 text-gray-900">
                <h1 className="text-2xl font-semibold mb-4">CLI Rates</h1>
                {successMessage && <div className="text-green-600 mb-2">{successMessage}</div>}
                {errorMessage && <div className="text-red-600 mb-2">{errorMessage}</div>}

                {/* Filters and Add Button */}
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="Search by country or quality description"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
                        style={{ width: "400px" }}
                    />
                    <select
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        value={selectedCountry}
                        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
                    >
                        <option value="">Filter by Country</option>
                        {[...new Set(rateData.map(rate => rate.country))].map(country => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>
                    <select
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        value={selectedStatus}
                        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
                    >
                        <option value="">Filter by Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="archive">Archive</option>
                    </select>
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        value={sort}
                        className="border border-gray-300 rounded-lg px-4 py-2 mr-2"
                    >
                        <option value="country">Sort by Country</option>
                        <option value="rate">Sort by Rate</option>
                    </select>
                    <button
                        onClick={() => { setIsUpdateMode(false); setModalOpen(true); }}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Add Rate
                    </button>
                </div>

                {/* Table */}
                <table className='min-w-full bg-white shadow-lg'>
                    <thead>
                        <tr className="bg-[#005F73] text-white">
                            <th className="px-4 py-2">Country Code</th>
                            <th className="px-4 py-2">Country Name</th>
                            <th className="px-4 py-2">Quality Description</th>
                            <th className="px-4 py-2">Rate</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((rate, index) => (
                            <tr key={rate._id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                <td className="px-4 py-2">{rate.countryCode}</td>
                                <td className="px-4 py-2">{rate.country}</td>
                                <td className="px-4 py-2">{rate.qualityDescription}</td>
                                <td className="px-4 py-2">{rate.rate}</td>
                                <td className={`px-4 py-2 ${rate.status.toLowerCase() === 'active' ? 'text-green-600' : 'text-red-600'}`}>{rate.status}</td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleUpdateClick(rate)} className="text-blue-500 hover:underline">Edit</button>
                                    <button onClick={() => handleDeleteClick(rate._id)} className="text-red-500 hover:underline ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50'
                    >
                        Prev
                    </button>
                    <span>Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>

                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddLead}
                    initialData={currentRate}
                />
            </div>
        </Layout>
    );
};


export default SuperAdminCLIRate;