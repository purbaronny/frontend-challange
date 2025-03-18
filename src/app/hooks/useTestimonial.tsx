"use client"

import { useEffect, useState } from "react";
import { getTestimonials } from "../lib/profile";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  img: string;
}

// Custom hook to fetch testimonials
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { testimonials, loading, error };
}
