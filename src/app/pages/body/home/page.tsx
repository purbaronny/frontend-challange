import { ArrowRight } from "lucide-react";

export default function BodyHome() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-screen">
            {/* Left Side */}
            <div className="w-full md:w-1/2 pl-[5%] md:pl-[15%] mb-6 md:mb-0">
                {/* Upper Left */}
                <div className="mb-6 text-center md:text-left">
                    <h1 className="text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] tracking-[0%] font-semibold font-poppins">
                        We Code
                        <br />
                        We Deliver
                    </h1>
                    <div className="w-[90px] h-[4px] bg-black mt-2 mx-auto md:mx-0 mb-60"></div>
                </div>

                {/* Lower Left */}
                <div className="flex flex-col md:flex-row items-center md:space-x-6 text-center md:text-left">
                    {/* Text */}
                    <p className="text-[14px] leading-[24px] tracking-[0%] font-light font-poppins mb-4 md:mb-0 -mt-[100px]">
    Twiscode specializes in developing high-performing mobile and web applications.
</p>

                    {/* Box with Arrow */}
                    <div className="w-[50px] h-[50px] bg-[#414141] flex items-center justify-center shadow-md">
                        <ArrowRight className="text-white w-6 h-6" />
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-full md:w-1/2 h-[300px] md:h-full">
                <img src="/assets/img/home.png" alt="Home Image" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}
