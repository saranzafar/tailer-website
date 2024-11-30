import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios

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
        <div className='flex justify-center items-center h-screen'>
            <div className="bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 max-w-lg p-10 font-sans shadow-lg ">
                <div className="text-center mb-6">
                    <img src="./img/logo.jpeg" alt="Stitch4U" className='h-24 rounded-full mx-auto' />
                    <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                        LogIn to your Account
                    </h1>
                    <p className="text-base text-gray-600 dark:text-neutral-400 mt-2">
                        Don&apos;t have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-blue-500 hover:text-blue-600 hover:underline font-semibold transition duration-200"
                        >
                            Create account here
                        </Link>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 dark:text-white"
                        >
                            Email or Phone Number
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email or phone number"
                            required
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium mb-2 dark:text-white"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-primary transition duration-200"
                            >
                                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="mb-4 flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-500 hover:underline font-semibold transition duration-200"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 text-base font-medium rounded-lg bg-primary text-white hover:bg-darkPrimary focus:outline-none transition duration-300"
                    >
                        logIn
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LogInForm;
