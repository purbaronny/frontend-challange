import BodyContactMapComponent from "@/app/components/body/contact/map/page";
import BodyContactMediaComponent from "@/app/components/body/contact/media/page";
import BodyContactMenuComponent from "@/app/components/body/contact/menu/page";

export default function BodyContact() {
    return (
        <div id="contact" className="grid grid-cols-12 px-4 py-12">
            {/* Margin kiri */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Location Section */}
            <div id="contactLocationId" className="col-span-12 md:col-span-2 flex flex-col items-center text-center">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px]">Location</h2>
                <BodyContactMapComponent></BodyContactMapComponent>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Company Section */}
            <div id="contactCompanyId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Company</h2>
                <BodyContactMenuComponent></BodyContactMenuComponent>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Contact Us Section */}
            <div id="contactUsId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Contact Us</h2>
                <BodyContactMediaComponent></BodyContactMediaComponent>
            </div>

            {/* Margin kanan */}
            <div className="hidden md:block md:col-span-2"></div>
        </div>
    );
}
