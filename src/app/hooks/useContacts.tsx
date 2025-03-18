"use client"

import { useState, useEffect } from "react";
import { getContacts } from "../lib/profile";

interface Contact {
    img: string;
    name: string;
}

export default function useContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchContacts() {
            try {
                const data = await getContacts();
                setContacts(data);
            } catch (err) {
                setError((err instanceof Error) ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        fetchContacts();
    }, []);

    return { contacts, loading, error };
}
