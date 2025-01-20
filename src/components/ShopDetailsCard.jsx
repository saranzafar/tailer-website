import React from "react";

const ShopDetailsCard = ({ shop, userLocation }) => {
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of Earth in km
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return (R * c).toFixed(2); // Distance in km
    };


    if (!shop) return null;

    const distance = calculateDistance(userLocation.lat, userLocation.lng, shop.lat, shop.long);

    return (
        <div className="fixed top-20 right-4 w-80 bg-white shadow-lg rounded-lg p-4 space-y-4">
            <img
                src={shop.thumbnail}
                alt={shop.name}
                className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="font-bold text-xl">{shop.name}</h3>
            <p>{shop.address}</p>
            <p className="text-gray-600">Rating: {shop.rating} ⭐</p>
            <p className="text-gray-600">Distance: {distance} km</p>
        </div>
    );
};

export default ShopDetailsCard;
