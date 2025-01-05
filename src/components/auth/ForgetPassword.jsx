import { useState } from "react";
import { Input, Button, Card, CardBody, Typography, Select, Option } from "@material-tailwind/react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import httpServer from "../../utils/httpService";
import { UseVerification } from "../../utils/VerificationContext";
import { setAuthCookies } from "../../utils/cookies";

const ForgotPassword = () => {
    const [method, setMethod] = useState("email"); // Default method
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [countryCode, setCountryCode] = useState("+92"); // Default country code
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { setContextEmail } = UseVerification();

    const isEmail = (input) => /\S+@\S+\.\S+/.test(input);

    // Reset form function
    const resetForm = () => {
        setEmail("");
        setPhoneNumber("");
    };

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the input based on the selected method
        if (method === "email" && !isEmail(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (method === "phone" && phoneNumber.trim().length < 7) {
            toast.error("Please enter a valid phone number.");
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                email: method === "email" ? email : undefined,
                phone: method === "phone" ? `${countryCode}${phoneNumber}` : undefined,
            };

            // Use your HTTP utility to send the request
            await httpServer("post", "auth/password-reset/", payload);
            setAuthCookies({ verificationChecker: "resetPassword" })
            if (method === "email") {
                setContextEmail(email);
                toast.success("Password reset instructions have been sent to your email.");
            } else {
                setContextEmail(`${countryCode}${phoneNumber}`); // Store the phone number in context
                toast.success("Password reset instructions have been sent to your phone.");
            }

            resetForm(); // Reset the form
            navigate("/verification");
        } catch (error) {
            console.error("Error during forgot password request:", error);
            toast.error(
                error.response?.data?.message || "An error occurred. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="w-full max-w-md shadow-md">
                <CardBody className="p-8">
                    <div className="text-center">
                        <img
                            src="./img/logo.jpeg"
                            alt="Stitch4U"
                            className="h-24 rounded-full mx-auto mb-4"
                        />
                        <Typography variant="h4" className="font-bold text-gray-800">
                            Forgot password?
                        </Typography>
                        <Typography variant="small" className="text-gray-600 mt-2">
                            Remember your password?{" "}
                            <Link
                                to="/login"
                                className="text-button hover:underline font-medium"
                            >
                                Login here
                            </Link>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        {/* Method Selection */}
                        <Select
                            label="Select Reset Method"
                            value={method}
                            onChange={(value) => {
                                setMethod(value);
                                resetForm(); // Reset fields when switching method
                            }}
                            required
                        >
                            <Option value="email">Email</Option>
                            <Option value="phone">Phone Number</Option>
                        </Select>

                        {/* Conditional Inputs Based on Selected Method */}
                        {method === "email" ? (
                            <Input
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Enter your email"
                                className="text-sm"
                            />
                        ) : (
                            <div className="flex gap-2">
                                <Select
                                    label="Country Code"
                                    value={countryCode}
                                    onChange={(value) => setCountryCode(value)}
                                    required
                                >
                                    <Option value="+92">🇵🇰 +92 (Pakistan)</Option>
                                    <Option value="+1">🇺🇸 +1 (United States)</Option>
                                    <Option value="+44">🇬🇧 +44 (United Kingdom)</Option>
                                    <Option value="+91">🇮🇳 +91 (India)</Option>
                                    <Option value="+81">🇯🇵 +81 (Japan)</Option>
                                    <Option value="+33">🇫🇷 +33 (France)</Option>
                                    <Option value="+49">🇩🇪 +49 (Germany)</Option>
                                    <Option value="+86">🇨🇳 +86 (China)</Option>
                                    <Option value="+61">🇦🇺 +61 (Australia)</Option>
                                    <Option value="+55">🇧🇷 +55 (Brazil)</Option>
                                    <Option value="+7">🇷🇺 +7 (Russia)</Option>
                                    <Option value="+39">🇮🇹 +39 (Italy)</Option>
                                    <Option value="+34">🇪🇸 +34 (Spain)</Option>
                                    <Option value="+82">🇰🇷 +82 (South Korea)</Option>
                                    <Option value="+31">🇳🇱 +31 (Netherlands)</Option>
                                </Select>
                                <Input
                                    label="Phone Number"
                                    type="text"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    placeholder="Enter your phone number"
                                    className="text-sm w-full"
                                />
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            className={`mt-4 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-button hover:bg-button-hover"
                                }`}
                        >
                            {isSubmitting ? "Submitting..." : "Reset Password"}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default ForgotPassword;
