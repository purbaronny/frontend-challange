"use client";

import { useEffect, useState } from "react";
import { getMenus } from "@/app/lib/profile";

interface Menu {
  id: number;
  title: string;
  href: string;
  visible: boolean;
}

export default function useMenus() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMenus() {
      try {
        const data = await getMenus();
        setMenus(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchMenus();
  }, []);

  return { menus, loading, error };
}
