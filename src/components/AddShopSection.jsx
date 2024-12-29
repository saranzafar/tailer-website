import React, { useState } from "react";
import {
    Card,
    CardBody,
    Typography,
    Button,
    Tooltip,
    Input,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Plus } from "lucide-react";

export function AddShopSection() {
    const [open, setOpen] = useState(false); // Modal state
    const [formData, setFormData] = useState({
        name: "",
        location: null, // Placeholder for Google Maps integration
        address: "",
    });

    // Toggle Modal
    const toggleModal = () => setOpen(!open);

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Submit the form data
    const handleSubmit = () => {
        console.log("Shop Data Submitted:", formData);
        toggleModal(); // Close the modal after submission
    };

    return (
        <section className="flex flex-col-reverse md:flex-row justify-center items-center sm:text-center gap-2 bg-white px-6 py-11 shadow-md rounded-lg">
            {/* Left Section - Content */}
            <div className="flex flex-col space-y-3 md:w-1/2 text-center md:text-start">
                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="font-bold text-2xl md:text-3xl"
                >
                    Add Your Shop
                </Typography>
                <Typography
                    color="gray"
                    className="text-base md:text-lg leading-relaxed font-normal"
                >
                    Seamlessly add your shop to our platform and connect with more customers. Showcase your services, manage orders, and take your business to the next level effortlessly.
                </Typography>
            </div>

            {/* Right Section - Add Button */}
            <div className="flex justify-center items-center w-full md:w-1/2">
                <Card className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center bg-white shadow-lg border border-button rounded-full hover:shadow-md transition-transform hover:scale-105">
                    <Tooltip
                        content="Add a new shop"
                        placement="top"
                        className="bg-gray-800 text-white text-sm px-3 py-2 rounded"
                    >
                        <Button
                            size="lg"
                            className="bg-button hover:bg-button-hover rounded-full p-8 text-white"
                            onClick={toggleModal}
                        >
                            <Plus size={36} />
                        </Button>
                    </Tooltip>
                </Card>
            </div>

            {/* Modal/Pop-Up */}
            <Dialog open={open} handler={toggleModal}>
                <DialogHeader>Add Your Shop</DialogHeader>
                <DialogBody className="space-y-4">
                    {/* Name Field */}
                    <Input
                        label="Shop Name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Location Field */}
                    <div>
                        <Typography className="font-medium text-gray-800 mb-2">
                            Location
                        </Typography>
                        <div className="h-64 w-full bg-gray-200 rounded">
                            {/* Placeholder for Google Maps */}
                            <Typography className="text-center text-gray-500 pt-24">
                                Google Maps integration goes here
                            </Typography>
                        </div>
                    </div>

                    {/* Address Field */}
                    <Input
                        label="Address"
                        id="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    />
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={toggleModal}
                        className="mr-2"
                    >
                        Cancel
                    </Button>
                    <Button
                        className="bg-button hover:bg-button-hover"
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>
        </section>
    );
}

export default AddShopSection;
