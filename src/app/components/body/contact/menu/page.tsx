"use client";

import useMenus from "../../../../hooks/useMenus";

export default function BodyContactMenuComponent() {
    const { menus, loading, error } = useMenus();

    if (loading) return <p>Loading map location...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div id="contactCompanyList" className="text-left mt-4">
        {loading ? (
            <p>Loading menus...</p>
        ) : error ? (
            <p className="text-red-500">{error}</p>
        ) : (
            <ul className="list-inside text-[#9F9F9F] text-sm md:text-base">
                {menus.filter(menu => menu.visible).map((menu) => (
                    <li key={menu.id}>
                        <a href={menu.href}>- {menu.title}</a>
                    </li>
                ))}
            </ul>
        )}
    </div>);
}
