import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../../layout/page';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import { SiContributorcovenant } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import AdminAuthContext from '../../../../context/admin/AdminAuthContext';
import axiosInstance from '../../../../utils/axiosinstance';

const AdminVendorRequestPage = () => {
  const { adminDetails } = useContext(AdminAuthContext)
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [filter, setFilter] = useState('All');
  const [vendorRequests, setVendorRequests] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`api/member/getAllVendor`);
      const RequestData = response.data.vendor
      setVendorRequests(RequestData);
      setFilteredRequests(RequestData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [adminDetails.id]);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'All') {
      setFilteredRequests(vendorRequests);
    } else {
      setFilteredRequests(
        vendorRequests.filter((request) => request.status === selectedFilter)
      );
    }
  };

  return (
    <Layout>
      <div className="p-6 text-gray-600">
        <h2 className="text-3xl font-default flex items-center mb-4">
          <SiContributorcovenant className="mr-2 text-yellow-500 text-5xl" />
          Vendor Payment Request
        </h2>

        <div className="flex justify-between mb-4 items-center">
          <button
            onClick={() => navigate('/admin/vendor/form')} // Pass a callback function to onClick
            className="px-4 py-2 bg-green-500 text-white flex items-center rounded-md"
          >
            <FaPlusCircle className="mr-2" />
            Add Vendor Payment
          </button>

          <div className="flex items-center">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="p-2 border rounded-md bg-white mr-2"
            >
              <option value="All">All</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
            <button
              onClick={() => {
                setFilter('All');
                setFilteredRequests(vendorRequests);
              }}
              className="px-4 py-2 bg-orange-500 text-white flex items-center rounded-md"
            >
              <FaFilter className="mr-2" />
              Reset
            </button>

          </div>
        </div>

        <table className="min-w-full border-collapse mb-6">
          <thead className="bg-[#005F73] text-white">
            <tr>
              <th className="p-2">Carrier ID</th>
              <th className="p-2">Account Manager</th>
              <th className="p-2">Service Category</th>
              <th className="p-2">Account Associate</th>
              <th className="p-2">Carrier Type</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.map((request, index) => (
              <tr key={request.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} style={{textAlign:"center"}}>
                <td className="p-2">{request.carrierId}</td>
                <td className="p-2 text-center">{request.accountManager}</td>
                <td className="p-2 text-center">{request.serviceCategory}</td>
                <td className="p-2">{request.accountAssociate}</td>
                <td className="p-2">{request.carrierType}</td>
                <td className="p-2">{request.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminVendorRequestPage;