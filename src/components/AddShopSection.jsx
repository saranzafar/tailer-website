import { useState, useEffect } from "react";
import {
    Card,
    Typography,
    Button,
    Tooltip,
    Input,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { Loader, Plus } from "lucide-react";
import toast from "react-hot-toast";
import httpServer from "../utils/httpService";

export function AddShopSection() {
    const [open, setOpen] = useState(false); // Modal state
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        postal_code: "",
        latitude: "",
        longitude: "",
        thumbnail: null,
    });
    const [uploadShopLoading, setUploadShopLoading] = useState(false)

    // Toggle Modal
    const toggleModal = () => {
        setOpen(!open);
        if (!open) {
            initializeMap();
        }
    };

    // Initialize Google Map
    useEffect(() => {
        if (open) {
            initializeMap();
        }
    }, [open]);

    const initializeMap = () => {
        const defaultLocation = { lat: 33.6844, lng: 73.0479 }; // Default location (Islamabad, Pakistan)

        const mapInstance = new window.google.maps.Map(
            document.getElementById("map"),
            {
                center: defaultLocation,
                zoom: 12,
            }
        );

        const markerInstance = new window.google.maps.Marker({
            position: defaultLocation,
            map: mapInstance,
            draggable: true,
        });

        // Update formData when marker is moved
        markerInstance.addListener("dragend", () => {
            const position = markerInstance.getPosition();
            setFormData((prev) => ({
                ...prev,
                latitude: position.lat(),
                longitude: position.lng(),
            }));
        });

        // Center map on click
        mapInstance.addListener("click", (event) => {
            const clickedPosition = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            markerInstance.setPosition(clickedPosition);
            setFormData((prev) => ({
                ...prev,
                latitude: clickedPosition.lat,
                longitude: clickedPosition.lng,
            }));
        });
    };

    // Get User's Current Location
    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const currentPosition = { lat: latitude, lng: longitude };

                    const mapInstance = new window.google.maps.Map(
                        document.getElementById("map"),
                        {
                            center: currentPosition,
                            zoom: 15,
                        }
                    );

                    const markerInstance = new window.google.maps.Marker({
                        position: currentPosition,
                        map: mapInstance,
                        draggable: true,
                    });

                    markerInstance.addListener("dragend", () => {
                        const position = markerInstance.getPosition();
                        setFormData((prev) => ({
                            ...prev,
                            latitude: position.lat(),
                            longitude: position.lng(),
                        }));
                    });

                    setFormData((prev) => ({
                        ...prev,
                        latitude,
                        longitude,
                    }));
                    toast.success("Live location detected successfully!");
                },
                (error) => {
                    console.error("Error detecting location:", error);
                    toast.error("Unable to detect your location.");
                }
            );
        } else {
            toast.error("Geolocation is not supported by your browser.");
        }
    };

    // Handle Input Changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    // Handle Thumbnail Upload
    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            thumbnail: e.target.files[0],
        }));
    };

    // Submit the form data
    const handleSubmit = async () => {
        setUploadShopLoading(true)
        if (
            !formData.name ||
            !formData.address ||
            !formData.city ||
            !formData.postal_code ||
            !formData.latitude ||
            !formData.longitude ||
            !formData.thumbnail
        ) {
            toast.error("Please fill all required fields and select a location.");
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("city", formData.city);
        formDataToSend.append("postal_code", formData.postal_code);
        formDataToSend.append("latitude", formData.latitude);
        formDataToSend.append("longitude", formData.longitude);
        formDataToSend.append("thumbnail", formData.thumbnail);

        try {
            const response = await httpServer("post", "shop/add/", formDataToSend);
            toast.success("Shop added successfully!");
            console.log("API Response:", response);

            // Reset form
            setFormData({
                name: "",
                address: "",
                city: "",
                postal_code: "",
                latitude: "",
                longitude: "",
                thumbnail: null,
            });
            toggleModal();
        } catch (error) {
            console.error("Error submitting data:", error);
            toast.error("Failed to add the shop. Please try again.");
        } finally {
            setUploadShopLoading(false)
        }
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
            <Dialog open={open} handler={toggleModal} size="xl" className="pb-5">
                <DialogHeader>Add Your Shop</DialogHeader>
                <DialogBody className="space-y-4 max-h-[80vh] overflow-y-auto"> {/* Make modal body scrollable */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        <Input
                            label="Shop Name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        {/* Address Field */}
                        <Input
                            label="Address"
                            id="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* City Field */}
                        <Input
                            label="City"
                            id="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                        />

                        {/* Postal Code Field */}
                        <Input
                            label="Postal Code"
                            id="postal_code"
                            value={formData.postal_code}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Google Map */}
                    <div className="h-80 w-full rounded overflow-hidden">
                        <div id="map" className="h-full w-full"></div>
                    </div>
                    <Button
                        variant="text"
                        color="blue"
                        onClick={getCurrentLocation}
                    >
                        Detect My Location
                    </Button>

                    {/* Thumbnail Field */}
                    <Input
                        label="Thumbnail"
                        type="file"
                        id="thumbnail"
                        onChange={handleFileChange}
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
                        onClick={handleSubmit}
                        className="bg-button hover:bg-button-hover"
                        disabled={uploadShopLoading}
                    >
                        {uploadShopLoading ? (
                            <Loader className="animate-spin" size={16} />
                        ) : (
                            "Save"
                        )}
                    </Button>
                </DialogFooter>
            </Dialog>

        </section>
    );
}

export default AddShopSection;