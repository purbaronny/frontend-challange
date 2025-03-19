"use client";

import useMapLocation from "@/app/hooks/useMapLocation";

export default function BodyContactMapComponent() {
    const { mapLocation, loading, error } = useMapLocation();

    if (loading) return <p>Loading map location...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;
    if (!mapLocation || !mapLocation.location) return <p>No map location available.</p>;

    return (
        <div id="contactLocationGoogleMap" className="w-[360px] h-[148px] mt-4">
            <iframe
                title="Google Maps - PT. Dapur Rumah Sejahtera"
                src={mapLocation.location}
                width="360"
                height="148"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
            ></iframe>
        </div>
    );
}
