import React from "react";

const ShopList = ({ shops, onSelect, selectedShop, userLocation }) => {
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Earth's radius in km
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

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Nearby Tailor Shops</h2>

            {/* Selected Shop Details */}
            {selectedShop && (
                <div className="p-4 mb-4 border rounded-lg shadow bg-white">
                    <h3 className="text-xl font-semibold">{selectedShop.name}</h3>
                    <img
                        src={selectedShop.thumbnail}
                        alt={selectedShop.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <p className="text-gray-600">{selectedShop.address}</p>
                    <p className="text-gray-600">Postal Code: {selectedShop.postal_code}</p>
                    <p className="text-gray-600">
                        Distance:{" "}
                        {userLocation
                            ? calculateDistance(
                                userLocation.lat,
                                userLocation.lng,
                                selectedShop.lat,
                                selectedShop.long
                            ) + " km"
                            : "Calculating..."}
                    </p>
                    <p className="text-gray-600">Rating: ★★★★☆</p>
                </div>
            )}

            {/* Shop List */}
            <div className="space-y-4">
                {shops.map((shop) => (
                    <div
                        key={shop.name}
                        className={`p-4 border rounded-lg shadow-sm cursor-pointer ${selectedShop?.name === shop.name
                                ? "bg-blue-100 border-blue-500"
                                : "bg-white"
                            }`}
                        onClick={() => onSelect(shop)}
                    >
                        <h3 className="font-bold">{shop.name}</h3>
                        <p className="text-gray-600">{shop.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopList;
