"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Interface untuk mendefinisikan struktur layanan
interface ServiceDetail {
    code: string;
    title: string;
    description: string;
}

export default function BodyService() {
    // Data layanan dalam bentuk array
    const serviceDetails: ServiceDetail[] = [
        {
            code: "mobile_app",
            title: "Mobile Application",
            description:
                "Building mobile applications is never easy. P2P lending app? Logistic App? E-Commerce App? We have done them all. Done them all well. Done them all fast. Our core strength is supercharging your mobile applications idea so that you can focus on the core business. Leave the keyboard-clacking to us.",
        },
        {
            code: "web_app",
            title: "Web Application",
            description:
                "From simple landing pages to complex web platforms, we build scalable and reliable web applications. Whether it's a SaaS product, an admin dashboard, or an enterprise solution, we've got the expertise to make it happen.",
        },
        {
            code: "ui_ux",
            title: "UI/UX Design",
            description:
                "A great product starts with a great user experience. Our team specializes in designing intuitive, engaging, and visually stunning interfaces that enhance user interaction and satisfaction.",
        },
    ];

    // State untuk menyimpan code layanan yang dipilih
    const [selectedService, setSelectedService] = useState<string>(serviceDetails[0].code);

    // Dapatkan detail layanan berdasarkan code
    const selectedServiceDetail = serviceDetails.find(service => service.code === selectedService);

    // Fungsi untuk navigasi ke layanan sebelumnya
    const handlePrevious = () => {
        const currentIndex = serviceDetails.findIndex(service => service.code === selectedService);
        const newIndex = (currentIndex - 1 + serviceDetails.length) % serviceDetails.length;
        setSelectedService(serviceDetails[newIndex].code);
    };

    // Fungsi untuk navigasi ke layanan berikutnya
    const handleNext = () => {
        const currentIndex = serviceDetails.findIndex(service => service.code === selectedService);
        const newIndex = (currentIndex + 1) % serviceDetails.length;
        setSelectedService(serviceDetails[newIndex].code);
    };

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
                        {/* Title */}
                        <div className="grid grid-cols-12">
                            <div className="col-span-2"></div>
                            <div className="col-span-9">
                                <h2 className="text-white font-poppins font-semibold text-[72px] leading-[60px]">
                                    {selectedServiceDetail?.title}
                                </h2>
                            </div>
                            <div className="col-span-1"></div>
                        </div>

                        {/* Detail */}
                        <div className="grid grid-cols-12">
                            <div className="col-span-2"></div>
                            <div className="col-span-9">
                                <p className="text-white font-poppins text-[18px] leading-[24px]">
                                    {selectedServiceDetail?.description}
                                </p>
                            </div>
                            <div className="col-span-1"></div>
                        </div>

                        {/* Navigation Buttons */}
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
                            <div className="col-span-1"></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1"></div>
            </div>

            {/* Right Section */}
            <div className="relative w-full md:w-1/2 min-h-[381px] grid grid-cols-12">
                <div className="col-span-1"></div> {/* Empty Column */}
                <div className="col-span-7 flex flex-col justify-center text-left">
                    {/* Title */}
                    <h2 className="m-0 p-0 border-0 text-[#414141] font-poppins font-semibold text-[64px] leading-[72px]">
                        What
                    </h2>
                    <h2 className="m-0 p-0 border-0 text-[#414141] font-poppins font-semibold text-[64px] leading-[72px]">
                        We Do?
                    </h2>

                    {/* List */}
                    <div className="mt-10">
                        {serviceDetails.map((service) => (
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
                <div className="col-span-4"></div> {/* Empty Column */}
            </div>
        </div>
    );
}
