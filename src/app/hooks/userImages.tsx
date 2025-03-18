"use client"

import { useState, useEffect } from "react";
import { getImages } from "../lib/profile";

type ImageItem = {
    id: number;
    url: string;
};

export default function useImages() {
    const [images, setImages] = useState<ImageItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchImages() {
            try {
                const imageList = await getImages();
                setImages(imageList);
            } catch (err) {
                console.error("Error fetching images:", err); // Debug: lihat error di console
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchImages();
    }, []);

    return { images, loading, error };
}
