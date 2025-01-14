import React, { useEffect } from 'react'


function Map({ lat, lng, height }) {
    // eslint-disable-next-line no-constant-binary-expression
    const defaultLocation = { lat: lat, lng: lng }; // Default location (Islamabad, Pakistan)
    const initializeMap = () => {

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

        // Center map on click
        mapInstance.addListener("click", (event) => {
            const clickedPosition = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            markerInstance.setPosition(clickedPosition);
        });
    };

    // Initialize Google Map
    useEffect(() => {
        initializeMap();
    }, []);

    return (
        <div className={`h-[29em] w-full rounded overflow-hidden`}>
            <div id="map" className="h-full w-full"></div>
        </div>
    )
}

export default Map