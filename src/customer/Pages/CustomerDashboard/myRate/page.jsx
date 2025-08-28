import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../../../utils/axiosinstance';
import CustomerAuthContext from '../../../../context/customer/CustomerAuthContext';
import Navbar from '../../../Components/Navbar';

const MyRatesPage = () => {
  const { customerDetails } = useContext(CustomerAuthContext);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [customerData, setCustomerData] = useState(null);
  const [testsData, setTestsData] = useState([]);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [selectedRates, setSelectedRates] = useState([]);
  const [currentRateType, setCurrentRateType] = useState('CCRate');
  const [ccRatesData, setCCRatesData] = useState([]);
  const [cliRatesData, setCLIRatesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);

  // ✅ Fetch customer data
  useEffect(() => {
    const fetchCustomerData = async () => {
      if (!customerDetails?.id) return;

      try {
        const response = await axiosInstance.get(`api/customer/${customerDetails.id}`);
        const customer = response.data.customer;
        const parsedMyRates = customer.myRates ? JSON.parse(customer.myRates) : null;

        setCustomerData({
          ...customer,
          myRates: parsedMyRates,
        });
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };
    fetchCustomerData();
  }, [customerDetails.id]);

  // ✅ Fetch rates & tests
  useEffect(() => {
    const fetchRatesAndTests = async () => {
      if (!customerData) return;

      try {
        const ccRates = customerData?.myRates?.filter(rate => rate.rate === 'CC');
        const cliRates = customerData?.myRates?.filter(rate => rate.rate === 'CLI');

        const testsResponse = await axiosInstance.get(`api/testrates`);
        const testData = testsResponse.data.testrate || [];
        const tests = testData.filter(test => test.customerId === customerData.id);
        const parsedRates = tests.map(test => ({
          ...test,
          rateId: test.rateId ? JSON.parse(test.rateId) : null
        }));
        setTestsData(parsedRates);

        const fetchedCLIRates = await Promise.all(
          cliRates.map(async (rate) => {
            try {
              const response = await axiosInstance.get(`api/admin/clirate/${rate.rateId}`);
              return response.data.clirates;
            } catch (error) {
              console.error(`Error fetching CLI rate for rateId ${rate.rateId}:`, error);
              return null;
            }
          })
        );

        const fetchedCCRates = await Promise.all(
          ccRates.map(async (rate) => {
            try {
              const response = await axiosInstance.get(`api/admin/ccrate/${rate.rateId}`);
              return response.data.ccrates;
            } catch (error) {
              console.error(`Error fetching CC rate for rateId ${rate.rateId}:`, error);
              return null;
            }
          })
        );

        setCLIRatesData(fetchedCLIRates.filter(rate => rate && rate._id));
        setCCRatesData(fetchedCCRates.filter(rate => rate && rate._id));
      } catch (error) {
        console.error('Error fetching rates or tests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRatesAndTests();
  }, [customerData]);

  useEffect(() => {
    setDataNotFound(!ccRatesData.length && !cliRatesData.length);
  }, [ccRatesData, cliRatesData]);

  const handleCheckboxChange = (rate) => {
    setSelectedRates(prev =>
      prev.some(item => item._id === rate._id)
        ? prev.filter(item => item._id !== rate._id)
        : [...prev, rate]
    );
  };

  const handleRequestTest = async () => {
    if (selectedRates.length === 0) {
      toast.error('Please select at least one rate');
      return;
    }
    try {
      await axiosInstance.post(`api/testrate`, {
        rateId: selectedRates,
        customerId: customerData.id,
        rateCustomerId: `hwq${customerData._id}`,
        testStatus: 'Pending',
        testReason: 'Requested',
        rateType: currentRateType,
        companyName: customerData.companyName,
        companyId: customerData.customerId,
      });
      toast.success('Tests Requested Successfully');
      setShowCheckboxes(false);
      setSelectedRates([]);
    } catch (error) {
      console.error('Error requesting tests:', error);
      toast.error('Failed to request tests');
    }
  };

  const filteredData = (currentRateType === 'CCRate' ? ccRatesData : cliRatesData)
    .filter(item => item)
    .filter(item => {
      if (statusFilter === 'all') {
        return item?.country?.toLowerCase().includes(search.toLowerCase());
      }
      const hasMatchingTest = testsData.some(test => {
        if (!test.rateId) return false;
        if (Array.isArray(test.rateId)) {
          return test.rateId.some(rate => rate?._id === item?._id) && test.testStatus === statusFilter;
        } else {
          return test.rateId === item?._id && test.testStatus === statusFilter;
        }
      });
      return item?.country?.toLowerCase().includes(search.toLowerCase()) && hasMatchingTest;
    });

  return (
    <div className="p-6 text-gray-800">
      <Navbar />
      <div className="flex justify-between items-start w-full mb-6 mt-[100px]">
        <h2 className="text-2xl font-bold">My Rates</h2>
        {customerData && (
          <div className="flex flex-col items-end text-sm">
            <p>Company Name: <span className="font-semibold">{customerData.companyName}</span></p>
            <p className="mt-1">Customer ID: <span className="font-semibold">{customerData.customerId}</span></p>
          </div>
        )}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-wrap items-center justify-between bg-gray-50 p-4 rounded-lg shadow mb-4">
        <input
          type="text"
          placeholder="Search by country name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 bg-white px-4 py-2 rounded-lg border border-gray-300"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white px-4 py-2 rounded-lg border border-gray-300 mt-2 sm:mt-0"
        >
          <option value="all">All Statuses</option>
          <option value="Pending">Test Requested</option>
          <option value="In Progress">Test Processing</option>
          <option value="Complete">Test Completed</option>
          <option value="Failed">Test Failed</option>
        </select>

        {!showCheckboxes && (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 mt-2 sm:mt-0"
            onClick={() => setShowCheckboxes(true)}
          >
            Select Rates
          </button>
        )}
      </div>

      {/* Rate Type Switch */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded-lg ${currentRateType === 'CCRate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentRateType('CCRate')}
        >
          CCRate
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${currentRateType === 'CLIRate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentRateType('CLIRate')}
        >
          CLIRate
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${currentRateType === 'CCRate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentRateType('CCRate')}
        >
          CC Private Rate
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${currentRateType === 'CLIRate' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setCurrentRateType('CLIRate')}
        >
          CLI Private Rate
        </button>
      </div>

      {/* Data Table */}
      {loading ? (
        <div className="text-center py-10">Loading rates...</div>
      ) : dataNotFound ? (
        <div className="text-center py-10 text-gray-500">No data found.</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-800 text-white text-left">
                {showCheckboxes && <th className="px-4 py-2">Select</th>}
                <th className="px-4 py-2">Country Code</th>
                <th className="px-4 py-2">Country Name</th>
                {currentRateType === "CCRate" && <th className="px-4 py-2">Profile</th>}
                <th className="px-4 py-2">Rate</th>
                <th className="px-4 py-2">Quality</th>
                {currentRateType === "CLIRate" && <th className="px-4 py-2">ASR</th>}
                {currentRateType === "CLIRate" && <th className="px-4 py-2">Billing Cycle</th>}
                {currentRateType === "CLIRate" && <th className="px-4 py-2">RTP</th>}
                {currentRateType === "CLIRate" && <th className="px-4 py-2">ACD</th>}
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((rate, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  {showCheckboxes && (
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedRates.some(item => item._id === rate._id)}
                        onChange={() => handleCheckboxChange(rate)}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2">{rate.countryCode || 'N/A'}</td>
                  <td className="px-4 py-2">{rate.country || 'N/A'}</td>
                  {rate.profile && <td className="px-4 py-2">{rate.profile || 'N/A'}</td>}
                  <td className="px-4 py-2">{rate.rate || 'N/A'}</td>
                  <td className="px-4 py-2">{rate.qualityDescription || 'N/A'}</td>
                  {rate.asr && <td className="px-4 py-2">{rate.asr || 'N/A'}</td>}
                  {rate.billingCycle && <td className="px-4 py-2">{rate.billingCycle || 'N/A'}</td>}
                  {rate.rtp && <td className="px-4 py-2">{rate.rtp || 'N/A'}</td>}
                  {rate.acd && <td className="px-4 py-2">{rate.acd || 'N/A'}</td>}
                  <td className="px-4 py-2">{rate.status || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showCheckboxes && (
        <div className="mt-6 flex justify-end space-x-4">
          <button
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            onClick={() => setShowCheckboxes(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            onClick={handleRequestTest}
          >
            Request Test
          </button>
        </div>
      )}
    </div>
  );
};

export default MyRatesPage;
