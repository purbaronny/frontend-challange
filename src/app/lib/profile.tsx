export async function getMenus() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/menus");
  if (!res.ok) throw new Error("Failed to fetch menus");
  return res.json();
}

export async function getBoxes() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/boxes");
  if (!res.ok) throw new Error("Failed to fetch boxes");
  return res.json();
}

export async function getServices() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/services");
  if (!res.ok) throw new Error("Failed to fetch services");
  return res.json();
}

export async function getImages() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/images");
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
}

export async function getTestimonials() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/testimonials");
  if (!res.ok) throw new Error("Failed to fetch testimonials");
  return res.json();
}

export async function getTeamMembers() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/teamMembers");
  if (!res.ok) throw new Error("Failed to fetch teamMembers");
  return res.json();
}

export async function getMapLocation() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/mapLocation");
  if (!res.ok) throw new Error("Failed to fetch mapLocation");
  return res.json();
}

export async function getContacts() {
  const res = await fetch("https://json-server-vercel-ecru.vercel.app/api/contacts");
  if (!res.ok) throw new Error("Failed to fetch contacts");
  return res.json();
}