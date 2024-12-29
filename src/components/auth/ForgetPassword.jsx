import { useState } from 'react';
import { Input, Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import httpServer from '../../utils/httpService'; // Replace with your HTTP utility
import { UseVerification } from '../../utils/VerificationContext';

const ForgotPassword = () => {
    const [contact, setContact] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate()
    const isEmail = (input) => /\S+@\S+\.\S+/.test(input);
    const isPhoneNumber = (input) => /^\+?[0-9]{10,15}$/.test(input);
    const { setContextEmail } = UseVerification();

    // Handler for input change
    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    // Reset form function
    const resetForm = () => {
        setContact('');
    };

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the input
        if (!contact) {
            toast.error('Please enter email or phone number.');
            return;
        }

        if (!isEmail(contact) && !isPhoneNumber(contact)) {
            toast.error('Please enter a valid email or phone number.');
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                email: isEmail(contact) ? contact : undefined,
                phone: isPhoneNumber(contact) ? contact : undefined,
            };

            // Use your HTTP utility to send the request
            await httpServer('post', 'auth/resend-token/', payload);
            console.log("is email: ", isEmail);

            setContextEmail(contact)

            // Show success message
            toast.success(
                isEmail(contact)
                    ? 'Password reset instructions have been sent to your email.'
                    : 'Password reset instructions have been sent to your phone.'
            );

            resetForm(); // Reset the form
            navigate("/verification")
        } catch (error) {
            console.error('Error during forgot password request:', error);
            toast.error(
                error.response?.data?.message || 'An error occurred. Please try again.'
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
                        {/* Email/Phone Input */}
                        <div className="mb-4">
                            <Input
                                label="Email or Phone number"
                                type="text"
                                value={contact}
                                onChange={handleContactChange}
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
