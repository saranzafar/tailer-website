import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Input, Button, Card, CardBody, Typography } from '@material-tailwind/react';
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
                email: email,
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
                            Remember your password?{' '}
                            <Link
                                to="/login"
                                className="text-button hover:underline font-medium"
                            >
                                Login here
                            </Link>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6">
                        {/* Email Input */}
                        <div className="mb-4">
                            <Input
                                label="Email or Phone number"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                placeholder="Enter your email or phone number"
                                className="text-sm"
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                            className="mt-4 bg-button hover:bg-button-hover"
                        >
                            {isSubmitting ? 'Submitting...' : 'Reset password'}
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default ForgotPassword;
