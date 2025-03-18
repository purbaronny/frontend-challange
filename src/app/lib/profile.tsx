export async function getMenus() {
  const res = await fetch("http://localhost:3001/menus");
  if (!res.ok) throw new Error("Failed to fetch menus");
  return res.json();
}

export async function getBoxes() {
  const res = await fetch("http://localhost:3001/boxes");
  if (!res.ok) throw new Error("Failed to fetch boxes");
  return res.json();
}

export async function getServices() {
  const res = await fetch("http://localhost:3001/services");
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function getImages() {
  const res = await fetch("http://localhost:3001/images");
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
}

export async function getTestimonials() {
  const res = await fetch("http://localhost:3001/testimonials");
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  return res.json();
}

export async function getTeamMembers() {
  const res = await fetch("http://localhost:3001/teamMembers");
  if (!res.ok) throw new Error("Failed to fetch teamMembers");
  return res.json();
}

export async function getMapLocation(): Promise<string | null> {
  try {
      const res = await fetch("http://localhost:3001/mapLocation");

      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.text(); // Karena API mengembalikan string
      return data;
  } catch (error) {
      console.error("Error fetching map location:", error);
      return null; // Kembalikan `null` jika terjadi error
  }
}

export async function getContacts() {
  const res = await fetch("http://localhost:3001/contacts");
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
}