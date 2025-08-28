import React, { useEffect, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ShieldCheckIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  XMarkIcon,
  UserGroupIcon,
  KeyIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from '../utils/axiosinstance';

const SettingsPage = ({ admins = [] }) => {
  const [isAccessControlOpen, setIsAccessControlOpen] = useState(true);
  const [users, setUsers] = useState(admins);
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'account'
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("api/superAdmin/getAllAdmin");
      setUsers(response?.data?.admin || []);
    } catch (error) {
      console.error("Error fetching admin data:", error);
      toast.error("Failed to load admin data");
    } finally {
      setLoading(false);
    }
  };

  const toggleAccessControl = () => {
    setIsAccessControlOpen(!isAccessControlOpen);
  };

  const validateInputs = () => {
    const newErrors = {};

    if (!newUser.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (newUser.fullName.length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newUser.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(newUser.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!editingUserId && !newUser.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (newUser.password && newUser.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddUserClick = () => {
    setNewUser({ fullName: '', email: '', password: '', role: 'account' });
    setEditingUserId(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEditUserClick = (user) => {
    setNewUser({
      fullName: user.fullName,
      email: user.email,
      password: '',
      role: user.role
    });
    setEditingUserId(user.id);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleSaveUser = async () => {
    if (!validateInputs()) return;

    try {
      if (editingUserId) {
        await axiosInstance.put(`api/superAdmin/updateAdmin/${editingUserId}`, newUser);
        setUsers(users.map(user =>
          user.id === editingUserId ? { ...user, ...newUser } : user
        ));
        toast.success("Admin updated successfully");
      } else {
        const response = await axiosInstance.post("api/superAdmin/createAdmin", newUser);
        setUsers([...users, response.data]);
        toast.success("Admin added successfully");
      }
      setIsModalOpen(false);
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.error("Email already exists");
      } else {
        toast.error("Error saving admin");
      }
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this admin?")) return;

    try {
      await axiosInstance.delete(`api/superAdmin/deleteAdmin/${id}`);
      setUsers(users.filter(user => user.id !== id));
      toast.success("Admin deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete admin");
    }
  };

  // Filter users based on search and role filter
  const filteredUsers = users?.filter(user => {
    const matchesSearch = user.fullName?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm?.toLowerCase());
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getRoleColor = (role) => {
    const colors = {
      account: 'bg-blue-100 text-blue-800',
      support: 'bg-green-100 text-green-800',
      carrier: 'bg-purple-100 text-purple-800',
      sale: 'bg-orange-100 text-orange-800',
      lead: 'bg-pink-100 text-pink-800',
      superAdmin: 'bg-red-100 text-red-800'
    };
    return colors[role] || 'bg-gray-100 text-gray-800';
  };

  const getRoleDisplayName = (role) => {
    const names = {
      account: 'Accounts',
      support: 'Support',
      carrier: 'Carrier',
      sale: 'Sales',
      lead: 'Leads',
      superAdmin: 'Super Admin'
    };
    return names[role] || role;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Management</h1>
          <p className="text-gray-600 mt-2">Manage admin accounts and access permissions</p>
        </div>

        {/* Access Control Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={toggleAccessControl}
            className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg mr-4">
                <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Admin Access Control</h2>
                <p className="text-sm text-gray-500">{users.length} admin accounts</p>
              </div>
            </div>
            {isAccessControlOpen ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {isAccessControlOpen && (
            <div className="border-t border-gray-200 px-6 py-4">
              {/* Filters and Add Button */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative w-full sm:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserGroupIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search admins..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                    />
                  </div>

                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Roles</option>
                    <option value="account">Accounts</option>
                    <option value="support">Support</option>
                    <option value="carrier">Carrier</option>
                    <option value="sale">Sales</option>
                    <option value="lead">Leads</option>
                  </select>
                </div>

                <button
                  onClick={handleAddUserClick}
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Add New Admin
                </button>
              </div>

              {/* Users List */}
              <div className="space-y-3">
                {filteredUsers.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <UserGroupIcon className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                    <p>No admins found</p>
                  </div>
                ) : (
                  filteredUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 font-semibold">
                              {user.fullName.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{user.fullName}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <EnvelopeIcon className="w-4 h-4 text-gray-400" />
                            <p className="text-sm text-gray-600">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {getRoleDisplayName(user.role)}
                        </span>

                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditUserClick(user)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                            title="Edit admin"
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                            title="Delete admin"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingUserId ? 'Edit Admin' : 'Add New Admin'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={newUser.fullName}
                  onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter full name"
                />
                {errors.fullName && (
                  <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter email address"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password {editingUserId && '(leave blank to keep current)'}
                </label>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={newUser.role}
                  onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="account">Accounts</option>
                  <option value="support">Support</option>
                  <option value="carrier">Carrier</option>
                  <option value="sale">Sales</option>
                  <option value="lead">Leads</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {editingUserId ? 'Save Changes' : 'Add Admin'}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default SettingsPage;