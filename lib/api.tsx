export const runtime = "nodejs";

export async function getProducts() {
  try {
    const baseUrl = process.env.API_BASE_URL;

    if (!baseUrl) {
      throw new Error("API_BASE_URL is not defined");
    }

    const res = await fetch(`${baseUrl}/products`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid response format");
    }

    return data;
  } catch (error) {
    console.error("Fetch Error in getProducts:", error);
    return [];
  }
}
