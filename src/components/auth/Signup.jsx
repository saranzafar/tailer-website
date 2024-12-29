import { useState } from "react";
import { Input, Button, Select, Option } from "@material-tailwind/react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import httpServer from "../../utils/httpService";
import toast from "react-hot-toast";

const SignUpForm = () => {
    const [role, setRole] = useState("customer");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [signupMethod, setSignupMethod] = useState("email");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                role,
                username: formData.name,
                phone_number: signupMethod === "phone" ? phoneNumber : undefined,
                email: signupMethod === "email" ? email : undefined,
                password: formData.password,
                password_confirm: formData.confirmPassword,
            };

            // API call using httpServer
            await httpServer("post", "auth/register/", payload);

            // On success, navigate to the verification page
            // if (signupMethod === "email") {
            //     toast.success("Verification email sent to your email address.");
            // } else {
            //     toast.success("Verification SMS sent to your phone number.");
            // }

            navigate("/login");
        } catch (error) {
            // Errors are already handled in httpServer
            console.error("Error during signup:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-md max-w-lg mx-auto p-8 my-10">
            <div className="text-center mb-6">
                <img
                    src="/img/logo.jpeg"
                    alt="Logo"
                    className="h-24 rounded-full mx-auto"
                />
                <h1 className="text-3xl font-extrabold text-gray-800">Sign Up</h1>
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
                        onChange={(value) => setRole(value)}
                    >
                        <Option value="customer">Customer</Option>
                        <Option value="tailor">Tailor</Option>
                    </Select>
                </div>

                {/* Username Field */}
                <div className="mb-4">
                    <Input
                        label="Username"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Signup Method Selection */}
                <div className="mb-4">
                    <Select
                        label="Signup Method"
                        value={signupMethod}
                        onChange={(value) => {
                            setSignupMethod(value);
                            setEmail("");
                            setPhoneNumber("");
                        }}
                    >
                        <Option value="email">Email</Option>
                        <Option value="phone">Phone Number</Option>
                    </Select>
                </div>

                {signupMethod === "phone" ? (
                    <div className="mb-4">
                        <Input
                            label="Phone Number"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
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
                        />
                    </div>
                )}

                {/* Password Fields */}
                <div className="mb-4">
                    <Input
                        label="Password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleChange}
                        required
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
