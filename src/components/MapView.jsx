import React, { useEffect } from "react";

const MapView = ({ shops, userLocation, selectedShop, onSelect }) => {
    useEffect(() => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: userLocation,
            zoom: 14,
        });

        // Display user location
        new window.google.maps.Marker({
            position: userLocation,
            map,
            title: "Your Location",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });

        // Shop markers
        const markers = shops.map((shop) => {
            const marker = new window.google.maps.Marker({
                position: { lat: shop.lat, lng: shop.long },
                map,
                title: shop.name,
                icon:
                    selectedShop?.name === shop.name
                        ? "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
                        : "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            });

            // Marker click
            marker.addListener("click", () => onSelect(shop));
            return marker;
        });

        // Pan smoothly to the selected shop
        if (selectedShop) {
            const latLng = new window.google.maps.LatLng(
                selectedShop.lat,
                selectedShop.long
            );
            map.panTo(latLng);
            map.setZoom(16);
        }

        return () => markers.forEach((marker) => marker.setMap(null));
    }, [shops, userLocation, selectedShop, onSelect]);

    return <div id="map" className="w-full h-full"></div>;
};

export default MapView;
