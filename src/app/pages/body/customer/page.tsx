import CustomerComponent from "@/app/components/CustomerComponent";

export default function BodyOurCustomer() {
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
            <CustomerComponent></CustomerComponent>
        </div>
    );
}
