export default function BodyOurCustomer() {
    const images = [
        "/assets/img/image31.png",
        "/assets/img/image32.png",
        "/assets/img/image33.png",
        "/assets/img/image34.png",
        "/assets/img/image35.png",
        "/assets/img/image36.png",
        "/assets/img/image37.png",
        "/assets/img/image38.png",
        "/assets/img/image39.png"
    ];

    return (
        <div id="our_customer" className="container mx-auto px-4 grid grid-cols-12 gap-8">
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
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Customer ${index + 1}`} className="w-[120px]" />
                ))}
            </div>
        </div>
    );
}
