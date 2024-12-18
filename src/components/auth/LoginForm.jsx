import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios
import {
    Card,
    CardBody,
    Input,
    Button,
    Typography,
    IconButton,
} from '@material-tailwind/react';

const LogInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading toast
        const toastId = toast.loading('Signing in...');

        try {
            // Replace with your API endpoint
            const response = await axios.post('https://api.example.com/signin', formData);

            // Success toast
            toast.success('Signed in successfully!', { id: toastId });
        } catch (error) {
            // Error toast
            toast.error('Failed to sign in. Please try again.', { id: toastId });
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
                            LogIn to your Account
                        </Typography>
                        <Typography variant="small" className="text-gray-600 mt-2">
                            Don&apos;t have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-button hover:underline font-medium"
                            >
                                Create account here
                            </Link>
                        </Typography>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <Input
                                label="Email or Phone Number"
                                type="text"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="text-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <Input
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="text-sm"
                            />
                            <IconButton
                                variant="text"
                                className="absolute top-2 right-2"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </IconButton>
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
                        <Button type="submit" fullWidth className="mt-4 bg-button hover:bg-button-hover">
                            logIn
                        </Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default LogInForm;
