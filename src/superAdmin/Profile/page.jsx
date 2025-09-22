import React, { useContext, useState } from "react";
import SuperAdminAuthContext from "../../context/superAdmin/SuperAdminAuthContext";
import axiosInstance from "../../utils/axiosinstance";
import Layout from "../layout/Layout";

const SuperAdminProfile = () => {
    const { superAdminDetails, updateSuperAdminDetails } = useContext(SuperAdminAuthContext);
    const [profileData, setProfileData] = useState(superAdminDetails);
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState({
        name: profileData?.name || "",
        email: profileData?.email || "",
    });

    const [passwordForm, setPasswordForm] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Handle profile update
    const handleProfileUpdate = async () => {
        try {
            const res = await axiosInstance.put(`/api/superAdmin/profile/${superAdminDetails?.id}`, editForm);
            setProfileData(res.data?.user); // update UI
            updateSuperAdminDetails(res.data?.token)
            setIsEditing(false);
            setSuccessMessage("Profile updated successfully!");
            setErrorMessage("");
        } catch (error) {
            console.error("Profile update failed:", error);
            setErrorMessage("Failed to update profile.");
            setSuccessMessage("");
        }
    };

    // Handle password change
    // Handle password change
    const handlePasswordChange = async () => {
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            setErrorMessage("New passwords do not match!");
            setSuccessMessage("");
            return;
        }

        try {
            await axiosInstance.put(
                `/api/superAdmin/change-password/${superAdminDetails?.id}`,
                passwordForm
            );

            setPasswordForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
            setSuccessMessage("Password changed successfully!");
            setErrorMessage("");
        } catch (error) {
            console.error("Password change failed:", error);

            // Get backend error if available
            const backendError =
                error.response?.data?.error || "Failed to change password. Please try again.";

            setErrorMessage(backendError);
            setSuccessMessage("");
        }
    };


    return (
        <Layout>
            <div className="p-6 max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>

                {successMessage && <p className="text-green-600">{successMessage}</p>}
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}

                {/* Profile Info / Edit */}
                <div className="bg-white border rounded-lg shadow p-6 space-y-4">
                    {!isEditing ? (
                        <>
                            <div className="flex justify-between">
                                <span className="font-medium">Name:</span>
                                <span>{profileData.name || profileData.fullName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Email:</span>
                                <span>{profileData.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Role:</span>
                                <span>{profileData.role}</span>
                            </div>
                            <button
                                onClick={() => setIsEditing(true)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                            >
                                Edit Profile
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                value={editForm.name}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, name: e.target.value })
                                }
                                placeholder="Name"
                                className="w-full border px-4 py-2 rounded-lg mb-2"
                            />
                            <input
                                type="email"
                                value={editForm.email}
                                onChange={(e) =>
                                    setEditForm({ ...editForm, email: e.target.value })
                                }
                                placeholder="Email"
                                className="w-full border px-4 py-2 rounded-lg mb-2"
                            />
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="bg-gray-400 text-white px-4 py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleProfileUpdate}
                                    className="bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </>
                    )}
                </div>

                {/* Password Change */}
                <div className="bg-white border rounded-lg shadow p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                    <input
                        type="password"
                        placeholder="Old Password"
                        value={passwordForm.oldPassword}
                        onChange={(e) =>
                            setPasswordForm({ ...passwordForm, oldPassword: e.target.value })
                        }
                        className="w-full border px-4 py-2 rounded-lg mb-2"
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={passwordForm.newPassword}
                        onChange={(e) =>
                            setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                        }
                        className="w-full border px-4 py-2 rounded-lg mb-2"
                    />
                    <input
                        type="password"
                        placeholder="Confirm New Password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) =>
                            setPasswordForm({
                                ...passwordForm,
                                confirmPassword: e.target.value,
                            })
                        }
                        className="w-full border px-4 py-2 rounded-lg mb-4"
                    />
                    <button
                        onClick={handlePasswordChange}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Change Password
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default SuperAdminProfile;
