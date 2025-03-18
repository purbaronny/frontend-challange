"use client";

import useBoxes from "@/app/hooks/userBoxes";
import { useState, useEffect } from "react";

export default function BodyWork() {
    const { boxes, loading, error } = useBoxes();
    const validBoxes = boxes.filter(box => box?.id !== null);
    const [activeBox, setActiveBox] = useState<number | null>(validBoxes.length > 0 ? validBoxes[0].id! : null);
    const [selectedText, setSelectedText] = useState<string>(validBoxes.length > 0 ? validBoxes[0].detail! : "");

    useEffect(() => {
        if (validBoxes.length > 0 && activeBox === null) {
            setActiveBox(validBoxes[0].id!);
            setSelectedText(validBoxes[0].detail!);
        }
    }, [boxes]);

    const handleBoxClick = (id: number | null, detail?: string) => {
        if (id !== null) {
            setActiveBox(id);
            setSelectedText(detail || "");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div id="work" className="grid grid-cols-1 md:grid-cols-12 items-center justify-between h-auto md:h-screen gap-6 md:gap-0">
            {/* Left Side (Kotak-kotak) */}
            <div id="divBodyWorkLeftId" className="col-span-12 md:col-span-6 flex justify-center items-center p-6 order-1">
                <div className="grid gap-0">
                    {Array(Math.ceil(boxes.length / 2))
                        .fill(null)
                        .map((_, rowIndex) => (
                            <div key={rowIndex} className="flex flex-row gap-0">
                                {boxes.slice(rowIndex * 2, rowIndex * 2 + 2).map((box, index) => (
                                    <div key={index} className="w-[205px] h-[205px] relative">
                                        {box?.id ? (
                                            <div
                                                className="w-full h-full flex flex-col justify-between p-4 cursor-pointer text-white bg-cover shadow-md bg-gray-500"
                                                style={{
                                                    backgroundImage:
                                                        activeBox === box.id
                                                            ? "url(/assets/img/work-square-click.png)"
                                                            : "url(/assets/img/work-square-default.png)",
                                                }}
                                                onClick={() => handleBoxClick(box.id ? box.id : null, box.detail ? box.detail : "")}
                                            >
                                                <span className="text-[24px] font-medium font-poppins leading-[24px] text-[#414141] mt-6 ml-2">
                                                    {box.title}
                                                </span>
                                                <span className="text-[100px] font-semibold font-poppins leading-[72px] text-right text-[#E5E5E5]">
                                                    0{box.id}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full bg-transparent relative">
                                                <div className="absolute right-0 top-[103px] w-[100px] h-[2px] bg-[#414141]"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>

            {/* Right Side (Teks) */}
            <div id="divBodyWorkRightId" className="col-span-12 md:col-span-6 md:pl-16 p-6 order-2 self-center">
                <h2 className="text-[64px] font-semibold font-poppins leading-[72px]">How</h2>
                <h2 className="text-[64px] font-semibold font-poppins leading-[72px]">We Work?</h2>
                <p className="text-[24px] font-medium font-poppins leading-[32px] mt-10">{selectedText}</p>
                <button className="mt-10 w-[170px] h-[60px] bg-[#4A4A4A] text-white text-[18px] font-medium font-poppins leading-[32px] transition-colors duration-300 hover:bg-white hover:text-[#9F9F9F] border border-[#4A4A4A]">
                    More
                </button>
            </div>
        </div>
    );
}