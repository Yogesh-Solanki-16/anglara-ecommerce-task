import { Product } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_DUMMY_URL;

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products?limit=100`, {
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return [];
    }

    const data = await res.json();

    // ✅ handle both APIs
    let products: Product[] = [];
    
    if (Array.isArray(data)) {
      products = data;
    } else if (Array.isArray(data.products)) {
      products = data.products;
    } else {
      console.error("Invalid response format");
      return [];
    }

    // Normalize the data structure
    return products.map(product => ({
      ...product,
      image: product.image || (product.images && product.images[0]) || '',
      rating: typeof product.rating === 'number' 
        ? { rate: product.rating, count: 0 }
        : product.rating || { rate: 0, count: 0 }
    }));
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
