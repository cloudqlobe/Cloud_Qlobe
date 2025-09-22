import React, { useContext, useState, useEffect } from 'react';
import SuperAdminAuthContext from '../../context/superAdmin/SuperAdminAuthContext';
import axiosInstance from '../../utils/axiosinstance';

const SuperAdminProfile = () => {
  const { superAdminDetails } = useContext(SuperAdminAuthContext);
  const [profileData, setProfileData] = useState(null);
console.log(superAdminDetails);

//   if (!profileData) return <div className="p-6">Loading profile...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Profile</h2>
      <div className="bg-white border rounded-lg shadow p-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Name:</span>
          <span>{profileData.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Email:</span>
          <span>{profileData.email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Role:</span>
          <span>{profileData.role}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Created At:</span>
          <span>{new Date(profileData.createdAt).toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminProfile;
