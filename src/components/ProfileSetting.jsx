import { useState } from 'react';
import { ProfileSection } from '.';
import { Button, Input } from '@material-tailwind/react';
import { Loader } from 'lucide-react';
import { getAuthCookies, setAuthCookies } from '../utils/cookies';
import httpServer from '../utils/httpService';
import { UseVerification } from '../utils/VerificationContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function ProfileSetting() {
    const userData = getAuthCookies();
    const { setContextPhoneNumber, setContextEmail } = UseVerification();
    const [profileData, setProfileData] = useState(() => ({
        username: userData?.username || "Not Available",
        first_name: userData?.first_name || "Not Available",
        last_name: userData?.last_name || "Not Available",
        email: userData?.email || "Not Available",
        phone: userData?.phone || "+92",
        newPhoneNumber: userData?.phone || "", // Initialize with current phone
        newEmail: userData?.email || "", // Initialize with current email
        address: userData?.address || "Not Available",
        role: userData?.role || "Not Available",
    }));
    const [formData, setFormData] = useState({ ...profileData });
    const [loading, setLoading] = useState({
        profile: false,
        password: false,
        email: false,
        phone: false,
    });
    const navigate = useNavigate();

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleUpdateProfile = async () => {
        setLoading((prev) => ({ ...prev, profile: true }));
        const { username, first_name, last_name, address } = formData;
        try {
            const response = await httpServer("put", "auth/profile/update/", { username, first_name, last_name, address });
            setAuthCookies(response?.data);

            setProfileData({ ...formData });
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading((prev) => ({ ...prev, profile: false }));
        }
    };

    const handleChangePassword = async () => {
        setLoading((prev) => ({ ...prev, password: true }));
        try {
            await httpServer("post", "auth/password-reset/", { email: profileData.email });
            setAuthCookies({ verificationChecker: "resetPassword" })
            setContextEmail(profileData.email);
            navigate("/verification")
        } catch (error) {
            console.error("Error changing password:", error);
        } finally {
            setLoading((prev) => ({ ...prev, password: false }));
        }
    };

    const handleChangeEmail = async (newEmail) => {
        setLoading((prev) => ({ ...prev, email: true }));
        try {
            await httpServer("post", "auth/profile/email-change/", { new_email: newEmail });
            setAuthCookies({ verificationChecker: "email" });
            setContextEmail(newEmail);
            navigate("/verification");
        } catch (error) {
            console.error("Error changing email:", error);
            toast.error("Failed to update email.");
        } finally {
            setLoading((prev) => ({ ...prev, email: false }));
        }
    };

    const handleChangePhone = async (phone) => {
        setLoading((prev) => ({ ...prev, phone: true }));
        try {
            await httpServer("post", "auth/profile/phone-change/", { new_phone_number: phone });
            setAuthCookies({ verificationChecker: "phone" });
            setContextPhoneNumber(phone);
            navigate("/verification");
        } catch (error) {
            console.error("Error changing phone number:", error);
            toast.error("Failed to update Phone Number.");
        } finally {
            setLoading((prev) => ({ ...prev, phone: false }));
        }
    };

    return (
        <div className='space-y-6'>
            <div className='border font-semibold space-y-4 bg-white p-8 rounded-lg text-gray-900 '>
                <div className='border-b-2 py-4 flex justify-between'>
                    <div className='w-full md:w-[80%] space-y-3'>
                        <h2 className='text-2xl pb-4'>Profile</h2>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="text"
                                value={formData.username}
                                label='User Name'
                                onChange={(e) => handleInputChange("username", e.target.value)}
                            />
                        </div>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="text"
                                value={formData.first_name}
                                label='First Name'
                                onChange={(e) => handleInputChange("first_name", e.target.value)}
                            />
                        </div>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="text"
                                value={formData.last_name}
                                label='Last Name'
                                onChange={(e) => handleInputChange("last_name", e.target.value)}
                            />
                        </div>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="text"
                                value={formData.address}
                                label='Address'
                                onChange={(e) => handleInputChange("address", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className='hidden md:block'>
                        <img src="./img/profile-pic.png" className='w-28 rounded-full' alt="" />
                    </div>
                </div>
                <div className='flex justify-between flex-wrap gap-4'>
                    <p className='text-gray-800'>Change profile data and click on save button</p>
                    <div className='flex gap-0 md:gap-2'>
                        <Button
                            onClick={handleChangePassword}
                            className="sm:w-auto text-button flex items-center justify-center gap-2 text-center"
                            variant="text"
                            disabled={loading.password}
                        >
                            {loading.profile && <Loader className="animate-spin" size={16} />}
                            Change Password
                        </Button>
                        <Button
                            onClick={handleUpdateProfile}
                            className={`flex items-center gap-2 ${loading.profile ? "bg-gray-400" : "bg-button hover:bg-button-hover"}`}
                            disabled={loading.profile}
                        >
                            {loading.profile && <Loader className="animate-spin" size={16} />}
                            Save
                        </Button>
                    </div>
                </div>
            </div>

            <div className='border font-semibold space-y-4 bg-white p-8 rounded-lg text-gray-900 '>
                <div className='border-b-2 py-4 flex justify-between'>
                    <div className=' space-y-3'>
                        <h2 className='text-2xl pb-4'>Email</h2>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="email"
                                label="Email"
                                value={formData.newEmail}
                                onChange={(e) =>
                                    handleInputChange("newEmail", e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap gap-4'>
                    <p className='text-gray-800'>Change email and click on save button</p>
                    <Button
                        onClick={() => handleChangeEmail(formData.newEmail)}
                        className={`flex items-center gap-2 ${loading.email ? "bg-gray-400" : "bg-button hover:bg-button-hover"}`}
                        disabled={loading.email}
                    >
                        {loading.email && <Loader className="animate-spin" size={16} />}
                        Save
                    </Button>
                </div>
            </div>

            <div className='border font-semibold space-y-4 bg-white p-8 rounded-lg text-gray-900 '>
                <div className='border-b-2 py-4 flex justify-between'>
                    <div className=' space-y-3'>
                        <h2 className='text-2xl pb-4'>Phone number</h2>
                        <div className='w-[8rem] md:w-[20rem]'>
                            <Input
                                type="tel"
                                label="Phone Number"
                                maxLength={14}
                                minLength={11}
                                value={formData.phone}
                                onChange={(e) => handleInputChange("phone", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap gap-4'>
                    <p className='text-gray-800'>Change phone number and click on save button</p>
                    <Button
                        onClick={() => handleChangePhone(formData.phone)}
                        className={`flex items-center gap-2 ${loading.phone ? "bg-gray-400" : "bg-button hover:bg-button-hover"}`}
                        disabled={loading.phone}
                    >
                        {loading.phone && <Loader className="animate-spin" size={16} />}
                        Save
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ProfileSetting;
