"use client";

import Image from "next/image";
import useImages from "../hooks/userImages";

export default function CustomerComponent() {
    const { images, loading, error } = useImages();

    if (loading) return <p>Loading map location...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div id="customerRightId" className="col-span-12 md:col-span-6 md:ml-4 md:mr-1 grid grid-cols-3 gap-4 justify-items-center">
        {loading ? (
            <p className="col-span-3 text-center text-gray-500">Loading images...</p>
        ) : error ? (
            <p className="col-span-3 text-center text-red-500">Error: {error}</p>
        ) : (
            images.map((image) => (
                <Image
                    key={image.id}
                    src={image.url}
                    alt={`Customer ${image.id}`}
                    width={120}
                    height={120}
                    className="w-[120px] h-auto"
                />
            ))
        )}
    </div>);
}
