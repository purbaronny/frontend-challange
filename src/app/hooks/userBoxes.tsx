"use client"

import { useEffect, useState } from "react";
import { getBoxes } from "../lib/profile";

export interface Box {
    id?: number | null;
    title?: string | null;
    detail?: string | null;
}

export default function useBoxes() {
    const [boxes, setBoxes] = useState<Box[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBoxes() {
            try {
                const data = await getBoxes();
                setBoxes(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchBoxes();
    }, []);

    return { boxes, loading, error };
}
