import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Button,
    Typography,
    IconButton
} from '@material-tailwind/react';
import toast from 'react-hot-toast';
import httpServer from "../utils/httpService";
import Map from './Map';

function SingleShop() {
    const { id } = useParams(); // Get shop ID from URL
    const [shop, setShop] = useState(null); // State to store shop details
    const [loading, setLoading] = useState(true); // Loading state for the data fetch
    const [error, setError] = useState(null); // Error state for API request

    const [mapInstance, setMapInstance] = useState(null);
    const [markerInstance, setMarkerInstance] = useState(null);

    // Fetch shop data from API based on the ID
    const loadShopData = async () => {
        try {
            const response = await httpServer("get", `shop/shops/${id}`);
            setShop(response);
        } catch (error) {
            setError("Failed to load shop data.");
            toast.error("Error fetching shop data.");
        } finally {
            setLoading(false);
        }
    };

    // Initialize Google Map with hardcoded coordinates
    // useEffect(() => {
    //     const defaultLocation = { lat: 33.6844, lng: 73.0479 }; // Hardcoded location (Islamabad, Pakistan)

    //     if (window.google && window.google.maps) {
    //         const mapDiv = document.getElementById("map");

    //         if (mapDiv) {
    //             const map = new window.google.maps.Map(mapDiv, {
    //                 center: defaultLocation,
    //                 zoom: 15,
    //                 mapTypeId: "roadmap",
    //             });

    //             const marker = new window.google.maps.Marker({
    //                 position: defaultLocation,
    //                 map: map,
    //                 draggable: true, // Allow user to drag the marker
    //             });

    //             setMapInstance(map);
    //             setMarkerInstance(marker);
    //         } else {
    //             toast.error("Map div is not available.");
    //         }
    //     } else {
    //         toast.error("Google Maps API not loaded.");
    //     }
    // }, []);

    // Update map and marker when shop data is loaded
    useEffect(() => {
        if (shop && mapInstance && markerInstance) {
            const { latitude, longitude } = shop;
            const shopLocation = { lat: latitude || 33.6844, lng: longitude || 73.0479 };

            // Update map center and marker position based on shop data
            mapInstance.setCenter(shopLocation);
            markerInstance.setPosition(shopLocation);
        }
    }, [shop, mapInstance, markerInstance]);

    useEffect(() => {
        loadShopData();
    }, [id]);

    // Show loading or error messages
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Typography>Loading shop data...</Typography>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <Typography>{error}</Typography>
            </div>
        );
    }

    // Destructure shop data for easy access
    const { name, thumbnail, address, city, postal_code, phone_number, latitude, longitude } = shop;

    return (
        <div className="flex flex-col lg:flex-row mx-auto py-12 bg-white rounded-lg shadow-md max-w-7xl">
            {/* Left side - Google Map */}
            <div className="w-full lg:w-1/2 h-80 lg:h-full">
                {/* <div id="map" className="h-full w-full rounded-lg"></div> */}
                <Map lat={latitude} lng={longitude} height={10} />
            </div>

            {/* Right side - Shop Details */}
            <div className="w-full lg:w-1/2 p-6">
                <Card className="w-full h-full bg-white shadow-md rounded-lg p-4">
                    <div className="flex  items-center gap-4 border-b-2">
                        <img
                            src={thumbnail}
                            alt={name}
                            className="w-32 h-32 rounded-full mb-4"
                        />
                        <div>
                            <Typography variant="h5" className="font-semibold text-gray-800">{name}</Typography>
                            <Typography className="text-gray-500">{address}</Typography>
                        </div>
                    </div>

                    <CardBody className="p-4">
                        <div className="mb-4">
                            <Typography className="font-medium text-gray-700">City</Typography>
                            <Typography>{city}</Typography>
                        </div>

                        <div className="mb-4">
                            <Typography className="font-medium text-gray-700">Postal Code</Typography>
                            <Typography>{postal_code}</Typography>
                        </div>

                        {phone_number && (
                            <div className="mb-4">
                                <Typography className="font-medium text-gray-700">Phone Number</Typography>
                                <Typography>{phone_number}</Typography>
                            </div>
                        )}

                        <div className="flex flex-col gap-3">
                            <Button
                                className="bg-button hover:bg-button-hover"
                                onClick={() => alert("Contact functionality goes here")}
                            >
                                Contact
                            </Button>

                            <Button
                                variant="outlined"
                                className="border-button text-button"
                                onClick={() =>
                                    window.open(
                                        `https://www.google.com/maps?q=${latitude},${longitude}`,
                                        "_blank"
                                    )
                                }
                            >
                                Open in Google Maps
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}

export default SingleShop;