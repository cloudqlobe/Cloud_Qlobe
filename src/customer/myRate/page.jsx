import { useEffect, useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '../../utils/axiosinstance';
import CustomerAuthContext from '../../context/customer/CustomerAuthContext';
import Navbar from "../../public/Components/Navbar";

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
  const [ccPrivateData, setCCPrivateData] = useState([]);
  const [cliPrivateData, setCLIPrivateData] = useState([]);
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
        const ccRates = customerData?.myRates?.filter(rate => rate.rate === 'CC') || [];
        const cliRates = customerData?.myRates?.filter(rate => rate.rate === 'CLI') || [];

        // Fetch tests
        const testsResponse = await axiosInstance.get(`api/testrates`);
        const testData = testsResponse.data.testrate || [];
        const tests = testData.filter(test => test.userId === customerData.id);
        const parsedTests = tests.map(test => ({
          ...test,
          rateId: test.rateId ? JSON.parse(test.rateId) : null
        }));
        setTestsData(parsedTests);

        // Fetch public CLI rates
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

        // Fetch public CC rates
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

        // Fetch private rates
        const privateCCResponse = await axiosInstance.get(`api/member/private_ccrates/${customerDetails.id}`);
        const privateCCData = privateCCResponse.data.ccrate || privateCCResponse.data || [];
        setCCPrivateData(Array.isArray(privateCCData) ? privateCCData : [privateCCData]);

        const privateCLIResponse = await axiosInstance.get(`api/member/private_clirates/${customerDetails.id}`);
        const privateCLIData = privateCLIResponse.data.clirate || privateCLIResponse.data || [];
        setCLIPrivateData(Array.isArray(privateCLIData) ? privateCLIData : [privateCLIData]);

        setCLIRatesData(fetchedCLIRates.filter(rate => rate && rate._id));
        setCCRatesData(fetchedCCRates.filter(rate => rate && rate._id));
      } catch (error) {
        console.error('Error fetching rates or tests:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRatesAndTests();
  }, [customerData, customerDetails.id]);

  // Check if any data exists
  useEffect(() => {
    const hasData = ccRatesData.length > 0 || cliRatesData.length > 0 || ccPrivateData.length > 0 || cliPrivateData.length > 0;
    setDataNotFound(!hasData);
  }, [ccRatesData, cliRatesData, ccPrivateData, cliPrivateData]);

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

    // ✅ Check if any selected rate is already requested
    const alreadyRequested = selectedRates.some((rate) =>
      testsData.some((test) => {
        if (!test.rateId) return false;
        if (Array.isArray(test.rateId)) {
          return test.rateId.includes(rate._id);
        } else {
          return test.rateId === rate._id;
        }
      })
    );

    if (alreadyRequested) {
      toast.error('This rate already passed to test');
      return;
    }

    try {
      await axiosInstance.post(`api/testrate`, {
        rateId: selectedRates.map(rate => rate._id),
        customerId: customerData.customerId,
        testStatus: 'Pending',
        testReason: 'Requested',
        rateType: currentRateType,
        companyName: customerData.companyName,
        userId: customerData.id,
      });

      toast.success('Tests Requested Successfully');

      // Update local state
      setTestsData(prevTests => [
        ...prevTests,
        ...selectedRates.map(rate => ({
          rateId: rate._id,
          testStatus: 'Pending',
          customerId: customerData.id,
        }))
      ]);

      setShowCheckboxes(false);
      setSelectedRates([]);
    } catch (error) {
      console.error('Error requesting tests:', error);
      toast.error('Failed to request tests');
    }
  };


  // Get data based on current rate type
  const getCurrentData = () => {
    switch (currentRateType) {
      case 'CCRate': return ccRatesData;
      case 'CLIRate': return cliRatesData;
      case 'CCPrivateRate': return ccPrivateData;
      case 'CLIPrivateRate': return cliPrivateData;
      default: return [];
    }
  };

  // Get test status for a rate
  const getTestStatus = (rateId) => {
    if (!testsData || testsData.length === 0) return null;
    const test = testsData.find(testItem => {
      if (!testItem.rateId) return false;
      if (Array.isArray(testItem.rateId)) return testItem.rateId.some(r => String(r).trim() === String(rateId).trim());
      return String(testItem.rateId).trim() === String(rateId).trim();
    });
    return test ? test.testStatus : null;
  };

  const getDisplayStatus = (rate) => {
  const testStatus = getTestStatus(rate._id);
  return testStatus || rate.status || 'N/A';
};


  // Filter data based on search and status
  const filteredData = getCurrentData()
    .filter(item => item)
    .filter(item => {
      const matchesSearch = item?.country?.toLowerCase().includes(search.toLowerCase());
      if (statusFilter === 'all') return matchesSearch;
      const status = getTestStatus(item._id);
      return matchesSearch && status === statusFilter;
    });

  const isPrivateRate = currentRateType.includes('Private');

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

        {!showCheckboxes && !isPrivateRate && (
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-800 mt-2 sm:mt-0"
            onClick={() => setShowCheckboxes(true)}
          >
            Select Rates
          </button>
        )}
      </div>

      {/* Rate Type Switch */}
      <div className="flex space-x-4 mb-4">
        {['CCRate', 'CLIRate', 'CCPrivateRate', 'CLIPrivateRate'].map(type => (
          <button
            key={type}
            className={`px-4 py-2 rounded-lg ${currentRateType === type ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}
            onClick={() => setCurrentRateType(type)}
          >
            {type.replace(/Rate/g, ' Rate')}
          </button>
        ))}
      </div>

      {/* Data Table */}
      {loading ? (
        <div className="text-center py-10">Loading rates...</div>
      ) : dataNotFound ? (
        <div className="text-center py-10 text-gray-500">No data found.</div>
      ) : (
        <table className="min-w-full bg-white border rounded">
          <thead className="bg-blue-800 text-white">
            <tr className="text-left">
              {showCheckboxes && !isPrivateRate && <th className="px-4 py-2">Select</th>}
              <th className="px-4 py-2">Country Code</th>
              <th className="px-4 py-2">Country Name</th>
              <th className="px-4 py-2">Rate Quality Description</th>
              {(currentRateType.includes("CC")) && <th className="px-4 py-2 text-center">Profile</th>}
              <th className="px-4 py-2 text-center">Rate</th>
              <th className="text-center">Billing Cycle</th>
              <th className="px-4 py-2">Prefix</th>
              {(currentRateType.includes("CLI")) && <>
                <th className="px-4 py-2">ASR</th>
                <th className="px-4 py-2">Billing Cycle</th>
                <th className="px-4 py-2">RTP</th>
                <th className="px-4 py-2">ACD</th>
              </>}
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((rate, index) => (
              <tr key={rate._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                  {showCheckboxes && !isPrivateRate && (
                    <td className="px-4 py-2">
                      <input
                        type="checkbox"
                        checked={selectedRates.some(item => item._id === rate._id)}
                        onChange={() => handleCheckboxChange(rate)}
                      />
                    </td>
                  )}
                  <td className="px-4 py-2 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${getTestStatus(rate._id) === 'Pending'
                        ? 'bg-yellow-500'
                        : getTestStatus(rate._id) === 'In Progress'
                          ? 'bg-blue-500'
                          : getTestStatus(rate._id) === 'Complete'
                            ? 'bg-green-500'
                            : getTestStatus(rate._id) === 'Failed'
                              ? 'bg-red-500'
                              : 'bg-gray-400'
                        }`}
                    ></span>
                    <span>{rate.countryCode || rate.prefix || 'N/A'}</span>
                  </td>
                  <td className="px-4 py-2">{rate.country || 'N/A'}</td>
                  <td className="px-4 py-2">{rate.qualityDescription || 'N/A'}</td>
                  {(currentRateType.includes("CC")) && <td className="px-4 py-2 text-center">{rate.profile || 'N/A'}</td>}
                  <td className="px-4 py-2 text-center">{rate.rate || 'N/A'}</td>
                  <td className="px-4 py-2 text-center">{rate.billingCycle || 'N/A'}</td>
                  <td className="px-4 py-2">{rate.prefix || 'N/A'}</td>

                  {(currentRateType.includes("CLI")) && <>
                    <td className="px-4 py-2">{rate.asr || 'N/A'}</td>
                    <td className="px-4 py-2 text-center">{rate.billingCycle || 'N/A'}</td>
                    <td className="px-4 py-2">{rate.rtp || 'N/A'}</td>
                    <td className="px-4 py-2">{rate.acd || 'N/A'}</td>
                  </>}
                  <td className="px-4 py-2 font-semibold">
  <span
    className={`px-2 py-1 rounded-full text-xs ${
      getDisplayStatus(rate) === 'Pending'
        ? 'bg-yellow-100 text-yellow-700'
        : getDisplayStatus(rate) === 'In Progress'
        ? 'bg-blue-100 text-blue-700'
        : getDisplayStatus(rate) === 'Complete'
        ? 'bg-green-100 text-green-700'
        : getDisplayStatus(rate) === 'Failed'
        ? 'bg-red-100 text-red-700'
        : 'bg-gray-100 text-gray-700'
    }`}
  >
    {getDisplayStatus(rate)}
  </span>
</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-4 text-center text-gray-500">
                  No rates found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {showCheckboxes && !isPrivateRate && (
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

      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default MyRatesPage;
