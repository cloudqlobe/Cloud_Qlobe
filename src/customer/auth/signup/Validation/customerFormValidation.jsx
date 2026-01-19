import axiosInstance from "../../../../utils/axiosinstance";

export const CustomerValidateRegisterForm = (companyDetails, userDetails, technicalDetails) => {
  const errors = {};

  // Company Details Validation
  if (!companyDetails.companyName.trim()) {
    errors.companyName = 'Company name is required';
  }
  if (!companyDetails.companyEmail.trim()) {
    errors.companyEmail = 'Company email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(companyDetails.companyEmail)) {
    errors.companyEmail = 'Invalid email format';
  }
  if (!companyDetails.contactPerson.trim()) {
    errors.contactPerson = 'Contact person is required';
  }
  if (!companyDetails.country.trim()) {
    errors.country = 'Country is required';
  }

  // User Details Validation
  if (!userDetails.userFirstname.trim()) {
    errors.userFirstname = 'First name is required';
  }
  if (!userDetails.userLastname.trim()) {
    errors.userLastname = 'Last name is required';
  }
  if (!userDetails.username.trim()) {
    errors.username = 'Username is required';
  }
  if (!userDetails.userEmail.trim()) {
    errors.userEmail = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.userEmail)) {
    errors.userEmail = 'Invalid email format';
  }
  // Password Validation
  if (!userDetails.password) {
    errors.password = 'Password is required';
  } else if (userDetails.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  } else if (!/[A-Z]/.test(userDetails.password)) {
    errors.password = 'Password must contain at least one uppercase letter';
  } else if (!/[a-z]/.test(userDetails.password)) {
    errors.password = 'Password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(userDetails.password)) {
    errors.password = 'Password must contain at least one number';
  } else if (!/[^A-Za-z0-9]/.test(userDetails.password)) {
    errors.password = 'Password must contain at least one special character';
  }
  if (userDetails.password !== userDetails.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Designation Validation
  if (!userDetails.designation.trim()) {
    errors.designation = 'Designation is required';
  } else if (userDetails.designation.length < 2) {
    errors.designation = 'Designation must be at least 2 characters';
  } else if (!/^[a-zA-Z\s-]+$/.test(userDetails.designation)) {
    errors.designation = 'Designation can only contain letters, spaces, and hyphens';
  }


  // Technical Details Validation
  if (!technicalDetails.supportEmail.trim()) {
    errors.supportEmail = 'Support email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(technicalDetails.supportEmail)) {
    errors.supportEmail = 'Invalid email format';
  }
  // SIP Port Validation
  if (!technicalDetails.sipPort) {
    errors.sipPort = 'SIP port is required';
  } else if (!/^[0-9]+$/.test(technicalDetails.sipPort)) {
    errors.sipPort = 'SIP port must be a number';
  } else if (parseInt(technicalDetails.sipPort) < 1 || parseInt(technicalDetails.sipPort) > 65535) {
    errors.sipPort = 'SIP port must be between 1 and 65535';
  }

  // IP Address Validation
  technicalDetails.switchIps.forEach((ip, index) => {
    if (!ip.ip.trim()) {
      errors[`switchIp${index}`] = `Switch IP ${index + 1} is required`;
    } else if (!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip.ip)) {
      errors[`switchIp${index}`] = `Invalid IP address format for Switch IP ${index + 1}`;
    }
  });


  return errors;
};

export const submitRegistration = async (formData) => {
  try {
    // Create a deep copy of the formData to avoid mutating the original object
    const dataToSend = JSON.parse(JSON.stringify(formData));

    // Remove confirmPassword from the user object if it exists
    if (dataToSend.user && dataToSend.user.confirmPassword) {
      delete dataToSend.user.confirmPassword;
    }

    const response = await axiosInstance.post('/api/customer', dataToSend, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Registration error response:', error.response.data);
      console.error('Status code:', error.response.status);

      // Handle duplicate fields error specifically
      if (error.response.data?.duplicateFields) {
        const duplicateFields = error.response.data.duplicateFields;
        throw new Error(duplicateFields);
      }

      const serverMessage = error.response.data?.message || 'Registration failed';
      throw new Error(serverMessage);
    } else if (error.request) {
      console.error('Registration error request:', error.request);
      throw new Error('No response received from server');
    } else {
      console.error('Registration setup error:', error.message);
      throw error;
    }
  }
};