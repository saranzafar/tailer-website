import { useState } from 'react';
import { Loader } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

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
        // Show a loading toast
        const toastId = toast.loading('Verifying OTP...');

        try {
            // API call to verify OTP
            const response = await axios.post('https://api.example.com/verify-otp', { email, otp });

            // Success toast
            toast.success('OTP verified successfully!', {
                id: toastId,
            });
        } catch (error) {
            console.log("Error while verifying OTP");

            // Error toast
            toast.error('Failed to verify OTP. Please try again.', {
                id: toastId,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResendOTP = async () => {
        setIsResendDisabled(true);

        // Start a countdown for resend button
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

        // Call API to resend OTP
        try {
            const response = await axios.post('https://api.example.com/resend-otp', { email });
            toast.success('OTP sent again to your email!', {
                id: 'resend-toast',
            });
        } catch (error) {
            toast.error('Failed to resend OTP. Please try again.');
        }
    };

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 max-w-lg mx-auto p-10 font-sans shadow-xl">
            {/* OTP Verification Form */}
            <form onSubmit={handleSubmit}>
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                        Verify OTP
                    </h1>
                    <p className="text-base text-gray-600 dark:text-neutral-400 mt-2">
                        Please enter the OTP sent to your email: <span className="font-semibold">{email}</span>
                    </p>
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="otp"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        OTP
                    </label>
                    <input
                        type="text"
                        id="otp"
                        value={otp}
                        onChange={handleChange}
                        maxLength={6}
                        placeholder="Enter 6-digit OTP"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 text-base font-medium rounded-lg bg-primary text-white hover:bg-darkPrimary focus:outline-none transition duration-300"
                >
                    {isSubmitting ? (
                        <div className="flex justify-center items-center">
                            <span className="animate-spin">
                                <Loader />
                            </span>
                            Verifying...
                        </div>
                    ) : (
                        'Verify OTP'
                    )}
                </button>

                <div className="mt-4 text-center flex justify-evenly">
                    <button
                        type="button"
                        onClick={handleResendOTP}
                        className={`text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline transition duration-200 ${isResendDisabled ? 'cursor-not-allowed opacity-50' : ''
                            }`}
                        disabled={isResendDisabled}
                    >
                        {isResendDisabled ? `Resend OTP in ${resendTimeout}s` : 'Resend OTP'}
                    </button>
                    <Link to={"/login"} className='text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline transition duration-200'>Goto Login</Link>
                </div>
            </form>
        </div>
    );
};

export default OTPVerificationForm;
