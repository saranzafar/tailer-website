import { useState } from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Select,
    Option,
} from "@material-tailwind/react";
import { Mail, Save, X, Loader, EyeOff, Eye, PhoneCall } from "lucide-react";
import toast from "react-hot-toast";
import httpServer from "../utils/httpService";
import { UseVerification } from "../utils/VerificationContext";
import { useNavigate } from "react-router-dom";
import { setAuthCookies } from "../utils/cookies";

export function ProfileCard() {
    const { userData } = UseVerification();

    const [profileData, setProfileData] = useState({
        username: userData.username || "Not Available",
        first_name: userData.first_name || "Not Available",
        last_name: userData.last_name || "Not Available",
        email: userData.email || "Not Available",
        phone: userData.phone || "Not Available",
        address: userData.address || "Not Available",
        role: userData.role || "Not Available",
    });
    const [formData, setFormData] = useState({ ...profileData }); // For modal updates
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // Profile modal state
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false); // Password modal state
    const [isChangeEmailModalOpen, setIsChangeEmailModalOpen] = useState(false); // Email modal state
    const [loading, setLoading] = useState({
        profile: false,
        password: false,
        email: false,
    });
    const { logout } = UseVerification();
    const navigate = useNavigate();

    // Toggle modals
    const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
    const togglePasswordModal = () =>
        setIsChangePasswordModalOpen(!isChangePasswordModalOpen);
    const toggleEmailModal = () =>
        setIsChangeEmailModalOpen(!isChangeEmailModalOpen);

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleUpdateProfile = async () => {
        setLoading((prev) => ({ ...prev, profile: true }));
        const { username, first_name, last_name, address } = formData
        try {
            await httpServer("put", "auth/profile/update/", { username, first_name, last_name, address });
            toast.success("Profile updated successfully!");
            setProfileData({ ...formData });
            toggleProfileModal();
        } catch (error) {
            console.error("Error updating profile:", error);
        } finally {
            setLoading((prev) => ({ ...prev, profile: false }));
        }
    };

    const handleChangePassword = async (old_password, new_password) => {
        setLoading((prev) => ({ ...prev, password: true }));
        try {
            const payload = { old_password, new_password };
            await httpServer("post", "auth/change-password/", payload);
            toast.success("Password changed successfully!");
            togglePasswordModal();
        } catch (error) {
            console.error("Error changing password:", error);
            toast.error("Failed to change password.");
        } finally {
            setLoading((prev) => ({ ...prev, password: false }));
            logout()
            navigate("/login")
        }
    };

    const handleChangeEmail = async (newEmail) => {
        setLoading((prev) => ({ ...prev, email: true }));
        try {
            await httpServer("post", "auth/profile/email-change/", { new_email: newEmail });
            setAuthCookies({ verificationChecker: "email" })
            toggleEmailModal();
            navigate("/verification")
        } catch (error) {
            console.error("Error changing email:", error);
            toast.error("Failed to update email.");
        } finally {
            setLoading((prev) => ({ ...prev, email: false }));
        }
    };

    return (
        <section className="flex justify-center items-center p-6 w-full">
            <Card className="w-full max-w-[36rem] bg-white shadow-md rounded-lg">
                {/* Body */}
                <CardBody className="flex flex-col sm:flex-row px-6 py-4 space-y-4 sm:space-y-0 sm:space-x-6 flex-wrap justify-center items-center gap-2">
                    {/* Profile Image on the Left */}
                    <div className="flex-shrink-0">
                        <div className="rounded-full overflow-hidden flex justify-center items-center h-36 w-36">
                            <img
                                src="/img/profile-pic.png" // Replace with your image URL
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content on the Right */}
                    <div className="flex-grow space-y-2 ">
                        {/* Username */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
                            <Typography className="font-semibold text-gray-800 w-full sm:w-1/3">
                                Username
                            </Typography>
                            <Typography className="text-gray-700 font-medium w-full sm:w-2/3">
                                {profileData.username}
                            </Typography>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
                            <Typography className="font-semibold text-gray-800 w-full sm:w-1/3">
                                Email
                            </Typography>
                            <Typography className="text-gray-700 font-medium w-full sm:w-2/3">
                                {profileData.email}
                            </Typography>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
                            <Typography className="font-semibold text-gray-800 w-full sm:w-1/3">
                                Phone
                            </Typography>
                            <Typography className="text-gray-700 font-medium w-full sm:w-2/3">
                                {profileData.phone}
                            </Typography>
                        </div>

                        {/* Address */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
                            <Typography className="font-semibold text-gray-800 w-full sm:w-1/3">
                                Address
                            </Typography>
                            <Typography className="text-gray-700 font-medium w-full sm:w-2/3">
                                {profileData.phone}
                            </Typography>
                        </div>

                        {/* Role */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4">
                            <Typography className="font-semibold text-gray-800 w-full sm:w-1/3">
                                Role
                            </Typography>
                            <Typography className="text-gray-700 font-medium w-full sm:w-2/3">
                                {profileData.role}
                            </Typography>
                        </div>
                    </div>
                </CardBody>

                {/* Footer with Buttons */}
                <CardFooter className="pt-4 px-6 flex flex-col sm:flex-row justify-center sm:justify-end gap-1">
                    <Button
                        onClick={togglePasswordModal}
                        className="w-full sm:w-auto text-button flex items-center justify-center gap-2 text-center"
                        variant="text"
                        disabled={loading.password}
                    >
                        {loading.password ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            "Change Password"
                        )}
                    </Button>
                    <Button
                        onClick={toggleProfileModal}
                        className={`w-full sm:w-auto ${loading.profile ? "bg-gray-400" : "bg-button hover:bg-button-hover"
                            }`}
                        disabled={loading.profile}
                    >
                        {loading.profile ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            "Update Profile"
                        )}
                    </Button>
                </CardFooter>
            </Card>

            {/* Modal for Profile Update */}
            <Dialog open={isProfileModalOpen} handler={toggleProfileModal}>
                <DialogHeader>Update Your Profile</DialogHeader>
                <DialogBody className="space-y-4">
                    {/* Username */}
                    <div>
                        <Typography className="font-medium text-gray-800">
                            Username
                        </Typography>
                        <Input
                            type="text"
                            value={formData.username}
                            onChange={(e) =>
                                handleInputChange("username", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Typography className="font-medium text-gray-800">
                            First Name
                        </Typography>
                        <Input
                            type="text"
                            value={formData.first_name}
                            onChange={(e) =>
                                handleInputChange("first_name", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Typography className="font-medium text-gray-800">
                            Last Name
                        </Typography>
                        <Input
                            type="text"
                            value={formData.last_name}
                            onChange={(e) =>
                                handleInputChange("last_name", e.target.value)
                            }
                        />
                    </div>

                    <div>
                        <Typography className="font-medium text-gray-800">
                            Address
                        </Typography>
                        <Input
                            type="text"
                            value={formData.address}
                            onChange={(e) =>
                                handleInputChange("address", e.target.value)
                            }
                        />
                    </div>
                </DialogBody>

                <DialogFooter className="space-x-4">
                    <Button
                        variant="text"
                        className="text-button hover:text-button-hover flex items-center gap-2"
                        onClick={toggleEmailModal}
                    >
                        <Mail size={20} />
                        Change Email
                    </Button>
                    <Button
                        variant="text"
                        className="text-button hover:text-button-hover flex items-center gap-2"
                        onClick={toggleEmailModal}
                    >
                        <PhoneCall size={20} />
                        Change Number
                    </Button>
                    <Button
                        onClick={handleUpdateProfile}
                        className={`flex items-center gap-2 ${loading.profile ? "bg-gray-400" : "bg-button hover:bg-button-hover"
                            }`}
                        disabled={loading.profile}
                    >
                        {loading.profile ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            <Save size={20} />
                        )}
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Modal for Changing Password */}
            <Dialog open={isChangePasswordModalOpen} handler={togglePasswordModal}>
                <DialogHeader>Change Password</DialogHeader>
                <DialogBody className="space-y-4">
                    <div className="relative">
                        <Input
                            type={formData.showOldPassword ? "text" : "password"}
                            label="Old Password"
                            value={formData.oldPassword}
                            onChange={(e) =>
                                handleInputChange("oldPassword", e.target.value)
                            }
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                            onClick={() =>
                                setFormData((prev) => ({
                                    ...prev,
                                    showOldPassword: !prev.showOldPassword,
                                }))
                            }
                        >
                            {formData.showOldPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                    <div className="relative">
                        <Input
                            type={formData.showNewPassword ? "text" : "password"}
                            label="New Password"
                            value={formData.newPassword}
                            onChange={(e) =>
                                handleInputChange("newPassword", e.target.value)
                            }
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                            onClick={() =>
                                setFormData((prev) => ({
                                    ...prev,
                                    showNewPassword: !prev.showNewPassword,
                                }))
                            }
                        >
                            {formData.showNewPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={togglePasswordModal}
                        className="mr-2 flex items-center gap-1"
                    >
                        <X size={20} />
                        Cancel
                    </Button>
                    <Button
                        className="bg-button hover:bg-button-hover flex items-center gap-2"
                        onClick={() =>
                            handleChangePassword(
                                formData.oldPassword,
                                formData.newPassword
                            )
                        }
                        disabled={loading.password}
                    >
                        {loading.password ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            <Save size={20} />
                        )}
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Modal for Changing Email */}
            <Dialog open={isChangeEmailModalOpen} handler={toggleEmailModal}>
                <DialogHeader>Change Email</DialogHeader>
                <DialogBody className="space-y-4">
                    <Input
                        type="email"
                        label="New Email"
                        onChange={(e) =>
                            handleInputChange("newEmail", e.target.value)
                        }
                    />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={toggleEmailModal}
                        className="mr-2 flex items-center gap-2"
                    >
                        <X size={20} />
                        Cancel
                    </Button>
                    <Button
                        className="flex items-center gap-2 bg-button hover:bg-button-hover"
                        onClick={() => handleChangeEmail(formData.newEmail)}
                        disabled={loading.email}
                    >
                        {loading.email ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            <Save size={20} />
                        )}
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>
        </section>
    );
}

export default ProfileCard;
