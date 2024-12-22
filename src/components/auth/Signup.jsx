import React, { useState, useEffect } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import httpServer from "../../utils/httpService";
import { UseVerification } from "../../utils/VerificationContext";

const SignUpForm = ({ plan = null }) => {
    const [role, setRole] = useState("customer"); // 'customer' or 'tailor'
    const [pricingPlan, setPricingPlan] = useState(""); // 'basic', 'standard', or 'premium'
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [signupMethod, setSignupMethod] = useState("email"); // 'email' or 'phone'
    const [email, setEmail] = useState(""); // Separate state for email
    const [phoneNumber, setPhoneNumber] = useState(""); // Separate state for phone number
    const [countryCode, setCountryCode] = useState("+92"); // Default country code
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();
    const { setContextEmail } = UseVerification();
    const [errors, setErrors] = useState({});

    // Set default values based on the plan prop
    useEffect(() => {
        if (plan) {
            setRole("tailor");
            setPricingPlan(plan);
        }
    }, [plan]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        setErrors((prev) => ({ ...prev, [id]: "" })); // Clear error for the field
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform additional validation for password matching
        if (formData.password !== formData.confirmPassword) {
            setErrors({ confirmPassword: "Passwords do not match." });
            return;
        }

        setIsSubmitting(true);
        try {
            const payload = {
                role,
                pricingPlan: role === "tailor" ? pricingPlan : undefined,
                username: formData.name,
                email: signupMethod === "email" ? email : undefined,
                phone: signupMethod === "phone" ? `${countryCode}${phoneNumber}` : undefined,
                password: formData.password,
                password_confirm: formData.confirmPassword,
            };

            await httpServer("post", "auth/register/", payload);
            resetForm();
            setContextEmail(email);
            navigate("/verification");

        } catch (error) {
            console.error("Error during signup:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setRole("customer");
        setPricingPlan("");
        setShowPassword(false);
        setIsSubmitting(false);
        setSignupMethod("email");
        setEmail("");
        setPhoneNumber("");
        setCountryCode("+92");
        setFormData({
            name: "",
            password: "",
            confirmPassword: "",
        });
        setErrors({});
    };

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-md max-w-lg mx-auto p-8 my-10">
            <div className="text-center mb-6">
                <img src="/img/logo.jpeg" alt="Logo" className="h-24 rounded-full mx-auto" />
                <h1 className="text-3xl font-extrabold text-gray-800">Sign up</h1>
                <p className="text-base text-gray-600 mt-2">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-button hover:text-button-hover hover:underline font-semibold"
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
                            setPricingPlan(""); // Reset pricing plan when switching role
                        }}
                        error={!!errors.role}
                        helperText={errors.role || ""}
                    >
                        <Option value="customer">Customer</Option>
                        <Option value="tailor">Tailor</Option>
                    </Select>
                </div>

                {role === "tailor" && (
                    <div className="mb-4">
                        {/* Pricing Plan Selection */}
                        <Select
                            label="Choose Pricing Plan"
                            value={pricingPlan}
                            onChange={(value) => setPricingPlan(value)}
                            error={!!errors.pricingPlan}
                            helperText={errors.pricingPlan || ""}
                        >
                            <Option value="basic">Basic</Option>
                            <Option value="standard">Standard</Option>
                            <Option value="premium">Premium</Option>
                        </Select>
                        <Link
                            to="/pricing-plans"
                            className="text-button hover:text-button-hover hover:underline text-xs text-end"
                        >
                            See Pricing Plans here
                        </Link>
                    </div>
                )}

                {/* Common Fields */}
                <div className="mb-4">
                    <Input
                        label="Name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        error={!!errors.name}
                        helperText={errors.name || ""}
                    />
                </div>

                <div className="mb-4">
                    <Select
                        label="Signup Method"
                        value={signupMethod}
                        onChange={(value) => {
                            setSignupMethod(value);
                            setEmail(""); // Reset email when switching signup method
                            setPhoneNumber(""); // Reset phone number when switching signup method
                        }}
                        required
                        error={!!errors.signupMethod}
                        helperText={errors.signupMethod || ""}
                    >
                        <Option value="email">Email</Option>
                        <Option value="phone">Phone Number</Option>
                    </Select>
                </div>

                {signupMethod === "phone" ? (
                    <div className="flex gap-2 mb-4">
                        <Select
                            label="Country Code"
                            value={countryCode}
                            onChange={(value) => setCountryCode(value)}
                            required
                            error={!!errors.countryCode}
                            helperText={errors.countryCode || ""}
                        >
                            <Option value="+92">🇵🇰 +92 (Pakistan)</Option>
                            <Option value="+1">🇺🇸 +1 (United States)</Option>
                            <Option value="+44">🇬🇧 +44 (United Kingdom)</Option>
                            <Option value="+91">🇮🇳 +91 (India)</Option>
                        </Select>
                        <Input
                            label="Phone Number"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber || ""}
                        />
                    </div>
                ) : (
                    <div className="mb-4">
                        <Input
                            label="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                            error={!!errors.email}
                            helperText={errors.email || ""}
                        />
                    </div>
                )}

                <div className="mb-4">
                    <Input
                        label="Password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
                        error={!!errors.password}
                        helperText={errors.password || ""}
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
                </div>

                <div className="mb-4">
                    <Input
                        label="Confirm Password"
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword || ""}
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
                </div>

                <Button
                    type="submit"
                    fullWidth
                    className="bg-button hover:bg-button-hover"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <Loader className="animate-spin" /> Creating Account
                        </span>
                    ) : (
                        "Sign Up"
                    )}
                </Button>
            </form>
        </div>
    );
};

export default SignUpForm;
