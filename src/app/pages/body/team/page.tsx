"use client"

import useTeamMembers from "@/app/hooks/useTeamMembers";
import { useState } from "react";
import Image from "next/image";

export default function BodyTeam() {
    const { teamMembers, loading, error } = useTeamMembers();
    const [currentIndex, setCurrentIndex] = useState(0); // Fokus awal di index 0

    if (loading) return <p className="text-center text-gray-500">Loading team members...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
    };

    // Ambil 3 item secara melingkar (seperti linked list)
    const getVisibleMembers = () => {
        if (teamMembers.length === 0) return [];
        return [
            teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length], // Sebelumnya
            teamMembers[currentIndex], // Fokus
            teamMembers[(currentIndex + 1) % teamMembers.length] // Selanjutnya
        ];
    };

    return (
        <div id="team" className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-4xl font-semibold text-[#414141] leading-[72px]">Our Team</h2>

            {/* Bagian Image Carousel */}
            <div className="flex items-center justify-center mt-8">
                {/* Tombol Prev */}
                <button onClick={prevSlide} className="p-2 text-gray-500 hover:text-black">
                    {/* <ChevronLeft size={36} /> */}
                </button>

                {/* Daftar Gambar (Linked List Circular) */}
                <div className="flex gap-6 items-center">
                    {getVisibleMembers().map((member, index) => (
                        <div
                            key={member.name}
                            className={`flex flex-col items-center transition-all duration-300 ${
                                index === 1 ? "scale-110" : "scale-90 opacity-60"
                            }`}
                        >
                            <div
                                className={`relative flex justify-center items-center rounded-full bg-gray-100 overflow-hidden ${
                                    index === 1 ? "w-[258px] h-[258px]" : "w-[200px] h-[200px]"
                                }`}
                            >
                                <Image
                                    src={member.img}
                                    alt={member.name}
                                    width={index === 1 ? 258 : 200}
                                    height={index === 1 ? 258 : 200}
                                    className="rounded-full"
                                />
                            </div>
                            <label className="mt-3 text-xl font-semibold text-[#414141]">{member.name}</label>
                            <label className="text-md font-medium text-gray-500">{member.role}</label>
                        </div>
                    ))}
                </div>

                {/* Tombol Next */}
                <button onClick={nextSlide} className="p-2 text-gray-500 hover:text-black">
                    {/* <ChevronRight size={36} /> */}
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
                {teamMembers.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex ? "bg-[#414141]" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
