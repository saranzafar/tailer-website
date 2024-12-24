import { useState, useEffect } from "react";
import { Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
    Card,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import { UseVerification } from "../../utils/VerificationContext";
import httpServer from "../../utils/httpService";

const OTPVerificationForm = () => {
    const { contextEmail, setContextEmail } = UseVerification();
    const [otp, setOtp] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resendTimeout, setResendTimeout] = useState(0);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!contextEmail) {
            navigate("/signup");
        }
    }, [contextEmail, navigate]);

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const toastId = toast.loading("Verifying OTP...");

        try {
            await httpServer("post", "auth/verify-token/", { email: contextEmail, token: otp });
            toast.success("OTP verified successfully!", { id: toastId });
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

    const handleResendOTP = async () => {
        setIsResendDisabled(true);

        // Countdown timer for resend
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
            await httpServer("post", "/auth/resend-otp/", { contextEmail });
            toast.success("OTP sent again to your email!");
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
                            Please enter the OTP sent to your email:{" "}
                            <span className="font-semibold">{contextEmail}</span>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            label="OTP"
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={handleChange}
                            maxLength={6}
                            placeholder="Enter 6-digit OTP"
                            required
                            className="text-sm"
                        />

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
                                className={`text-button hover:underline font-medium ${isResendDisabled
                                    ? "cursor-not-allowed opacity-50"
                                    : ""
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
