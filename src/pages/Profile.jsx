import { useState, useEffect } from 'react';
import { Eye, EyeOff, Image, Loader, CameraIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const ProfileUpdateForm = () => {
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

    // useEffect(() => {
    //     // Fetch user data from backend (mock API endpoint)
    //     const fetchProfileData = async () => {
    //         try {
    //             const { data } = await axios.get('https://api.example.com/user-profile'); // Mock API
    //             setFormData({
    //                 name: data.name || '',
    //                 email: data.email || '',
    //                 password: '', // Keep password blank for security
    //                 address: data.address || '',
    //                 logo: null, // Handle logo separately
    //             });
    //             setRole(data.role || 'customer');
    //             setTailorType(data.tailorType || '');
    //         } catch (error) {
    //             toast.error('Failed to fetch profile data. Please try again.');
    //         }
    //     };

    //     fetchProfileData();
    // }, []);

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
        const toastId = toast.loading('Updating profile...');

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

            const formDataObj = new FormData();
            Object.keys(payload).forEach((key) => {
                if (payload[key] !== undefined) {
                    formDataObj.append(key, payload[key]);
                }
            });

            await axios.put('https://api.example.com/update-profile', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Profile updated successfully!', { id: toastId });
        } catch (error) {
            toast.error('Failed to update profile. Please try again.', { id: toastId });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className=" bg-white border border-gray-200 rounded-xl dark:bg-neutral-900 dark:border-neutral-700 mx-auto font-sans shadow-xl -mt-16">
            <div
                className="w-full mb-4 rounded-lg bg-[url('https://cdn.pixabay.com/photo/2017/08/03/12/21/tailoring-2575930_960_720.jpg')] bg-cover bg-bottom bg-no-repeat items-center h-96 ">
            </div>
            <div className='container mx-auto px-6'>
                <div className="">

                    <div
                        className="mx-auto w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                    </div>
                    {/* Form */}
                    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
                        <div className="text-center mb-6">
                            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white">
                                Update Profile
                            </h1>
                            <p className="text-base text-gray-600 dark:text-neutral-400 mt-2">
                                Make changes to your profile information below.
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
                            <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-white">
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
                                    placeholder="Enter your new password"
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
                            <label htmlFor="address" className="block text-sm font-medium mb-2 dark:text-white">
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
                                <label htmlFor="logo" className="block text-sm font-medium mb-2 dark:text-white">
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
                            className="w-full py-3 px-4 text-base font-medium rounded-lg bg-primary text-white hover:bg-logoBrown focus:outline-none transition duration-300"
                        >
                            {isSubmitting ? (
                                <div>
                                    <span className="animate-spin">
                                        <Loader size={20} />
                                    </span>
                                    Updating...
                                </div>
                            ) : (
                                'Update Profile'
                            )}
                        </button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default ProfileUpdateForm;
