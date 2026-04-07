/**
 * API utility functions for fetching data from external APIs
 * Client-side API calls using NEXT_PUBLIC_ environment variables
 */

import { Product } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

/**
 * Fetches all products from the API
 * This function can run on both client and server
 * @returns Promise<Product[]>
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store', // Always fetch fresh data for client-side
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid response format - expected array");
      return [];
    }

    return data as Product[];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

/**
 * Fetches a single product by ID
 * @param id - Product ID
 * @returns Promise<Product | null>
 */
export async function getProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data as Product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

/**
 * Fetches products by category
 * @param category - Product category
 * @returns Promise<Product[]>
 */
export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/products/category/${category}`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid response format - expected array");
      return [];
    }

    return data as Product[];
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    return [];
  }
}
