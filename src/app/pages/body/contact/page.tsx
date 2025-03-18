"use client";

import { useState, useEffect } from "react";
import useMapLocation from "@/app/hooks/useMapLocation";
import useMenus from "@/app/hooks/useMenus";
import useContacts from "@/app/hooks/useContacts";

export default function BodyContact() {
    const { mapLocation, loading: mapLoading, error: mapError } = useMapLocation();
    const { menus, loading: menuLoading, error: menuError } = useMenus();
    const { contacts, loading: contactLoading, error: contactError } = useContacts();

    return (
        <div id="contact" className="grid grid-cols-12 px-4 py-12">
            {/* Margin kiri */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Location Section */}
            <div id="contactLocationId" className="col-span-12 md:col-span-2 flex flex-col items-center text-center">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px]">Location</h2>
                <div id="contactLocationGoogleMap" className="w-[360px] h-[148px] mt-4">
                    {mapLoading ? (
                        <p>Loading map...</p>
                    ) : mapError ? (
                        <p className="text-red-500">{mapError}</p>
                    ) : (
                        <iframe
                            title="Google Maps - PT. Dapur Rumah Sejahtera"
                            src={mapLocation}
                            width="360"
                            height="148"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    )}
                </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Company Section */}
            <div id="contactCompanyId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Company</h2>
                <div id="contactCompanyList" className="text-left mt-4">
                    {menuLoading ? (
                        <p>Loading menus...</p>
                    ) : menuError ? (
                        <p className="text-red-500">{menuError}</p>
                    ) : (
                        <ul className="list-inside text-[#9F9F9F] text-sm md:text-base">
                            {menus.filter(menu => menu.visible).map((menu) => (
                                <li key={menu.id}>
                                    <a href={menu.href}>- {menu.title}</a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Contact Us Section */}
            <div id="contactUsId" className="col-span-12 md:col-span-2 flex flex-col">
                <h2 className="text-[#414141] text-2xl font-semibold leading-[72px] text-center">Contact Us</h2>
                <div className="text-[#9F9F9F] text-sm leading-[45px] mt-2 text-left">
                    {contactLoading ? (
                        <p>Loading contacts...</p>
                    ) : contactError ? (
                        <p className="text-red-500">{contactError}</p>
                    ) : (
                        <ul>
                            {contacts.map((contact, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <img src={contact.img} className="w-5 h-5" alt={contact.name} /> {contact.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>

            {/* Margin kanan */}
            <div className="hidden md:block md:col-span-2"></div>
        </div>
    );
}
