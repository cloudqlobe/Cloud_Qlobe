import React, { useState, useEffect } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserGroupIcon,
  UserPlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../utils/axiosinstance';

const AllStaffManagement = ({ members = [] }) => {
  const [teams, setTeams] = useState({
    account: [],
    support: [],
    carrier: [],
    sale: [],
    lead: []
  });
  
  const [openSections, setOpenSections] = useState({
    account: false,
    support: false,
    carrier: false,
    sale: false,
    lead: false
  });
  
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const [
          accountResponse,
          supportResponse,
          leadResponse,
          carrierResponse,
          saleResponse
        ] = await Promise.all([
          axiosInstance.get('api/admin/allaccountMember'),
          axiosInstance.get('api/admin/allsupportMember'),
          axiosInstance.get('api/admin/allleadMember'),
          axiosInstance.get('api/admin/allcarrierMember'),
          axiosInstance.get('api/admin/allsaleMember')
        ]);
        
        setTeams({
          account: accountResponse?.data?.members || [],
          support: supportResponse?.data?.members || [],
          lead: leadResponse?.data?.members || [],
          sale: saleResponse?.data?.members || [],
          carrier: carrierResponse?.data?.members || []
        });
      } catch (error) {
        console.error("Error fetching team data:", error);
        toast.error("Failed to load team data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchMembers();
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleEditMember = (member) => {
    setSelectedMember(member);
    setShowEditModal(true);
  };

  const handleDeleteMember = async (memberId) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      try {
        await axiosInstance.delete(`/api/admin/members/${memberId}`);
        toast.success("Member deleted successfully");
        // Refresh the data
        const fetchMembers = async () => {
          const responses = await Promise.all([
            axiosInstance.get('api/admin/allaccountMember'),
            axiosInstance.get('api/admin/allsupportMember'),
            axiosInstance.get('api/admin/allleadMember'),
            axiosInstance.get('api/admin/allcarrierMember'),
            axiosInstance.get('api/admin/allsaleMember')
          ]);
          
          setTeams({
            account: responses[0]?.data?.members || [],
            support: responses[1]?.data?.members || [],
            lead: responses[2]?.data?.members || [],
            sale: responses[3]?.data?.members || [],
            carrier: responses[4]?.data?.members || []
          });
        };
        
        fetchMembers();
      } catch (error) {
        console.error("Error deleting member:", error);
        toast.error("Failed to delete member");
      }
    }
  };

  const TeamSection = ({ title, members, isOpen, onToggle, teamKey }) => {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-6">
        <button
          onClick={() => onToggle(teamKey)}
          className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-4">
              <UserGroupIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">{members.length} team members</p>
            </div>
          </div>
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {isOpen && (
          <div className="border-t border-gray-200">
            <div className="px-6 py-4">
              {members.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <UserGroupIcon className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                  <p>No members in this team</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {members.map((member) => (
                    <div key={member._id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{member.fullName}</h4>
                          <p className="text-sm text-gray-600">{member.email}</p>
                          {member.phone && (
                            <p className="text-sm text-gray-600 mt-1">{member.phone}</p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditMember(member)}
                            className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                            title="Edit member"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteMember(member._id)}
                            className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                            title="Delete member"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      {member.department && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {member.department}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
          <p className="text-gray-600">Manage all team members across different departments</p>
        </div>

        <div className="mb-6 flex justify-between items-center">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-semibold text-gray-700">Total Members</h3>
            <p className="text-2xl font-bold text-blue-600">
              {Object.values(teams).reduce((total, team) => total + team.length, 0)}
            </p>
          </div>
          
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <UserPlusIcon className="w-5 h-5 mr-2" />
            Add New Member
          </button>
        </div>

        <TeamSection
          title="Lead Team"
          members={teams.lead}
          isOpen={openSections.lead}
          onToggle={toggleSection}
          teamKey="lead"
        />
        
        <TeamSection
          title="Account Team"
          members={teams.account}
          isOpen={openSections.account}
          onToggle={toggleSection}
          teamKey="account"
        />
        
        <TeamSection
          title="Support Team"
          members={teams.support}
          isOpen={openSections.support}
          onToggle={toggleSection}
          teamKey="support"
        />
        
        <TeamSection
          title="Sales Team"
          members={teams.sale}
          isOpen={openSections.sale}
          onToggle={toggleSection}
          teamKey="sale"
        />
        
        <TeamSection
          title="Carrier Team"
          members={teams.carrier}
          isOpen={openSections.carrier}
          onToggle={toggleSection}
          teamKey="carrier"
        />

        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
};

export default AllStaffManagement;