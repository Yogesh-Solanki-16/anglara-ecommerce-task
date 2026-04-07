import { Product } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      // console.error(`HTTP error! status: ${res.status}`);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      // console.error("Invalid response format - expected array");
      return [];
    }

    return data as Product[];
  } catch (error) {
    // console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      // console.error(`HTTP error! status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data as Product;
  } catch (error) {
    // console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}
