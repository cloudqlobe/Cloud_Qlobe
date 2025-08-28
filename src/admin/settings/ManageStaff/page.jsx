import React, { useContext, useEffect, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, ShieldCheckIcon, PlusIcon, PencilIcon, TrashIcon, XMarkIcon, UserIcon, EnvelopeIcon, KeyIcon } from '@heroicons/react/24/outline';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminAuthContext from '../../../context/admin/AdminAuthContext';
import axiosInstance from '../../../utils/axiosinstance';
import Topbar from '../../navbar/AdminNavbar';

const StaffManagement = () => {
  const { adminDetails } = useContext(AdminAuthContext)
  const Role = `${adminDetails.role}Member`;
  const url = adminDetails.role;
  const [isAccessControlOpen, setIsAccessControlOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ fullName: '', email: '', password: '', role: Role });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [errors, setErrors] = useState({ fullName: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchAdmins = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`api/admin/all${url}Member`);
        setUsers(Array.isArray(response.data.members) ? response.data.members : []);
      } catch (error) {
        console.error("Error fetching admin data:", error);
        setUsers([]);
        toast.error("Failed to load members");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAdmins();
  }, [url]);

  const toggleAccessControl = () => {
    setIsAccessControlOpen(!isAccessControlOpen);
  };

  const validateInputs = () => {
    const errors = {};
    // Full name validation
    if (!newUser.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    } else if (newUser.fullName.length < 3) {
      errors.fullName = 'Full name must be at least 3 characters long.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newUser.email.trim()) {
      errors.email = 'Email is required.';
    } else if (!emailRegex.test(newUser.email)) {
      errors.email = 'Invalid email format.';
    }

    // Password validation (only for new users)
    if (!editingUserId) {
      if (!newUser.password.trim()) {
        errors.password = 'Password is required.';
      } else if (newUser.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.';
      } else if (!/[0-9]/.test(newUser.password) || !/[!@#$%^&*]/.test(newUser.password)) {
        errors.password = 'Password must include at least one number and one special character.';
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleAddUserClick = () => {
    setNewUser({ fullName: '', email: '', password: '', role: Role });
    setEditingUserId(null);
    setErrors({});
    setIsModalOpen(true);
  };

  const handleEditUserClick = async (id) => {
    const userToEdit = users.find(user => user.id === id);

    if (userToEdit) {
      setNewUser({ fullName: userToEdit.fullName, email: userToEdit.email, password: '', role: userToEdit.role });
      setEditingUserId(id);
      setErrors({});
      setIsModalOpen(true);
    }
  };

  const handleSaveUser = async () => {
    if (!validateInputs()) return;

    try {
      setIsLoading(true);
      let response;
      if (editingUserId) {
        response = await axiosInstance.put(`api/admin/update${url}Member/${editingUserId}`, newUser);
        setUsers(users.map(user => (user.id === editingUserId ? { ...user, ...newUser } : user)));
      } else {
        response = await axiosInstance.post(`api/admin/create${url}Member`, newUser);
        setUsers([...users, { id: Date.now(), ...newUser }]);
      }

      if (response.data) {
        setUsers(prevUsers => editingUserId
          ? prevUsers.map(user => (user.id === editingUserId ? { ...user, ...response.data } : user))
          : [...prevUsers, response.data.data]
        );
        toast.success(editingUserId ? "Member updated successfully" : "Member added successfully");
      }
      setIsModalOpen(false);
    } catch (error) {
      if (error?.response?.status === 409) {
        toast.error("Email Already Exists");
      } else {
        toast.error("Error saving Member");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      setIsLoading(true);
      await axiosInstance.delete(`api/admin/delete${url}Member/${id}`);
      toast.success("Member deleted successfully");
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Server error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
          <Topbar />
    <div className="max-w-4xl mx-auto p-6 bg-white text-gray-900 rounded-xl shadow-lg">
      {/* Manage Access Control Section */}
      <div className="border border-gray-200 rounded-xl mb-6 overflow-hidden">
        <button
          onClick={toggleAccessControl}
          className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-t-xl transition-all duration-300"
        >
          <div className="flex items-center">
            <ShieldCheckIcon className="w-6 h-6 mr-3 text-indigo-600" />
            <span className="text-indigo-800">Manage Access Control</span>
          </div>
          {isAccessControlOpen ? (
            <ChevronUpIcon className="w-5 h-5 text-indigo-600" />
          ) : (
            <ChevronDownIcon className="w-5 h-5 text-indigo-600" />
          )}
        </button>

        {isAccessControlOpen && (
          <div className="px-6 py-4 bg-white border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-6">
              Add and manage users with specific access levels: Accounts, Support, and Sales.
            </p>

            {/* Add New User Button */}
            <button
              onClick={handleAddUserClick}
              disabled={isLoading}
              className="mb-6 px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center disabled:opacity-50"
            >
              <PlusIcon className="w-5 h-5 mr-2" /> Add New Member
            </button>

            {/* Manage Existing Users */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800">Manage Members</h2>

              {isLoading && !users.length ? (
                <div className="flex justify-center py-8">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
                </div>
              ) : users.length > 0 ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {users.map((user) => (
                    user && (
                      <div key={user.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                                <UserIcon className="w-5 h-5 text-indigo-600" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900">{user.fullName || "Unknown"}</h3>
                                <p className="text-sm text-gray-600 flex items-center">
                                  <EnvelopeIcon className="w-4 h-4 mr-1" />
                                  {user.email || "N/A"}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditUserClick(user.id)}
                              disabled={isLoading}
                              className="p-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors disabled:opacity-50"
                              title="Edit"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              disabled={isLoading}
                              className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors disabled:opacity-50"
                              title="Delete"
                            >
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                  <UserIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">No members found.</p>
                  <p className="text-sm text-gray-500 mt-1">Add your first member to get started.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal Dialog Box */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-xl transform transition-all">
            <div className="flex justify-between items-center mb-5 pb-3 border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {editingUserId ? 'Edit Member' : 'Add New Member'}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
                className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Full Name */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={newUser.fullName}
                  onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter full name"
                  disabled={isLoading}
                />
              </div>
              {errors.fullName && <p className="mt-1 text-red-600 text-sm">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Email ID</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter email address"
                  disabled={isLoading}
                />
              </div>
              {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password {editingUserId && <span className="text-gray-500">(leave blank to keep current)</span>}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="pl-10 w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter password"
                  disabled={isLoading}
                />
              </div>
              {errors.password && <p className="mt-1 text-red-600 text-sm">{errors.password}</p>}
            </div>

            {/* Save Button */}
            <div className="flex justify-end space-x-3 pt-3 border-t">
              <button
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
                className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveUser}
                disabled={isLoading}
                className="px-5 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : editingUserId ? (
                  'Save Changes'
                ) : (
                  'Add Member'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
        </>

  );
};

export default StaffManagement;