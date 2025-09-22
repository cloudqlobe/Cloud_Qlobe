import { useState, useEffect } from "react";
import Layout from "../../../layout/Layout";
import axiosInstance from "../../../../utils/axiosinstance";

const Modal = ({ isOpen, onClose, onSubmit, initialData }) => {
    const dataModel = {
        countryCode: "",
        country: "",
        qualityDescription: "",
        status: "Inactive",
        profile: "",
        rate: "",
        category: "",
        testStatus: "as",
        billingCycle: "",
        specialRate: false,
        addToTicker: false,
    }
    const [newLead, setNewLead] = useState(initialData || dataModel);

    useEffect(() => {
        if (initialData) {
            setNewLead(initialData);
        } else {
            setNewLead(dataModel);
        }
    }, [initialData]);

    const handleAddLead = (e) => {
        e.preventDefault();
        onSubmit(newLead);
        setNewLead(dataModel);
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                <h3 className='text-lg font-semibold mb-4'>
                    {initialData ? "Update Rate" : "Add New Rate"}
                </h3>
                <form onSubmit={handleAddLead}>
                    <input
                        type='text'
                        placeholder='Country Code'
                        value={newLead.countryCode}
                        onChange={(e) =>
                            setNewLead({ ...newLead, countryCode: e.target.value })
                        }
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'
                        required
                    />
                    <input
                        type='text'
                        placeholder='Country'
                        value={newLead.country}
                        onChange={(e) =>
                            setNewLead({ ...newLead, country: e.target.value })
                        }
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'
                        required
                    />
                    <input
                        type='text'
                        placeholder='Quality Description'
                        value={newLead.qualityDescription}
                        onChange={(e) =>
                            setNewLead({ ...newLead, qualityDescription: e.target.value })
                        }
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'
                        required
                    />
                    <select
                        value={newLead?.profile || ""}
                        onChange={(e) =>
                            setNewLead({ ...newLead, profile: e.target.value })
                        }
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'>
                        <option value='' disabled>
                            Select Profile
                        </option>
                        <option value='Outbound'>Outbound</option>
                        <option value='IVR'>IVR</option>
                    </select>
                    <input
                        type='text'
                        placeholder='Billing Cycle'
                        value={newLead.billingCycle}
                        onChange={(e) =>
                            setNewLead({ ...newLead, billingCycle: e.target.value })
                        }
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'
                        required
                    />
                    <input
                        type='number'
                        placeholder='Enter Rate'
                        value={newLead?.rate || ""}
                        onChange={(e) => setNewLead({ ...newLead, rate: e.target.value })}
                        className='mb-2 w-full px-4 py-2 border border-gray-300 rounded-lg'
                    />
                    <label className='flex items-center mb-4'>
                        <input
                            type='checkbox'
                            checked={newLead.specialRate}
                            onChange={(e) =>
                                setNewLead({ ...newLead, specialRate: e.target.checked })
                            }
                            className='mr-2'
                        />
                        Special Rate
                    </label>
                    <label className='flex items-center mb-4'>
                        <span className='mr-2'>Status:</span>
                        <select
                            value={newLead.status}
                            onChange={(e) =>
                                setNewLead({ ...newLead, status: e.target.value })
                            }
                            className='border border-gray-300 rounded-lg px-2 py-1'>
                            <option value='Active'>Active</option>
                            <option value='Inactive'>Inactive</option>
                            <option value='archive'>Archive</option>
                        </select>
                    </label>
                    <label className='flex items-center mb-4'>
                        <input
                            type='checkbox'
                            checked={newLead.addToTicker}
                            onChange={(e) =>
                                setNewLead({ ...newLead, addToTicker: e.target.checked })
                            }
                            className='mr-2'
                        />
                        Add to Ticker
                    </label>
                    <div className='flex justify-between mt-4'>
                        <button
                            type='button'
                            onClick={onClose}
                            className='bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-200'>
                            Cancel
                        </button>
                        <button
                            type='submit'
                            className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200'>
                            {initialData ? "Update Rate" : "Add Rate"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SuperAdminCCRate = () => {
    const [rateData, setRateData] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("country");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [currentRate, setCurrentRate] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
console.log(rateData);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await axiosInstance.get("api/admin/ccrates");
                setRateData(response.data.ccrates);
            } catch (error) {
                console.error("Error fetching rates:", error);
            }
        };
        fetchRates();
    }, []);

    // Apply filters and sorting first (keep your existing filter & sort logic)
    const filteredData = rateData
        .filter((rate) => {
            if (!rate) return false;
            const searchTerm = search.toLowerCase();
            return (
                (rate.country?.toLowerCase().includes(searchTerm)) ||
                (rate.profile?.toLowerCase().includes(searchTerm))
            );
        })
        .filter((rate) =>
            (selectedCountry ? rate.country === selectedCountry : true) &&
            (selectedStatus ? rate?.status?.toLowerCase() === selectedStatus?.toLowerCase() : true)
        )
        .sort((a, b) => {
            if (sort === "country") return a.country.localeCompare(b.country);
            if (sort === "rate") return a.rate - b.rate;
            if (sort === "status") return a.status.localeCompare(b.status);
            return 0;
        });

    // Pagination calculation
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);


const handleAddLead = async (ccrates) => {
    try {
        let response;
        if (isUpdateMode) {
            response = await axiosInstance.put(`api/admin/ccrates/${currentRate._id}`, ccrates);

            // Update the rateData state in-place
            setRateData(prev =>
                prev.map(rate => rate._id === currentRate._id ? response.data.updatedRate : rate)
            );

            setSuccessMessage("Rate updated successfully!");
        } else {
            response = await axiosInstance.post("api/admin/ccrates", ccrates);

            // Add new rate to the table
            setRateData(prev => [...prev, response.data.newRate]);

            setSuccessMessage("Rate added successfully!");
        }

        setErrorMessage("");
        setModalOpen(false);
        setIsUpdateMode(false);
        setCurrentRate(null);
    } catch (error) {
        console.error("Error adding/updating rate:", error);
        setErrorMessage("Failed to add/update rate. Please try again.");
        setSuccessMessage("");
    }
};


    const handleUpdateClick = (rate) => {
        setCurrentRate(rate);
        setIsUpdateMode(true);
        setModalOpen(true);
    };

    const handleDeleteClick = async (rateId) => {
        try {
            await axiosInstance.delete(`api/admin/ccrates/${rateId}`);
            setRateData(rateData.filter((rate) => rate._id !== rateId));
            setSuccessMessage("Rate deleted successfully!");
            setErrorMessage("");
        } catch (error) {
            console.error("Error deleting rate:", error);
            setErrorMessage("Failed to delete rate. Please try again.");
            setSuccessMessage("");
        }
    };

    return (
        <Layout>
            <div className='container mx-auto px-4 py-4'>
                <h1 style={{ marginBottom: "15px" }} className='text-2xl font-semibold'>Rates Management</h1>
                {successMessage && (
                    <p className='text-green-600 mt-4'>{successMessage}</p>
                )}
                {errorMessage && <p className='text-red-600 mt-4'>{errorMessage}</p>}

                <div className='mt-4'>
                    <input
                        type='text'
                        placeholder='Search by Country or Profile'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='border border-gray-300 px-4 py-2'
                        style={{ marginRight: "15px", width: "300px" }}
                    />
                    <span>
                        <select
                            style={{ height: "41px", marginRight: "15px", width: "190px" }}
                            value={selectedCountry}
                            onChange={(e) => setSelectedCountry(e.target.value)}
                            className='border border-gray-300 px-4 py-2'>
                            <option value=''>Select Country</option>
                            {Array.from(new Set(rateData.map(rate => rate.country))) // get unique countries
                                .filter(Boolean) // remove empty/null
                                .map((country) => (
                                    <option key={country} value={country}>
                                        {country}
                                    </option>
                                ))}
                        </select>


                        <select
                            style={{ height: "41px", marginRight: "15px", width: "190px" }}
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className='border border-gray-300 px-4 py-2'>
                            <option value='country'>Sort by Country</option>
                            <option value='rate'>Sort by Rate</option>
                            <option value='status'>Sort by Status</option>
                        </select>

                        <select
                            style={{ height: "41px", marginRight: "15px", width: "190px" }}
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className='border border-gray-300 px-4 py-2'>
                            <option value=''>Select Status</option>
                            <option value='active'>Active</option>
                            <option value='inactive'>Inactive</option>
                            <option value='archive'>Archive</option>
                        </select>
                    </span>
                    <button
                        className='bg-green-500 text-white px-4 py-2'
                        onClick={() => {
                            setIsUpdateMode(false);
                            setCurrentRate(null);
                            setModalOpen(true);
                        }}>
                        Add Rate
                    </button>
                </div>

                <table className='min-w-full bg-white shadow-lg mt-4' >
                    <thead>
                        <tr className='bg-[#005F73] text-white'>
                            <th className='py-2 px-4'>Country Code</th>
                            <th className='py-2 px-4'>Country</th>
                            <th className='py-2 px-4'>Quality Description</th>
                            <th className='py-2 px-4'>Rate</th>
                            <th className='py-2 px-4'>Status</th>
                            <th className='py-2 px-4'>Profile</th>
                            <th className='py-2 px-4'>Billing Cycle</th>
                            <th className='py-2 px-4'>Actions</th>
                        </tr>
                    </thead>
<tbody>
  {currentRows.map((rate, index) => (
    rate ? (
      <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
        <td className='py-2 px-4'>{rate.countryCode}</td>
        <td className='py-2 px-4'>{rate.country}</td>
        <td className='py-2 px-4'>{rate.qualityDescription}</td>
        <td className='py-2 px-4'>{rate.rate}</td>
        <td className='py-2 px-4'>{rate.status}</td>
        <td className='py-2 px-4'>{rate.profile}</td>
        <td className='py-2 px-4'>{rate.billingCycle}</td>
        <td className='py-2 px-4'>
          <button onClick={() => handleUpdateClick(rate)} className='text-blue-500 hover:text-blue-700'>Edit</button>
          <button onClick={() => handleDeleteClick(rate._id)} className='text-red-500 hover:text-red-700 ml-2'>Delete</button>
        </td>
      </tr>
    ) : null
  ))}
</tbody>

                </table>
                <div className='flex justify-between items-center mt-4'>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50'>
                        Prev
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 border rounded-lg hover:bg-gray-100 disabled:opacity-50'>
                        Next
                    </button>
                </div>

            </div>

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSubmit={handleAddLead}
                initialData={currentRate}
            />
        </Layout>
    );
};

export default SuperAdminCCRate;