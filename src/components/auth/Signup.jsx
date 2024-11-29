import { useState } from 'react';
import { Eye, EyeOff, Image, Loader } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    const [role, setRole] = useState('customer'); // 'customer' or 'tailor'
    const [tailorType, setTailorType] = useState(''); // 'individual' or 'business'
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        logo: null, // For business-tailor logo
    });

    const handleChange = (e) => {
        const { id, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Show a loading toast
        const toastId = toast.loading('Submitting...');

        try {
            const payload = {
                role,
                tailorType: role === 'tailor' ? tailorType : undefined,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                address: formData.address,
                logo: formData.logo,
            };

            // Create a FormData object if a file needs to be sent
            const formDataObj = new FormData();
            Object.keys(payload).forEach((key) => {
                if (payload[key] !== undefined) {
                    formDataObj.append(key, payload[key]);
                }
            });

            const response = await axios.post('https://api.example.com/signin', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Success toast
            toast.success('Signed in successfully!', {
                id: toastId,
            });
        } catch (error) {
            console.log("Error while signing in");

            // Error toast
            toast.error('Failed to sign in. Please try again.', {
                id: toastId,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-7 bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 max-w-lg mx-auto p-10 font-sans shadow-xl">
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                        Sign up
                    </h1>
                    <p className="text-base text-gray-600 dark:text-neutral-400 mt-2">
                        Already have an account?{' '}
                        <Link
                            to="/login"
                            className="text-blue-500 hover:text-blue-600 hover:underline font-semibold transition duration-200"
                        >
                            Login here
                        </Link>
                    </p>
                </div>

                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium mb-2 dark:text-white">
                        Role
                    </label>
                    <select
                        id="role"
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setTailorType('');
                        }}
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                    >
                        <option value="customer">Customer</option>
                        <option value="tailor">Tailor</option>
                    </select>
                </div>

                {role === 'tailor' && (
                    <div className="mb-4">
                        <label
                            htmlFor="tailor-type"
                            className="block text-sm font-medium mb-2 dark:text-white"
                        >
                            Tailor Type
                        </label>
                        <select
                            id="tailor-type"
                            value={tailorType}
                            onChange={(e) => setTailorType(e.target.value)}
                            className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                        >
                            <option value="">Select</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                )}

                {/* Common Fields */}
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                    />
                </div>

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

                <div className="mb-4">
                    <label
                        htmlFor="address"
                        className="block text-sm font-medium mb-2 dark:text-white"
                    >
                        Address
                    </label>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your address"
                        className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                    />
                </div>

                {role === 'tailor' && tailorType === 'business' && (
                    <div className="mb-4">
                        <label
                            htmlFor="logo"
                            className="block text-sm font-medium mb-2 dark:text-white"
                        >
                            Logo
                        </label>
                        <div className="flex items-center gap-3">
                            <input
                                type="file"
                                id="logo"
                                accept="image/*"
                                onChange={handleChange}
                                className="w-full py-3 px-4 border border-gray-300 rounded-lg text-sm font-normal focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 transition duration-200"
                            />
                            <Image size={24} className="text-primary" />
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full py-3 px-4 text-base font-medium rounded-lg bg-primary text-white hover:bg-darkPrimary focus:outline-none transition duration-300"
                >
                    {isSubmitting ? <div>  <span className='animate-spin'><Loader /> Signing In </span></div> : "Sign In"}
                </button>
            </form>
        </div>
    );
};

export default SignInForm;
