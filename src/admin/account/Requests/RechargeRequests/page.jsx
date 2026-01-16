import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../../layout/page';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import { RiApps2Line } from "react-icons/ri";
import AdminAuthContext from '../../../../context/admin/AdminAuthContext';
import axiosInstance from '../../../../utils/axiosinstance';

const AdminRechargerequestPage = () => {
  const { adminDetails } = useContext(AdminAuthContext);
  const [allPayments, setAllPayments] = useState([]);  // Stores original data
  const [payments, setPayments] = useState([]);  // Stores filtered data
  const [filter, setFilter] = useState('All');
  const navigate = useNavigate();

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(`api/member/getAllTransactions`);

      if (response.data.success) {
        let data = response.data.transaction;

        setAllPayments(data); // Store original data
        setPayments(data); // Set displayed data
      } else {
        console.error('Failed to fetch data:', response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [ adminDetails.id]);

  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'All') {
      setPayments(allPayments);
    } else {
      setPayments(allPayments.filter(payment => payment.transactionStatus === selectedFilter));
    }
  };


  // Apply filter without losing original data
  const handleFilterApply = () => {
    if (filter === 'All') {
      setPayments(allPayments); // Reset to original
    } else {
      setPayments(allPayments.filter(payment => payment.transactionStatus === filter));
    }
  };

  return (
    <Layout>
      <div className="p-6 text-gray-600">
        <h2 className="text-3xl font-semibold flex items-center mb-4">
          <RiApps2Line className="mr-2 text-yellow-500 text-5xl" />
          Recharge Requests
        </h2>

        <div className="flex justify-between items-center mb-4">
          <button
            className="px-4 py-2 bg-green-500 text-white flex items-center rounded-md"
            onClick={() => navigate('/admin/recharge/form')}
          >
            <FaPlusCircle className="mr-2" />
            Add Payment
          </button>
          <div className="flex items-center">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="p-2 border rounded-md bg-white mr-2"
            >
              <option value="All">All</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
              <option value="Complete">Complete</option>
            </select>
            <button
              onClick={handleFilterApply}
              className="px-4 py-2 bg-orange-500 text-white flex items-center rounded-md"
            >
              <FaFilter className="mr-2" />
              Filter
            </button>
          </div>
        </div>

        <table className="min-w-full border-collapse mb-6">
          <thead className="bg-[#005F73] text-white">
            <tr>
              <th className="p-2">Customer ID</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Payment Time</th>
              <th className="p-2">Reference No</th>
              <th className="p-2">Account Agent</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment._id} className="bg-gray-100" style={{textAlign:"center"}}>
                <td className="p-2">{payment?.customerId}</td>
                <td className="p-2">${payment.amount}</td>
                <td className="p-2">{new Date(payment.dateAndTime).toLocaleString()}</td>
                <td className="p-2">{payment.referenceNo}</td>
                <td className="p-2">{payment.accountAgent}</td>
                <td className="p-2">{payment.transactionStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default AdminRechargerequestPage;
