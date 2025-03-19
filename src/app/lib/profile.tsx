// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
const API_URL = "https://json-server-vercel-ecru.vercel.app/api"

async function fetchData(endpoint: string) {
    const res = await fetch(`${API_URL}/${endpoint}`);
    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
}

export async function getMenus() {
    return fetchData("menus");
}

export async function getBoxes() {
    return fetchData("boxes");
}

export async function getServices() {
    return fetchData("services");
}

export async function getImages() {
    return fetchData("images");
}

export async function getTestimonials() {
    return fetchData("testimonials");
}

export async function getTeamMembers() {
    return fetchData("teamMembers");
}

export async function getMapLocation() {
    return fetchData("mapLocation");
}

export async function getContacts() {
    return fetchData("contacts");
}
