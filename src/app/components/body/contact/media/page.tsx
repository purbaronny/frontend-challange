"use client";

import Image from "next/image";
import useContacts from "../../../../hooks/useContacts";

export default function BodyContactMediaComponent() {
    const { contacts, loading, error } = useContacts();

    if (loading) return <p>Loading map location...</p>;
    if (error) return <p>Error: {error}</p>;

    return (<div className="text-[#9F9F9F] text-sm leading-[45px] mt-2 text-left">
        {loading ? (
            <p>Loading contacts...</p>
        ) : error ? (
            <p className="text-red-500">{error}</p>
        ) : (
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <Image
                            src={contact.img}
                            width={20}
                            height={20}
                            alt=""
                            aria-hidden="true"
                            className="w-5 h-5"
                        />

                        {contact.name}
                    </li>
                ))}
            </ul>
        )}
    </div>);
}
