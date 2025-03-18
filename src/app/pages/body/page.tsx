"use client";

import { JSX, useMemo } from "react";
import useMenus from "@/app/hooks/useMenus";

import BodyCareer from "./career/page";
import BodyContact from "./contact/page";
import BodyOurCustomer from "./customer/page";
import BodyHome from "./home/page";
import BodyService from "./service/page";
import BodyTeam from "./team/page";
import BodyTestimonial from "./testimonial/page";
import BodyWork from "./work/page";

export default function Body() {
    const { menus, loading, error } = useMenus();

    // Mapping menu ID ke komponen yang sesuai
    const menuComponents: { [key: string]: JSX.Element } = useMemo(() => ({
        home: <BodyHome />,
        work: <BodyWork />,
        service: <BodyService />,
        our_customer: <BodyOurCustomer />,
        testimonial: <BodyTestimonial />,
        team: <BodyTeam />,
        career: <BodyCareer />,
        contact: <BodyContact />,
    }), []);

    if (loading) return <p className="text-center text-gray-500">Loading menu...</p>;
    if (error) return <p className="text-center text-red-700 font-semibold">Error: {error}</p>;


    return (
        <div className="bg-white shadow-md">
            {menus
                .filter(menu => menu.visible) // Hanya tampilkan menu yang `visible`
                .map(menu => (
                    <div key={menu.id} id={menu.href.replace("#", "")}>
                        {menuComponents[menu.href.replace("#", "")] || <p>Component not found for {menu.title}</p>}
                    </div>
                ))}
        </div>
    );
}
