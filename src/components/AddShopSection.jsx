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
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

export function AddShopSection() {
    const [open, setOpen] = useState(false); // Modal state
    const [formData, setFormData] = useState({
        name: "",
        location: { lat: 37.7749, lng: -122.4194 }, // Default coordinates (San Francisco)
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

    // Custom Component to Handle Map Click
    const LocationPicker = () => {
        useMapEvents({
            click: (e) => {
                setFormData((prev) => ({
                    ...prev,
                    location: {
                        lat: e.latlng.lat,
                        lng: e.latlng.lng,
                    },
                }));
            },
        });
        return null;
    };

    // Submit the form data
    const handleSubmit = () => {
        // Validate form data
        if (!formData.name || !formData.address) {
            alert("Please fill in all required fields.");
            return;
        }

        console.log("Shop Data Submitted:", formData);

        // Simulate API submission (replace this with API call)
        setTimeout(() => {
            alert("Shop data saved successfully!");
        }, 500);

        toggleModal(); // Close the modal after submission
    };

    return (
        <section className="flex flex-col md:flex-row items-center justify-center bg-white p-8 space-y-6 md:space-y-0 md:space-x-12 min-h-[40vh] shadow-lg rounded-lg">
            {/* Left Card with Larger Plus Button */}
            <Card className="w-full max-w-[20rem] rounded-xl bg-white flex items-center justify-center transition-transform hover:scale-105">
                <CardBody className="flex items-center justify-center">
                    <Tooltip
                        content="Add a new shop"
                        placement="top"
                        className="bg-gray-800 text-white text-sm px-3 py-2 rounded"
                    >
                        <Button
                            size="lg"
                            className="bg-button hover:bg-button-hover rounded-full p-8"
                            onClick={toggleModal}
                        >
                            <Plus size={42} color="white" />
                        </Button>
                    </Tooltip>
                </CardBody>
            </Card>

            {/* Right Section with Heading and Text */}
            <div className="flex flex-col space-y-4 text-center md:text-left">
                <Typography
                    variant="h4"
                    color="blue-gray"
                    className="font-bold text-3xl"
                >
                    Add Shop
                </Typography>
                <Typography
                    color="gray"
                    className="text-lg leading-relaxed"
                >
                    Easily add your shop to our platform and start reaching more customers.
                    Showcase your services, manage your orders, and take your business to the next level effortlessly.
                </Typography>
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
                        <div className="h-64 w-full bg-gray-200 rounded overflow-hidden relative">
                            <MapContainer
                                center={formData.location}
                                zoom={12}
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    borderRadius: "10px",
                                }}
                            >
                                <TileLayer
                                    url="https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of HOT'
                                />
                                <Marker position={formData.location}></Marker>
                                <LocationPicker />
                            </MapContainer>
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
                        variant="gradient"
                        color="blue"
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
