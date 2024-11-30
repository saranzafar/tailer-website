import { useState, useEffect } from 'react';
import { Eye, EyeOff, Image, Loader, CameraIcon, Mail, PhoneCall, X, StarIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, CardFooter } from '@material-tailwind/react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const ProfileUpdateForm = () => {
    const [role, setRole] = useState('customer'); // 'customer' or 'tailor'
    const [tailorType, setTailorType] = useState(''); // 'individual' or 'business'
    const [showPassword, setShowPassword] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        logo: null, // For business-tailor logo
    });

    const demoData = [
        {
            avatar: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            locationName: "Golden Gate Park",
            cityName: "San Francisco",
            rating: 4,
            description: "A beautiful and vast park filled with gardens, museums, and recreation areas.",
        },
        {
            avatar: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            locationName: "Eiffel Tower",
            cityName: "Paris",
            rating: 5,
            description: "An iconic symbol of love and a must-visit landmark in France.",
        },
        {
            avatar: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            locationName: "Great Wall",
            cityName: "Beijing",
            rating: 5,
            description: "A magnificent historical monument with breathtaking views.",
        },
        {
            avatar: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            locationName: "Statue of Liberty",
            cityName: "New York",
            rating: 4,
            description: "A symbol of freedom standing tall in New York harbor.",
        },
        {
            avatar: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/07/googleMapsTricksHero.jpg",
            locationName: "Mount Fuji",
            cityName: "Tokyo",
            rating: 5,
            description: "A sacred mountain offering scenic views and rich cultural significance.",
        },
    ];


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
        setIsSaving(true);
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
            setIsSaving(false);
        }
    };


    return (
        <div className="-mt-16 pb-20">
            <div
                className="w-full mb-4 rounded-lg bg-[url('https://cdn.pixabay.com/photo/2017/08/03/12/21/tailoring-2575930_960_720.jpg')] bg-cover bg-bottom bg-no-repeat items-center h-96 ">
            </div>
            <div className='container mx-auto px-6 mt-10'>
                <div className="grid grid-cols-12 gap-5">
                    <div className='col-span-12 md:col-span-4 text-center'>
                        <div className='bg-gray-50 shadow-lg border border-gray-200 rounded-lg p-6'>
                            <div className="flex items-center gap-x-3 flex-col ">
                                <div className="shrink-0">
                                    <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                                </div>

                                <div className="grow">
                                    <h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
                                        Eliana Garcia
                                    </h1>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Kotli
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <ul className="mt-5 flex flex-col gap-y-4 items-center">
                                    <li className="flex items-center gap-x-2.5">
                                        <Mail className='text-gray-500' size={18} />
                                        <Link className="text-[13px] text-primary  hover:text-primary hover:underline  focus:outline-none focus:decoration-2" to="#">
                                            elianagarcia997@about.me
                                        </Link>
                                    </li>
                                    <li className="flex items-center gap-x-2.5">
                                        <PhoneCall className='text-gray-500' size={18} />
                                        <Link className="text-[13px] text-primary  hover:text-primary hover:underline  focus:outline-none focus:decoration-2" to="#">
                                            123-4567-333
                                        </Link>
                                    </li>
                                    <Button
                                        type="button"
                                        className="bg-primary hover:border-logoBrown hover:text-white hover:bg-logoBrown focus:outline-none focus:border-logoBrown focus:text-white disabled:opacity-50 disabled:pointer-events-none font-semibold"
                                        aria-haspopup="dialog" aria-expanded="false"
                                        aria-controls="hs-slide-down-animation-modal"
                                        data-hs-overlay="#hs-slide-down-animation-modal"
                                    >
                                        Edit Profile
                                    </Button>
                                </ul>

                                {/* model */}
                                <div id="hs-slide-down-animation-modal" className="text-start hs-overlay hidden size-full fixed top-0 start-0 z-[100] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabIndex="-1" aria-labelledby="hs-slide-down-animation-modal-label">
                                    <div className="hs-overlay-animation-target hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                                            <div className="flex justify-between items-center py-3 px-4 border-b">
                                                <h3 id="hs-slide-down-animation-modal-label" className="font-bold text-gray-800">
                                                    Update Profile
                                                </h3>
                                                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-slide-down-animation-modal">
                                                    <span className="sr-only">Close</span>
                                                    <X />
                                                </button>
                                            </div>

                                            <div className="p-4 overflow-y-auto">
                                                <form onSubmit={handleSubmit}>
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
                                                </form>


                                            </div>
                                            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
                                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-slide-down-animation-modal">
                                                    Close
                                                </button>
                                                <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-logoBrown focus:outline-none focus:bg-logoBrown disabled:opacity-50 disabled:pointer-events-none transition-all duration-200">
                                                    {isSaving ? <div>  <span className='animate-spin'><Loader /> Updateing </span></div> : "Update"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='col-span-12 md:col-span-8  '>
                        {demoData.map((item, index) => (
                            <Card key={index} color="transparent" className="w-full space-x-3 p-5 bg-gray-50 mb-3">
                                <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                >
                                    <Avatar size="lg" variant="circular" src={item.avatar} alt={item.locationName} />
                                    <div className="flex w-full flex-col gap-0.5">
                                        <div className="flex items-center justify-between">
                                            <Typography variant="h5" color="blue-gray">
                                                {item.locationName}
                                            </Typography>
                                            <div className="5 flex items-center gap-0">
                                                {[...Array(5)].map((_, i) => (
                                                    <StarIcon
                                                        key={i}
                                                        className={i < item.rating ? "text-orange-600" : "text-gray-400"}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <Typography color="blue-gray">{item.cityName}</Typography>
                                    </div>
                                </CardHeader>
                                <CardBody className="mb-6 p-0 text-primary text-lg">
                                    <Typography>{item.description}</Typography>
                                </CardBody>
                                <CardFooter className="text-end m-o p-0">
                                    <Button
                                        type="button"
                                        className="bg-primary hover:border-logoBrown hover:text-white hover:bg-logoBrown focus:outline-none focus:border-logoBrown focus:text-white disabled:opacity-50 disabled:pointer-events-none font-semibold"
                                    >
                                        Visit Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}

                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProfileUpdateForm;
