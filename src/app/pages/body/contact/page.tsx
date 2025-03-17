export default function BodyContact() {
    return (
        <div id="contact" className="grid grid-cols-12 px-4 py-12">
            {/* Margin kiri */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Location Section */}
            <div id="contactLocationId" className="col-span-12 md:col-span-2 flex flex-col items-center text-center">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px]">Location</h2>
                <div id="contactLocationGoogleMap" className="w-[360px] h-[148px] bg-gray-300 mt-4">
                    {/* Ganti dengan Google Maps embed */}
                </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Company Section */}
            <div id="contactCompanyId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Company</h2>
                <div id="contacCompanyList" className="text-left">
                    <ul className="list-inside text-[#9F9F9F] text-sm md:text-base">
                        <li><a href="#work">- Work</a></li>
                        <li><a href="#service">- Service</a></li>
                        <li><a href="#team">- Team</a></li>
                        <li><a href="#team">- Career</a></li>
                        <li><a href="#contact">- Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Contact Us Section */}
            <div id="contactUsId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Contact Us</h2>
                <ul className="text-[#9F9F9F] text-sm leading-[45px] mt-4 text-left">
                    <li className="flex items-center gap-2">
                        <img src="/assets/img/facebook.png" className="w-5 h-5" /> Facebook
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/assets/img/instagram.png" className="w-5 h-5" /> Instagram
                    </li>
                    <li className="flex items-center gap-2">
                        <img src="/assets/img/mail.png" className="w-5 h-5" /> andree@twiscode.com
                    </li>
                </ul>
            </div>

            {/* Margin kanan */}
            <div className="hidden md:block md:col-span-2"></div>
        </div>
    );
}
