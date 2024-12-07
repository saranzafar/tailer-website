import { useState } from 'react';
import { Loader } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
    Card,
    CardBody,
    Typography,
    Input,
    Button,
} from '@material-tailwind/react';

const OTPVerificationForm = ({ email }) => {
    const [otp, setOtp] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [resendTimeout, setResendTimeout] = useState(0);
    const [isResendDisabled, setIsResendDisabled] = useState(false);

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const toastId = toast.loading('Verifying OTP...');

        try {
            // Replace with your API endpoint
            const response = await axios.post('https://api.example.com/verify-otp', { email, otp });
            toast.success('OTP verified successfully!', { id: toastId });
        } catch (error) {
            toast.error('Failed to verify OTP. Please try again.', { id: toastId });
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
            const response = await axios.post('https://api.example.com/resend-otp', { email });
            toast.success('OTP sent again to your email!');
        } catch (error) {
            toast.error('Failed to resend OTP. Please try again.');
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
                            Please enter the OTP sent to your email: <span className="font-semibold">{email}</span>
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
                            className="text-white bg-primary hover:bg-logoBrown"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <div className="flex justify-center items-center">
                                    <Loader className="animate-spin mr-2" size={20} />
                                    Verifying...
                                </div>
                            ) : (
                                'Verify OTP'
                            )}
                        </Button>

                        <div className="mt-4 text-center space-x-4">
                            <Button
                                variant="text"
                                onClick={handleResendOTP}
                                disabled={isResendDisabled}
                                className={`text-blue-600 hover:underline font-medium ${isResendDisabled ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                {isResendDisabled
                                    ? `Resend OTP in ${resendTimeout}s`
                                    : 'Resend OTP'}
                            </Button>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-blue-600 hover:underline"
                            >
                                Goto Login
                            </Link>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default OTPVerificationForm;
