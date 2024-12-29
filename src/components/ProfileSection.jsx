import React, { useState } from "react";
import {
    Card,
    CardHeader,
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
    Tooltip,
} from "@material-tailwind/react";
import { Edit3, Lock, Mail, Save, X } from "lucide-react";

export function ProfileCard() {
    const [profileData, setProfileData] = useState({
        username: "john_doe",
        email: "johndoe@example.com",
        role: "Customer",
    });

    const [formData, setFormData] = useState({ ...profileData }); // For modal updates
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); // Profile modal state
    const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] = useState(false); // Password modal state
    const [isChangeEmailModalOpen, setIsChangeEmailModalOpen] = useState(false); // Email modal state

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

    const handleUpdate = () => {
        setProfileData({ ...formData }); // Save updated data
        toggleProfileModal(); // Close modal
    };

    const handleChangePassword = (oldPassword, newPassword) => {
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        togglePasswordModal();
        alert("Password changed successfully!");
    };

    const handleChangeEmail = (newEmail) => {
        console.log("New Email:", newEmail);
        toggleEmailModal();
        alert(
            "Verification email sent to the new email address. Please verify to complete the update."
        );
    };

    return (
        <section className="flex justify-center items-center p-6 w-full">
            <Card className="w-full max-w-[36rem] bg-white shadow-lg rounded-lg">
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
                    <div className="flex-grow space-y-4 ">
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
                    >
                        Update Password
                    </Button>
                    <Button
                        onClick={toggleProfileModal}
                        className="w-full sm:w-auto bg-button hover:bg-button-hover"
                    >
                        Update Profile
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

                    {/* Role */}
                    <div>
                        <Typography className="font-medium text-gray-800">
                            Role
                        </Typography>
                        <Select
                            value={formData.role}
                            onChange={(e) => handleInputChange("role", e)}
                        >
                            <Option value="Customer">Customer</Option>
                            <Option value="Tailor">Tailor</Option>
                        </Select>
                    </div>
                </DialogBody>

                <DialogFooter className="space-x-4">
                    {/* Change Email Button */}
                    <Button
                        variant="text"
                        className="text-button hover:text-button-hover flex items-center gap-2"
                        onClick={toggleEmailModal}
                    >
                        <Mail size={20} />
                        Change Email
                    </Button>

                    {/* Update Button */}
                    <Button
                        onClick={handleUpdate}
                        className="flex items-center gap-2 bg-button hover:bg-button-hover"
                    >
                        <Save size={20} />
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Modal for Changing Password */}
            <Dialog
                open={isChangePasswordModalOpen}
                handler={togglePasswordModal}
            >
                <DialogHeader>Change Password</DialogHeader>
                <DialogBody className="space-y-4">
                    <Input
                        type="password"
                        label="Old Password"
                        onChange={(e) =>
                            handleInputChange("oldPassword", e.target.value)
                        }
                    />
                    <Input
                        type="password"
                        label="New Password"
                        onChange={(e) =>
                            handleInputChange("newPassword", e.target.value)
                        }
                    />
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
                    >
                        <Save size={20} />
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
                    >
                        <Save size={20} />
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>
        </section>
    );
}

export default ProfileCard;
