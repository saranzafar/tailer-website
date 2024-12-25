import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";

export function ProfileUpdateCard() {
    const [profileData, setProfileData] = useState({
        username: "john_doe",
        email: "johndoe@example.com",
        role: "Customer",
        oldPassword: "",
        newPassword: "",
    });

    const [isUpdated, setIsUpdated] = useState(false); // Tracks if any change has occurred

    const handleInputChange = (field, value) => {
        setProfileData((prev) => ({
            ...prev,
            [field]: value,
        }));
        setIsUpdated(true);
    };

    const handleUpdate = () => {
        console.log("Updated Data:", profileData);
        setIsUpdated(false);
    };

    return (
        <section className="flex justify-center items-center p-4">
            <Card className="w-full max-w-[36rem] bg-white shadow-lg rounded-lg">
                {/* Header */}
                <CardHeader
                    floated={false}
                    shadow={false}
                    className="rounded bg-button py-4 px-6"
                >
                    <Typography
                        color="white"
                        className="text-[24px] font-bold text-center"
                    >
                        Update Your Profile
                    </Typography>
                </CardHeader>

                {/* Body */}
                <CardBody className="px-6 py-4 space-y-4">
                    {/* Username Field */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 space-y-2 sm:space-y-0">
                        <Typography className="font-medium text-gray-800 w-full sm:w-1/3">
                            Username
                        </Typography>
                        <div className="w-full sm:w-2/3">
                            <Input
                                type="text"
                                value={profileData.username}
                                onChange={(e) =>
                                    handleInputChange("username", e.target.value)
                                }
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 space-y-2 sm:space-y-0">
                        <Typography className="font-medium text-gray-800 w-full sm:w-1/3">
                            Email
                        </Typography>
                        <div className="w-full sm:w-2/3">
                            <Input
                                type="email"
                                value={profileData.email}
                                onChange={(e) =>
                                    handleInputChange("email", e.target.value)
                                }
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Role Field */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 space-y-2 sm:space-y-0">
                        <Typography className="font-medium text-gray-800 w-full sm:w-1/3">
                            Role
                        </Typography>
                        <div className="w-full sm:w-2/3">
                            <Select
                                value={profileData.role}
                                onChange={(e) => handleInputChange("role", e)}
                                className="w-full"
                            >
                                <Option value="Customer">Customer</Option>
                                <Option value="Tailor">Tailor</Option>
                            </Select>
                        </div>
                    </div>

                    {/* Old Password Field */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 space-y-2 sm:space-y-0">
                        <Typography className="font-medium text-gray-800 w-full sm:w-1/3">
                            Old Password
                        </Typography>
                        <div className="w-full sm:w-2/3">
                            <Input
                                type="password"
                                value={profileData.oldPassword}
                                onChange={(e) =>
                                    handleInputChange("oldPassword", e.target.value)
                                }
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* New Password Field */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-4 space-y-2 sm:space-y-0">
                        <Typography className="font-medium text-gray-800 w-full sm:w-1/3">
                            New Password
                        </Typography>
                        <div className="w-full sm:w-2/3">
                            <Input
                                type="password"
                                value={profileData.newPassword}
                                onChange={(e) =>
                                    handleInputChange("newPassword", e.target.value)
                                }
                                className="w-full"
                            />
                        </div>
                    </div>
                </CardBody>

                {/* Footer */}
                <CardFooter className="pt-4 px-6 flex justify-end">
                    <Button
                        onClick={handleUpdate}
                        disabled={!isUpdated}
                        className={`${isUpdated
                            ? "bg-button hover:bg-button-hover"
                            : "bg-gray-400 cursor-not-allowed"
                            } text-white font-semibold w-full`}
                    >
                        Update
                    </Button>
                </CardFooter>
            </Card>
        </section>
    );
}

export default ProfileUpdateCard;
