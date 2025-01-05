import { useState, useEffect } from "react";
import { Eye, EyeOff, Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardBody, Typography, Input, Button } from "@material-tailwind/react";
import { UseVerification } from "../../utils/VerificationContext";
import httpServer from "../../utils/httpService";
import { getAuthCookies } from "../../utils/cookies";

const OTPVerificationForm = () => {
    const { contextEmail, contextPhoneNumber, logout } = UseVerification();
    const [otp, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resendTimeout, setResendTimeout] = useState(0);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const navigate = useNavigate();
    const authCookies = getAuthCookies();

    // Redirect if necessary cookies or context are missing
    useEffect(() => {
        if (!contextEmail && !contextPhoneNumber && authCookies.verificationChecker === "login") {
            toast.error("Signup again to verify your account.");
            navigate("/signup");
        }
    }, [contextEmail, contextPhoneNumber, authCookies.verificationChecker, navigate]);

    // General reusable function to handle OTP-related actions
    const getVerificationPayload = () => {
        const tokenPayload = {
            token: otp,
            ...(contextEmail?.includes("@")
                ? { email: contextEmail }
                : { phone_number: contextPhoneNumber }),
        };

        if (authCookies.verificationChecker === "resetPassword") {
            return {
                ...tokenPayload,
                email: contextEmail,
                new_password: password,
            };
        } else if (authCookies.verificationChecker === "email") {
            return { ...tokenPayload, new_email: contextEmail };
        }

        return tokenPayload;
    };

    // OTP Submission Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (otp.trim().length !== 6) {
            toast.error("Please enter a valid 6-digit OTP.");
            return;
        }

        setIsSubmitting(true);
        const toastId = toast.loading("Verifying OTP...");

        try {
            const payload = getVerificationPayload();

            if (authCookies.verificationChecker === "resetPassword") {
                await httpServer("post", "auth/password-reset/verify/", payload);
                toast.success("Password reset successfully!", { id: toastId });
            } else if (authCookies.verificationChecker === "email") {
                await httpServer("post", "auth/profile/email-change/verify/", payload);
                toast.success("Email updated successfully!", { id: toastId });
            } else {
                await httpServer("post", "auth/verify-token/", payload);
                toast.success("OTP verified successfully!", { id: toastId });
            }

            logout();
            navigate("/login");
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to verify OTP. Please try again.",
                { id: toastId }
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    // OTP Resend Handler
    const handleResendOTP = async () => {
        setIsResendDisabled(true);

        let count = 30;
        const interval = setInterval(() => {
            if (count === 0) {
                clearInterval(interval);
                setIsResendDisabled(false);
                setResendTimeout(0);
            } else {
                setResendTimeout(count);
                count -= 1;
            }
        }, 1000);

        try {
            const payload = getVerificationPayload();

            await httpServer("post", "auth/resend-token/", payload);
            toast.success(`OTP resent to ${contextEmail || contextPhoneNumber}`);
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to resend OTP. Please try again."
            );
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card className="max-w-md w-full shadow-xl">
                <CardBody className="p-8 py-4">
                    <div className="text-center mb-6">
                        <img
                            src="./img/logo.jpeg"
                            alt="Stitch4U"
                            className="h-24 rounded-full mx-auto mb-4"
                        />
                        <Typography variant="h4" className="font-bold text-gray-800">
                            Verify OTP
                        </Typography>
                        <Typography variant="small" className="text-gray-600 mt-2">
                            Please enter the OTP sent to your{" "}
                            {contextEmail?.includes("@") ? "email" : "phone"}:{" "}
                            <span className="font-semibold">{contextEmail || contextPhoneNumber}</span>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="OTP"
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            placeholder="Enter 6-digit OTP"
                            required
                            className="text-sm"
                        />
                        {authCookies.verificationChecker === "resetPassword" && (
                            <Input
                                label="Password"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            className="text-white bg-button hover:bg-button-hover"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex justify-center items-center">
                                    <Loader className="animate-spin mr-2" size={20} />
                                    Verifying...
                                </div>
                            ) : (
                                "Verify OTP"
                            )}
                        </Button>

                        <div className="mt-4 text-center space-x-4">
                            <Button
                                variant="text"
                                onClick={handleResendOTP}
                                disabled={isResendDisabled}
                                className={`text-button hover:underline font-medium ${isResendDisabled ? "cursor-not-allowed opacity-50" : ""
                                    }`}
                            >
                                {isResendDisabled
                                    ? `Resend OTP in ${resendTimeout}s`
                                    : "Resend OTP"}
                            </Button>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-button hover:underline"
                            >
                                Go to Login
                            </Link>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default OTPVerificationForm;