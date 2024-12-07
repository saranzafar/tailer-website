import React, { useState, useEffect } from 'react';
import { Input, Button, Select, Option, Textarea } from '@material-tailwind/react';
import { Eye, EyeOff, Image, Loader } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignUpForm = ({ plan = null }) => {
    const [role, setRole] = useState('customer'); // 'customer' or 'tailor'
    const [tailorType, setTailorType] = useState(''); // 'individual' or 'business'
    const [pricingPlan, setPricingPlan] = useState(''); // 'basic', 'standard', or 'premium'
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        logo: null, // For business-tailor logo
    });
    const [validationErrors, setValidationErrors] = useState({});

    // Set default values based on the plan prop
    useEffect(() => {
        if (plan) {
            setRole('tailor');
            setPricingPlan(plan);
        }
    }, [plan]);

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: files ? files[0] : value,
        }));
        setValidationErrors((prev) => ({ ...prev, [id]: '' })); // Clear validation error on input
    };

    const validateFields = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = 'Name is required.';
        if (!formData.email.trim()) errors.email = 'Email is required.';
        if (!formData.password.trim()) errors.password = 'Password is required.';
        if (!formData.address.trim()) errors.address = 'Address is required.';
        if (role === 'tailor' && !tailorType) errors.tailorType = 'Tailor type is required.';
        if (role === 'tailor' && !pricingPlan) errors.pricingPlan = 'Pricing plan is required.';
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate fields
        const errors = validateFields();
        if (Object.keys(errors).length > 0) {
            setValidationErrors(errors);
            toast.error('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);
        const toastId = toast.loading('Submitting...');
        try {
            const payload = {
                role,
                tailorType: role === 'tailor' ? tailorType : undefined,
                pricingPlan: role === 'tailor' ? pricingPlan : undefined,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                address: formData.address,
                logo: formData.logo,
            };

            const formDataObj = new FormData();
            Object.keys(payload).forEach((key) => {
                if (payload[key] !== undefined) {
                    formDataObj.append(key, payload[key]);
                }
            });

            await axios.post('https://api.example.com/signin', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Signed in successfully!', { id: toastId });
        } catch (error) {
            toast.error('Failed to sign in. Please try again.', { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-md max-w-lg mx-auto p-8 my-10">
            <div className="text-center mb-6">
                <img src="/img/logo.jpeg" alt="Stitch4U" className="h-24 rounded-full mx-auto" />
                <h1 className="text-3xl font-extrabold text-gray-800">Sign up</h1>
                <p className="text-base text-gray-600 mt-2">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="text-blue-500 hover:text-blue-600 hover:underline font-semibold"
                    >
                        Login here
                    </Link>
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Role Selection */}
                <div className="mb-4">
                    <Select
                        label="Role"
                        value={role}
                        onChange={(value) => {
                            setRole(value);
                            setTailorType('');
                            setPricingPlan(''); // Reset pricing plan when switching role
                        }}
                    >
                        <Option value="customer">Customer</Option>
                        <Option value="tailor">Tailor</Option>
                    </Select>
                </div>

                {role === 'tailor' && (
                    <>
                        {/* Tailor Type Selection */}
                        <div className="mb-4">
                            <Select
                                label="Tailor Type"
                                value={tailorType}
                                onChange={(value) => setTailorType(value)}
                                error={validationErrors.tailorType}
                            >
                                <Option value="individual">Individual</Option>
                                <Option value="business">Business</Option>
                            </Select>
                            {validationErrors.tailorType && (
                                <span className="text-red-500 text-sm">{validationErrors.tailorType}</span>
                            )}
                        </div>

                        {/* Pricing Plan Selection */}
                        <div className="mb-4">
                            <Select
                                label="Choose Pricing Plan"
                                value={pricingPlan}
                                onChange={(value) => setPricingPlan(value)}
                                error={validationErrors.pricingPlan}
                            >
                                <Option value="basic">Basic</Option>
                                <Option value="standard">Standard</Option>
                                <Option value="premium">Premium</Option>
                            </Select>
                            <Link
                                to="/"
                                className="text-blue-600 hover:text-blue-700 hover:underline text-xs text-end"
                            >
                                See Pricing Plans here
                            </Link>
                            {validationErrors.pricingPlan && (
                                <span className="text-red-500 text-sm">{validationErrors.pricingPlan}</span>
                            )}
                        </div>
                    </>
                )}

                {/* Common Fields */}
                <div className="mb-4">
                    <Input
                        label="Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={validationErrors.name}
                    />
                    {validationErrors.name && <span className="text-red-500 text-sm">{validationErrors.name}</span>}
                </div>

                <div className="mb-4">
                    <Input
                        label="Email or Phone Number"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={validationErrors.email}
                    />
                    {validationErrors.email && <span className="text-red-500 text-sm">{validationErrors.email}</span>}
                </div>

                <div className="mb-4">
                    <Input
                        label="Password"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        error={validationErrors.password}
                        icon={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-500"
                            >
                                {showPassword ? <EyeOff /> : <Eye />}
                            </button>
                        }
                    />
                    {validationErrors.password && (
                        <span className="text-red-500 text-sm">{validationErrors.password}</span>
                    )}
                </div>

                <div className="mb-4">
                    <Textarea
                        label="Address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        error={validationErrors.address}
                    />
                    {validationErrors.address && (
                        <span className="text-red-500 text-sm">{validationErrors.address}</span>
                    )}
                </div>

                {role === 'tailor' && tailorType === 'business' && (
                    <div className="mb-4">
                        <Input
                            label="Business Logo"
                            id="logo"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            icon={<Image />}
                        />
                    </div>
                )}

                <Button
                    type="submit"
                    fullWidth
                    className="bg-primary hover:bg-logoBrown"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <Loader className="animate-spin" /> Creating Account
                        </span>
                    ) : (
                        'Sign Up'
                    )}
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
