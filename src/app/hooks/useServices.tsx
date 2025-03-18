"use client"

import { useEffect, useState } from "react";
import { getServices } from "../lib/profile";

interface ServiceDetail {
    code: string;
    title: string;
    description: string;
}

export default function useServices() {
    const [services, setServices] = useState<ServiceDetail[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchServices() {
            try {
                const data = await getServices();
                setServices(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchServices();
    }, []);

    return { services, loading, error };
}
