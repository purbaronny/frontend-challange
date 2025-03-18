export default function BodyCareer() {
    return (
        <div id="career" className="grid grid-cols-12 mt-20">
            {/* Kolom putih di kiri */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Kontainer utama dengan background gradient */}
            <div className="col-span-12 lg:col-span-10">
                <div className="container mx-auto grid grid-cols-12 px-4 py-8 bg-gradient-to-b from-[#414141] to-[#9F9F9F] rounded-lg">
                    
                    {/* Batas kiri */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Career Content */}
                    <div className="col-span-12 lg:col-span-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left Section */}
                        <div className="col-span-12 lg:col-span-6 text-center lg:text-left">
                            <h2 className="text-white text-3xl md:text-4xl font-semibold leading-tight lg:leading-[72px]">
                                Join Our Team
                            </h2>
                            <img 
                                src="/assets/img/career-img.png" 
                                alt="Career"
                                className="mt-6 mx-auto lg:mx-0 w-[80%] md:w-[400px] h-auto"
                            />
                        </div>

                        {/* Right Section */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
                            <p className="text-white text-lg md:text-xl leading-relaxed mt-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et at fringilla id maecenas in scelerisque in. Pharetra, erat amet, vestibulum ullamcorper.
                            </p>
                            <button 
                                type="button" 
                                className="mt-6 w-[150px] h-[50px] mx-auto lg:mx-0 bg-gradient-to-r from-[#9FD685] to-[#F9DD03] text-white text-lg font-semibold rounded-md shadow-md hover:opacity-90 transition-opacity"
                            >
                                Apply
                            </button>
                        </div>
                    </div>

                    {/* Batas kanan */}
                    <div className="hidden lg:block lg:col-span-1"></div>
                </div>
            </div>

            {/* Kolom putih di kanan */}
            <div className="hidden lg:block lg:col-span-1"></div>
        </div>
    );
}