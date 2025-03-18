import { useState, useEffect } from "react";
import { getMapLocation } from "../lib/profile";

export default function useMapLocation() {
    const [mapLocation, setMapLocation] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMapLocation() {
            try {
                const data = await getMapLocation();
                console.log("ini fata: " + data);
                setMapLocation(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            }
        }

        fetchMapLocation();
    }, []);

    return { mapLocation, error };
}
