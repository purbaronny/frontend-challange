"use client";

import useMapLocation from "@/app/hooks/useMapLocation";

export default function BodyContactMapComponent() {
    const { mapLocation, loading, error } = useMapLocation();

    if (loading) return <p>Loading map location...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div id="contactLocationGoogleMap" className="w-[360px] h-[148px] mt-4">
        {loading ? (
            <p>Loading map...</p>
        ) : error ? (
            <p className="text-red-500">{error}</p>
        ) : (
            <iframe
                title="Google Maps - PT. Dapur Rumah Sejahtera"
                src={mapLocation}
                width="360"
                height="148"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
            ></iframe>
        )}
    </div>);
}
