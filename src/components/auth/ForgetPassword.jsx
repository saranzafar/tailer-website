import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    // State for form fields
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // To manage the loading state

    // Handler for email input
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Form submit handler
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        // Check if email is provided
        if (!email) {
            toast.error('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        try {
            // Make API call using Axios
            const response = await axios.post('https://your-api-endpoint.xyz/forgot-password', {
                email: email
            });

            // Show success message
            toast.success('Password reset instructions have been sent to your email.');
        } catch (error) {
            // Handle errors
            toast.error('An error occurred, please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 max-w-xl min-w-[25rem]">
                <div className="p-4 sm:p-7">
                    <div className="text-center">
                        <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Forgot password?</h1>
                        <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                            Remember your password?
                            <Link
                                className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500 ml-2"
                                to="/login"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-5">
                        {/* Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                    <label htmlFor="email" className="block text-sm mb-2 dark:text-white">Email or Phone number</label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            value={email}
                                            onChange={handleEmailChange}
                                            required
                                            aria-describedby="email-error"
                                            placeholder='Enter your email or phone number '
                                        />
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                    </p>
                                </div>
                                {/* End Form Group */}

                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-darkPrimary focus:outline-none focus:bg-primary disabled:opacity-50 disabled:pointer-events-none"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Reset password'}
                                </button>
                            </div>
                        </form>
                        {/* End Form */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
