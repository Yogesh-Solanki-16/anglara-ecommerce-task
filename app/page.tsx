"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/home/Hero";
import BrandBar from "@/components/home/BrandBar";
import NewArrivals from "@/components/home/NewArrivals";
import TopSelling from "@/components/home/TopSelling";
import DressStyle from "@/components/home/DressStyle";
import HappyCustomers from "@/components/home/HappyCustomers";
import { getProducts } from "@/lib/api";
import { Product } from "@/types";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        // console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Split products for different sections
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);
  const dressStyles = products.slice(16, 20);

  return (
    <>
      <Hero />
      <BrandBar />

      {loading ? (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-20 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      ) : (
        <>
          <NewArrivals products={newArrivals} />
          <TopSelling products={topSelling} />
          <DressStyle products={dressStyles} />
        </>
      )}

      <HappyCustomers />
    </>
  );
}
