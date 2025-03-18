"use client";

import useImages from "@/app/hooks/userImages";

export default function BodyOurCustomer() {
    const { images, loading, error } = useImages();

    return (
        <div id="our_customer" className="container mx-auto px-4 grid grid-cols-12 gap-8 mt-20">
            {/* Bagian Kiri (6 kolom dari 12, dengan margin kanan 1 kolom) */}
            <div id="customerLeftId" className="col-span-12 md:col-span-5 md:mr-1 grid grid-cols-12">
                <div className="col-span-12 md:col-span-9 md:col-start-4 flex flex-col justify-center">
                    <h2 id="customerTitleId" className="text-4xl font-semibold text-[#414141] leading-[45px]">
                        Our Customers are our biggest fans
                    </h2>
                    <p id="customerDetailId" className="mt-[124px] text-xl font-medium text-[#9F9F9F] leading-[32px]">
                        We have helped startups around the globe as well as fortune 500 companies
                    </p>
                    <a href="#" className="mt-[124px] text-lg font-medium leading-[32px] bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-transparent bg-clip-text">
                        See All
                    </a>
                </div>
            </div>

            {/* Bagian Kanan (6 kolom dari 12, margin kiri 4 kolom, margin kanan 1 kolom) */}
            <div id="customerRightId" className="col-span-12 md:col-span-6 md:ml-4 md:mr-1 grid grid-cols-3 gap-4 justify-items-center">
                {loading ? (
                    <p className="col-span-3 text-center text-gray-500">Loading images...</p>
                ) : error ? (
                    <p className="col-span-3 text-center text-red-500">Error: {error}</p>
                ) : (
                    images.map((image) => (
                        <img 
                            key={image.id} 
                            src={image.url || undefined} 
                            alt={`Customer ${image.id}`} 
                            className="w-[120px]" 
                        />
                    ))
                )}
            </div>
        </div>
    );
}
