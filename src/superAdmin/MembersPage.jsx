import { useState, useEffect } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  UserGroupIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../utils/axiosinstance';
import Layout from './layout/Layout';

const AllStaffManagement = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [newUser, setNewUser] = useState({ fullName: '', email: '', password: '', role: '', status: 'active' });

  // Fetch members
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
        axiosInstance.get('api/admin/allcarriermember'),
        axiosInstance.get('api/admin/allsaleMember')
      ]);

      setTeams({
        account: accountResponse?.data?.members || [],
        support: supportResponse?.data?.members || [],
        lead: leadResponse?.data?.members || [],
        carrier: carrierResponse?.data?.members || [],
        sale: saleResponse?.data?.members || []
      });
    } catch (error) {
      console.error("Error fetching team data:", error);
      toast.error("Failed to load team data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const getStatusColor = (status) => {
    const colors = {
      active: "bg-green-100 text-green-800 border border-green-300",
      inactive: "bg-gray-100 text-gray-800 border border-gray-300",
      restricted: "bg-yellow-100 text-yellow-800 border border-yellow-300",
      block: "bg-red-100 text-red-800 border border-red-300",
    };
    return colors[status] || "bg-gray-100 text-gray-800 border border-gray-300";
  };


  // ------------ EDIT -------------
  const handleEditUserClick = (member) => {
    setNewUser({
      fullName: member.fullName,
      email: member.email,
      password: '',
      role: member.role,
      status: member.status || 'active'  // 👈 set current status
    });
    setEditingUserId(member.id);
    setIsModalOpen(true);
  };


  const handleSaveUser = async () => {
    if (!newUser.fullName.trim() || !newUser.email.trim()) {
      toast.error("Full name and email are required");
      return;
    }

    try {
      const rolePath = newUser.role.replace("member", ""); // "leadmember" -> "lead"
      if (editingUserId) {
        await axiosInstance.put(
          `api/admin/update${rolePath}Member/${editingUserId}`,
          newUser
        );
        toast.success("Member updated successfully");
      }
      setIsModalOpen(false);
      fetchMembers();
    } catch (error) {
      toast.error("Error saving Member");
    }
  };

  // ------------ DELETE -------------
  const handleDeleteUser = async (member) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      const rolePath = member.role.replace("member", ""); // "leadmember" -> "lead"
      await axiosInstance.delete(`api/admin/delete${rolePath}Member/${member.id}`);
      toast.success("Member deleted successfully");
      fetchMembers();
    } catch (error) {
      console.error("Error deleting member:", error);
      toast.error("Failed to delete member");
    }
  };

  // ------------ TEAM SECTION -------------
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
                    <div key={member.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-800">{member.fullName}</h4>
                          <p className="text-sm text-gray-600">{member.email}</p>

                          {/* Status Badge */}
                          <span className={`inline-block mt-2 px-2 py-1 text-xs font-medium rounded ${getStatusColor(member.status)}`}>
                            {member.status}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditUserClick(member)}
                            className="p-1 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(member)}
                            className="p-1 text-red-600 hover:bg-red-100 rounded transition-colors"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
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
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Team Management</h1>
            <p className="text-gray-600">Manage all team members across different departments</p>
          </div>

          {/* Team Sections */}
          <TeamSection title="Lead Team" members={teams.lead} isOpen={openSections.lead} onToggle={toggleSection} teamKey="lead" />
          <TeamSection title="Account Team" members={teams.account} isOpen={openSections.account} onToggle={toggleSection} teamKey="account" />
          <TeamSection title="Support Team" members={teams.support} isOpen={openSections.support} onToggle={toggleSection} teamKey="support" />
          <TeamSection title="Sales Team" members={teams.sale} isOpen={openSections.sale} onToggle={toggleSection} teamKey="sale" />
          <TeamSection title="Carrier Team" members={teams.carrier} isOpen={openSections.carrier} onToggle={toggleSection} teamKey="carrier" />

          {/* Edit Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl">
                <div className="flex justify-between items-center mb-5 pb-3 border-b">
                  <h2 className="text-xl font-bold text-gray-800">Edit Member</h2>
                  <button onClick={() => setIsModalOpen(false)}>
                    <XMarkIcon className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    value={newUser.fullName}
                    onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-1">Password (leave blank to keep current)</label>
                  <input
                    type="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select
                    value={newUser.status}
                    onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
                    className={`w-full border rounded-lg p-2`}
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="restricted">Restricted</option>
                    <option value="block">Block</option>
                  </select>
                </div>


                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveUser}
                    className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </Layout>
  );
};

export default AllStaffManagement;
