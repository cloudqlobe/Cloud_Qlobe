import React, { useState } from 'react';
import {
  Globe,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Ratepages = () => {
  const [activeTab, setActiveTab] = useState('cc');
  const [searchTerm, setSearchTerm] = useState('');
  const [qualityFilter, setQualityFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const routes = [
    {
      countryCode: '+91',
      countryName: 'India',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'Outbound',
      rate: '₹0.50',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+1',
      countryName: 'USA',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'Premium',
      rate: '$0.02',
      billingCycle: '60/60',
      status: 'inactive',
    },
    {
      countryCode: '+44',
      countryName: 'UK',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'Outbound',
      rate: '£0.03',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+81',
      countryName: 'Japan',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '¥0.05',
      billingCycle: '60/60',
      status: 'inactive',
    },
    {
      countryCode: '+61',
      countryName: 'Australia',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '$0.04',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+33',
      countryName: 'France',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'Outbound',
      rate: '€0.06',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+49',
      countryName: 'Germany',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '€0.03',
      billingCycle: '60/60',
      status: 'inactive',
    },
    {
      countryCode: '+86',
      countryName: 'China',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '¥0.02',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+971',
      countryName: 'UAE',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'Outbound',
      rate: 'د.إ0.04',
      billingCycle: '60/60',
      status: 'active',
    },
    {
      countryCode: '+7',
      countryName: 'Russia',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '₽0.05',
      billingCycle: '60/60',
      status: 'inactive',
    },
    {
      countryCode: '+34',
      countryName: 'Spain',
      quality: 'Mobile, CC Local & International Correct Display',
      profile: 'IVR',
      rate: '€0.04',
      billingCycle: '60/60',
      status: 'active',
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(routes.length / itemsPerPage);
  const paginatedRoutes = routes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 rounded ${currentPage === i ? 'bg-[#0a2463] text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center mt-4">
        <button
          className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          <ChevronLeft size={16} />
        </button>
        {pages}
        <button
          className="px-3 py-1 mx-1 rounded bg-gray-200 text-gray-700"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'cc' ? 'bg-[#0a2463] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('cc')}
          >
            CC Routes
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'ncli' ? 'bg-[#0a2463] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('ncli')}
          >
            CLI Routes
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'cli' ? 'bg-[#0a2463] text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setActiveTab('cli')}
          >
            Special Rates
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 text-gray-400" size={16} />
            <input
              type="text"
              className="pl-8 pr-4 py-2 border rounded"
              placeholder="Search Country"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-2 top-2.5 text-gray-400" size={16} />
            <select
              className="pl-8 pr-4 py-2 border rounded"
              value={qualityFilter}
              onChange={(e) => setQualityFilter(e.target.value)}
            >
              <option value="">All Qualities</option>
              <option value="HD">HD</option>
              <option value="SD">SD</option>
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Country Code</th>
              <th className="px-4 py-3 text-left">Country Name</th>
              <th className="px-4 py-3 text-left">Quality</th>
              <th className="px-4 py-3 text-left">Profile</th>
              <th className="px-4 py-3 text-left">Rate</th>
              <th className="px-4 py-3 text-left">Billing Cycle</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedRoutes.map((route, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{route.countryCode}</td>
                <td className="px-4 py-2">{route.countryName}</td>
                <td className="px-4 py-2">{route.quality}</td>
                <td className="px-4 py-2">{route.profile}</td>
                <td className="px-4 py-2">{route.rate}</td>
                <td className="px-4 py-2">{route.billingCycle}</td>
                <td className="px-4 py-2">
                  <span className={route.status === 'active' ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {route.status === 'active' ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {renderPagination()}
    </div>
  );
};

export default Ratepages;
