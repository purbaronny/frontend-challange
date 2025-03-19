"use client";

import { useState, useEffect } from "react";
import { getMapLocation } from "../lib/profile";

interface MapLocation {
    location: string;
}

export default function useMapLocation() {
    const [mapLocation, setMapLocation] = useState<MapLocation | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMapLocation() {
            try {
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
