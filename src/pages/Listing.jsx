import React, { useState, useEffect } from "react";
import ShopList from "../components/ShopList";
import MapView from "../components/MapView";

const Listing = () => {
    const [selectedShop, setSelectedShop] = useState(null);
    const [userLocation, setUserLocation] = useState(null);
    const shopData = [
        {
            thumbnail: "https://via.placeholder.com/150",
            name: "Tailor Shop A",
            city: "Rawalpindi",
            address: "123 Main Street",
            postal_code: "46000",
            long: 73.7379,
            lat: 33.1416,
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            name: "Tailor Shop B",
            city: "Rawalpindi",
            address: "456 Market Street",
            postal_code: "46010",
            long: 73.7385,
            lat: 33.1421,
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            name: "Tailor Shop C",
            city: "Rawalpindi",
            address: "789 High Street",
            postal_code: "46020",
            long: 73.7390,
            lat: 33.1418,
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            name: "Tailor Shop D",
            city: "Rawalpindi",
            address: "1010 Fashion Street",
            postal_code: "46030",
            long: 73.7365,
            lat: 33.1409,
        },
        {
            thumbnail: "https://via.placeholder.com/150",
            name: "Tailor Shop E",
            city: "Rawalpindi",
            address: "1111 Style Avenue",
            postal_code: "46040",
            long: 73.7359,
            lat: 33.1412,
        },
    ];


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error("Error fetching user location:", error);
                }
            );
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-[90dvh]">
            {/* Left Side: Shop List */}
            <div className="w-full md:w-1/3 bg-gray-50 overflow-y-scroll p-4">
                <ShopList
                    shops={shopData}
                    onSelect={(shop) => setSelectedShop(shop)}
                    selectedShop={selectedShop}
                    userLocation={userLocation}
                />
            </div>

            {/* Right Side: Map */}
            <div className="w-full md:w-2/3 h-full">
                <MapView
                    shops={shopData}
                    userLocation={userLocation}
                    selectedShop={selectedShop}
                    onSelect={(shop) => setSelectedShop(shop)}
                />
            </div>
        </div>
    );
};

export default Listing;
