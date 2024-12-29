import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import httpServer from "../../utils/httpService";
import { UseVerification } from "../../utils/VerificationContext";

const LogInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "", // Can be email or phone number
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track button disabled state
    const { login } = UseVerification();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const toastId = toast.loading("Signing in...");
        setIsSubmitting(true);

        try {
            const payload = {
                username: formData.username, // Username (email or phone number)
                password: formData.password,
            };

            // Validate that username is provided
            if (!formData.username) {
                toast.error("Please enter your email or phone number.", { id: toastId });
                setIsSubmitting(false);
                return;
            }

            // Validate password is provided
            if (!formData.password) {
                toast.error("Please enter your password.", { id: toastId });
                setIsSubmitting(false);
                return;
            }

            await httpServer("post", "auth/login-token/", payload);
            toast.success("Signed in successfully!", { id: toastId });
            login();
            navigate("/");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Failed to sign in. Please try again.";
            toast.error(errorMessage, { id: toastId });
        } finally {
            setIsSubmitting(false); // Re-enable the button
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md shadow-lg">
                <CardBody className="p-8">
                    <div className="text-center mb-6">
                        <img
                            src="./img/logo.jpeg"
                            alt="Stitch4U"
                            className="h-24 rounded-full mx-auto mb-4"
                        />
                        <Typography variant="h4" className="font-bold text-gray-800">
                            Log In to Your Account
                        </Typography>
                        <Typography variant="small" className="text-gray-600 mt-2">
                            Don&apos;t have an account?{" "}
                            <Link
                                to="/signup"
                                className="text-button hover:underline font-medium"
                            >
                                Create account here
                            </Link>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Username Input */}
                        <div>
                            <Input
                                label="Email or Phone Number"
                                type="text"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="text-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="text-sm"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-button hover:underline font-medium"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isSubmitting} // Disable the button while submitting
                            className={`mt-4 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-button hover:bg-button-hover"
                                }`}
                        >
                            {isSubmitting ? "Signing in..." : "Log In"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default LogInForm;
