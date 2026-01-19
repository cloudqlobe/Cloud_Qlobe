import React, { useState } from "react";
import { Eye, EyeOff, Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CustomerValidateRegisterForm, submitRegistration } from "../Validation/customerFormValidation";

const CustomerRegisterFlow = () => {
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [companyDetails, setCompanyDetails] = useState({
        companyName: "",
        companyEmail: "",
        contactPerson: "",
        country: "",
        companyPhone: "",
        address: "",
        companyWebsite: "",
    });

    const [userDetails, setUserDetails] = useState({
        userFirstname: "",
        userLastname: "",
        username: "",
        userEmail: "",
        userMobile: "",
        password: "",
        confirmPassword: "",
        designation: "",
    });

    const [technicalDetails, setTechnicalDetails] = useState({
        supportEmail: "",
        sipPort: "",
        switchIps: [{ ip: "", status: "" }],
    });

    const handleCompanyChange = (field, value) => {
        setCompanyDetails((prev) => ({ ...prev, [field]: value }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleUserChange = (field, value) => {
        setUserDetails((prev) => ({ ...prev, [field]: value }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleTechnicalChange = (field, value) => {
        setTechnicalDetails((prev) => ({ ...prev, [field]: value }));
        // Clear error when user types
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSwitchIpChange = (index, value) => {
        const updatedIps = [...technicalDetails.switchIps];
        updatedIps[index].ip = value;
        setTechnicalDetails((prev) => ({ ...prev, switchIps: updatedIps }));
        // Clear error when user types
        if (errors[`switchIp${index}`]) {
            setErrors(prev => ({ ...prev, [`switchIp${index}`]: undefined }));
        }
    };

    const handleRemoveIp = (index) => {
        if (technicalDetails.switchIps.length > 1) {
            const updatedIps = technicalDetails.switchIps.filter((_, i) => i !== index);
            setTechnicalDetails(prev => ({ ...prev, switchIps: updatedIps }));

            // Clear any errors for the removed IP
            const newErrors = { ...errors };
            delete newErrors[`switchIp${index}`];
            // Renumber remaining IP errors
            Object.keys(newErrors).forEach(key => {
                if (key.startsWith('switchIp') && parseInt(key.replace('switchIp', '')) > index) {
                    const newKey = `switchIp${parseInt(key.replace('switchIp', '')) - 1}`;
                    newErrors[newKey] = newErrors[key];
                    delete newErrors[key];
                }
            });
            setErrors(newErrors);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({}); // Clear previous errors

        // Validate form
        const validationErrors = CustomerValidateRegisterForm(companyDetails, userDetails, technicalDetails);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const formData = {
                company: companyDetails,
                user: userDetails,
                technical: technicalDetails
            };

            await submitRegistration(formData);
            setSubmitSuccess(true);
            Navigate('/customer/login')
        } catch (error) {
            console.log("error", error);

            if (error.response?.data?.duplicateFields) {
                // Handle duplicate fields error specifically
                setErrors(prev => ({
                    ...prev,
                    ...error.response.data.duplicateFields,
                    form: 'Please correct the duplicate fields below'
                }));
            } else {
                setErrors(prev => ({
                    ...prev,
                    form: error.message || 'Registration failed. Please try again.'
                }));
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div>
            <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 py-6">
                <div className="flex flex-col gap-6 w-full max-w-7xl">
                    {/* Main Cards Container */}
                    <form
                        onSubmit={handleSubmit}
                        className="
    flex flex-col
    md:flex-row
    gap-6
    justify-center
  "
                    >
                        {/* Left Card - Company Details */}
                        <div className="
  w-full
  md:max-w-sm
  flex-1
  mx-auto
  bg-white/90
  backdrop-blur-sm
  rounded-2xl
  shadow-2xl
  p-6
  border border-gray-100
  hover:shadow-3xl
  transition-all
  duration-300
  hover:-translate-y-1
">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <h2 className="text-xl font-bold text-gray-800">Company Details</h2>
                            </div>
                            <div className="space-y-3">
                                {/* Company Name */}
                                <div>
                                    <input
                                        type="text"
                                        value={companyDetails.companyName}
                                        onChange={(e) => handleCompanyChange("companyName", e.target.value)}
                                        className={`w-full p-3 border ${errors.companyName ? 'border-red-500' : 'border-gray-200'
                                            } rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                                        placeholder="Company Name"
                                    />
                                    {errors.form && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            {errors.form?.includes("companyName")
                                                ? (
                                                    <>
                                                        <X className="w-3 h-3" />
                                                        <span>This company name is already registered</span>
                                                    </>
                                                )
                                                : errors.companyName
                                            }
                                        </p>
                                    )}
                                </div>


                                <div>
                                    <input
                                        type="email"
                                        value={companyDetails.companyEmail}
                                        onChange={(e) => handleCompanyChange("companyEmail", e.target.value)}
                                        className={`w-full p-3 border ${errors.companyEmail ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                                        placeholder="Company Email"
                                    />
                                    {errors.form && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            {errors.form?.includes("companyEmail") ? (
                                                <>
                                                    <X className="w-3 h-3" />
                                                    <span>This email is already registered</span>
                                                </>
                                            ) : (
                                                errors.companyEmail
                                            )}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        value={companyDetails.contactPerson}
                                        onChange={(e) => handleCompanyChange("contactPerson", e.target.value)}
                                        className={`w-full p-3 border ${errors.contactPerson ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                                        placeholder="Contact Person"
                                    />
                                    {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={companyDetails.country}
                                        onChange={(e) => handleCompanyChange("country", e.target.value)}
                                        className={`w-full p-3 border ${errors.country ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all`}
                                        placeholder="Country"
                                    />
                                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                                </div>

                                <input
                                    type="text"
                                    value={companyDetails.companyPhone}
                                    onChange={(e) => handleCompanyChange("companyPhone", e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                                    placeholder="Company Phone"
                                />

                                <textarea
                                    value={companyDetails.address}
                                    onChange={(e) => handleCompanyChange("address", e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                                    rows="3"
                                    placeholder="Address"
                                />

                                <input
                                    type="text"
                                    value={companyDetails.companyWebsite}
                                    onChange={(e) => handleCompanyChange("companyWebsite", e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                                    placeholder="Company Website"
                                />
                            </div>
                        </div>

                        {/* Middle Card - User Details */}
                        <div className="
  w-full
  md:max-w-sm
  flex-1
  mx-auto
  bg-white/90
  backdrop-blur-sm
  rounded-2xl
  shadow-2xl
  p-6
  border border-gray-100
  hover:shadow-3xl
  transition-all
  duration-300
  hover:-translate-y-1
">                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                                <h2 className="text-xl font-bold text-gray-800">User Details</h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <input
                                        type="text"
                                        value={userDetails.userFirstname}
                                        onChange={(e) => handleUserChange("userFirstname", e.target.value)}
                                        className={`w-full p-3 border ${errors.userFirstname ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                        placeholder="First Name"
                                    />
                                    {errors.userFirstname && <p className="text-red-500 text-xs mt-1">{errors.userFirstname}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={userDetails.userLastname}
                                        onChange={(e) => handleUserChange("userLastname", e.target.value)}
                                        className={`w-full p-3 border ${errors.userLastname ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                        placeholder="Last Name"
                                    />
                                    {errors.userLastname && <p className="text-red-500 text-xs mt-1">{errors.userLastname}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={userDetails.username}
                                        onChange={(e) => handleUserChange("username", e.target.value)}
                                        className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                        placeholder="Username"
                                    />
                                    {errors && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            {errors?.form?.includes("username") ? (
                                                <>
                                                    <X className="w-3 h-3" />
                                                    <span>This username is not available</span>
                                                </>
                                            ) : (
                                                errors.username
                                            )}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        value={userDetails.userEmail}
                                        onChange={(e) => handleUserChange("userEmail", e.target.value)}
                                        className={`w-full p-3 border ${errors.userEmail ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                        placeholder="Email"
                                    />
                                    {errors && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            {errors?.form?.includes("userEmail") ? (
                                                <>
                                                    <X className="w-3 h-3" />
                                                    <span>This email is already in use</span>
                                                </>
                                            ) : (
                                                errors.userEmail
                                            )}
                                        </p>
                                    )}
                                </div>

                                <input
                                    type="text"
                                    value={userDetails.userMobile}
                                    onChange={(e) => handleUserChange("userMobile", e.target.value)}
                                    className="w-full p-3 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                                    placeholder="Mobile"
                                />

                                <div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={userDetails.password}
                                            onChange={(e) => handleUserChange("password", e.target.value)}
                                            className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm pr-10 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                            placeholder="Password"
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>

                                <div>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={userDetails.confirmPassword}
                                            onChange={(e) => handleUserChange("confirmPassword", e.target.value)}
                                            className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm pr-10 focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                            placeholder="Confirm Password"
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={userDetails.designation}
                                        onChange={(e) => handleUserChange("designation", e.target.value)}
                                        className={`w-full p-3 border ${errors.designation ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all`}
                                        placeholder="Designation (e.g., Project Manager)"
                                    />
                                    {errors.designation && <p className="text-red-500 text-xs mt-1">{errors.designation}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Right Card - Technical Details */}
                        <div className="
  w-full
  md:max-w-sm
  flex-1
  mx-auto
  bg-white/90
  backdrop-blur-sm
  rounded-2xl
  shadow-2xl
  p-6
  border border-gray-100
  hover:shadow-3xl
  transition-all
  duration-300
  hover:-translate-y-1
">                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                                <h2 className="text-xl font-bold text-gray-800">Technical Details</h2>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <input
                                        type="email"
                                        value={technicalDetails.supportEmail}
                                        onChange={(e) => handleTechnicalChange("supportEmail", e.target.value)}
                                        className={`w-full p-3 border ${errors.supportEmail ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                                        placeholder="Support Email"
                                    />
                                    {errors.supportEmail && <p className="text-red-500 text-xs mt-1">{errors.supportEmail}</p>}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        value={technicalDetails.sipPort}
                                        onChange={(e) => handleTechnicalChange("sipPort", e.target.value)}
                                        className={`w-full p-3 border ${errors.sipPort ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                                        placeholder="SIP Port"
                                    />
                                    {errors.sipPort && <p className="text-red-500 text-xs mt-1">{errors.sipPort}</p>}
                                </div>

                                {technicalDetails.switchIps.map((switchIp, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="text"
                                                value={switchIp.ip}
                                                onChange={(e) => handleSwitchIpChange(index, e.target.value)}
                                                className={`w-full p-3 border ${errors[`switchIp${index}`] ? 'border-red-500' : 'border-gray-200'} rounded-lg text-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all`}
                                                placeholder={`Switch IP ${index + 1}`}
                                            />
                                            {technicalDetails.switchIps.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => handleRemoveIp(index)}
                                                    className="p-2 text-red-500 hover:text-red-700 transition-colors"
                                                    aria-label="Remove IP"
                                                >
                                                    <X className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                        {errors[`switchIp${index}`] && <p className="text-red-500 text-xs mt-1">{errors[`switchIp${index}`]}</p>}
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    onClick={() => setTechnicalDetails((prev) => ({ ...prev, switchIps: [...prev.switchIps, { ip: "", status: "active" }] }))}
                                    className="w-full py-2 border-2 border-dashed border-orange-300 text-orange-600 rounded-lg hover:border-orange-400 hover:bg-orange-50 transition text-sm font-medium hover:scale-105"
                                >
                                    + Add Switch IP
                                </button>
                            </div>

                            {/* Enhanced Submit Button & Social Icons */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                {submitSuccess ? (
                                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                        Registration successful! We'll contact you soon.
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Processing...' : '🚀 Submit Registration'}
                                    </button>
                                )}

                                <div className="flex justify-center items-center gap-4 mt-4">
                                    <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-full cursor-pointer transition-all hover:scale-110 shadow-lg"><Facebook className="w-5 h-5 text-blue-600" /></div>
                                    <div className="p-2 bg-gradient-to-r from-sky-100 to-sky-200 hover:from-sky-200 hover:to-sky-300 rounded-full cursor-pointer transition-all hover:scale-110 shadow-lg"><Twitter className="w-5 h-5 text-sky-600" /></div>
                                    <div className="p-2 bg-gradient-to-r from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 rounded-full cursor-pointer transition-all hover:scale-110 shadow-lg"><Instagram className="w-5 h-5 text-pink-600" /></div>
                                    <div className="p-2 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-full cursor-pointer transition-all hover:scale-110 shadow-lg"><Linkedin className="w-5 h-5 text-blue-700" /></div>
                                </div>
                            </div>                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerRegisterFlow;