"use client";

import { useState, useEffect } from "react";
import { getMapLocation } from "../lib/profile";

export default function useMapLocation() {
    const [mapLocation, setMapLocation] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchMapLocation() {
            try {
                setLoading(true);
                const data = await getMapLocation();
                setMapLocation(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchMapLocation();
    }, []);

    return { mapLocation, loading, error };
}
