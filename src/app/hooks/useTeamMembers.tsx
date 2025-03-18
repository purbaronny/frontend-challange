import { useState, useEffect } from "react";
import { getTeamMembers } from "../lib/profile";

interface TeamMember {
    name: string;
    role: string;
    img: string;
}

export default function useTeamMembers() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTeamMembers() {
            try {
                const data = await getTeamMembers();
                setTeamMembers(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        }

        fetchTeamMembers();
    }, []);

    return { teamMembers, loading, error };
}
