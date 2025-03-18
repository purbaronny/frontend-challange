"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useServices from "@/app/hooks/useServices";

export default function BodyService() {
    const { services, loading, error } = useServices();
    const [selectedService, setSelectedService] = useState<string | null>(null);

    // Menetapkan layanan pertama sebagai default jika belum dipilih
    if (!selectedService && services.length > 0) {
        setSelectedService(services[0].code);
    }

    const selectedServiceDetail = services.find(service => service.code === selectedService);

    const handlePrevious = () => {
        const currentIndex = services.findIndex(service => service.code === selectedService);
        const newIndex = (currentIndex - 1 + services.length) % services.length;
        setSelectedService(services[newIndex].code);
    };

    const handleNext = () => {
        const currentIndex = services.findIndex(service => service.code === selectedService);
        const newIndex = (currentIndex + 1) % services.length;
        setSelectedService(services[newIndex].code);
    };

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id="service" className="w-full flex flex-col md:flex-row min-h-screen">
            {/* Left Section */}
            <div className="relative w-full md:w-1/2 min-h-[381px] grid grid-cols-12">
                <div
                    className="col-span-11 grid grid-cols-12 bg-cover bg-center mx-auto"
                    style={{ backgroundImage: "url(/assets/img/body-service-image.png)" }}
                >
                    <div className="col-span-1"></div> {/* Empty Column */}
                    <div className="col-span-11 flex flex-col justify-between p-8 text-right">
                        <h2 className="text-white font-poppins font-semibold text-[72px] leading-[60px]">
                            {selectedServiceDetail?.title}
                        </h2>
                        <p className="text-white font-poppins text-[18px] leading-[24px]">
                            {selectedServiceDetail?.description}
                        </p>
                        <div className="grid grid-cols-12">
                            <div className="col-span-9"></div>
                            <div className="col-span-2 flex space-x-1">
                                <button
                                    className="w-10 h-10 bg-black flex justify-center items-center text-white hover:bg-gray-700"
                                    onClick={handlePrevious}
                                >
                                    <ChevronLeftIcon className="w-6 h-6 text-white" />
                                </button>
                                <button
                                    className="w-10 h-10 bg-black flex justify-center items-center text-white hover:bg-gray-700"
                                    onClick={handleNext}
                                >
                                    <ChevronRightIcon className="w-6 h-6 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-1/2 min-h-[381px] grid grid-cols-12">
                <div className="col-span-7 flex flex-col justify-center text-left">
                    <h2 className="text-[#414141] font-poppins font-semibold text-[64px] leading-[72px]">
                        What We Do?
                    </h2>
                    <div className="mt-10">
                        {services.map((service) => (
                            <p
                                key={service.code}
                                className={`cursor-pointer text-[24px] leading-[60px] font-poppins ${selectedService === service.code ? "text-[#414141] font-bold" : "text-[#9F9F9F] hover:text-[#414141]"}`}
                                onClick={() => setSelectedService(service.code)}
                            >
                                - {service.title}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}