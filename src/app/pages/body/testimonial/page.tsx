"use client"

import React, { useState } from "react";
import Image from "next/image";
import { useTestimonials } from "@/app/hooks/useTestimonial";

export default function BodyTestimonial() {
  const { testimonials, loading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPairs = Math.ceil(testimonials.length / 2);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPairs);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPairs) % totalPairs);
  };

  if (loading) return <p>Loading testimonials...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div id="testimonial" className="container mx-auto px-4 grid grid-cols-12 gap-8 mt-20">
        <div id="testimonialLeftId" className="col-span-12 md:col-span-5 grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 md:col-start-4 flex flex-col justify-center">
            <h2 className="text-4xl font-semibold text-[#414141] leading-[45px]">
              Our Teams are their biggest fans
            </h2>
            <p className="mt-6 text-xl font-medium text-[#9F9F9F] leading-[32px]">
              Their commitment to excellence is truly remarkable.
            </p>
            <a href="#" className="mt-6 text-lg font-medium leading-[32px] bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-transparent bg-clip-text">
              See All
            </a>
          </div>
        </div>

        <div id="testimonialRightId" className="col-span-12 md:col-span-6 flex flex-col items-center">
          <div className="relative w-full max-w-lg flex flex-col gap-6">
            {testimonials
              .slice(currentIndex * 2, currentIndex * 2 + 2)
              .map((testimonial, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start w-full">
                  <p className="text-lg font-medium text-gray-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex flex-row items-center gap-4 mt-4">
                    <Image src={testimonial.img} alt={testimonial.name} width={64} height={64} className="w-16 h-16 rounded-full" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center justify-between w-full max-w-lg mt-4">
            <button 
              onClick={prevTestimonial} 
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ◀
            </button>
            <div className="flex space-x-2">
              {Array.from({ length: totalPairs }).map((_, index) => (
                <div key={index} className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-300"}`}></div>
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
