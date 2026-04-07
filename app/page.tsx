import Hero from "@/components/Hero";
import BrandBar from "@/components/BrandBar";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import DressStyle from "@/components/DressStyle";
import HappyCustomers from "@/components/HappyCustomers";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  // Split products for different sections
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);
  const dressStyles = products.slice(16, 20);

  return (
    <>
      <Hero />
      <BrandBar />
      <NewArrivals products={newArrivals} />
      <TopSelling products={topSelling} />
      <DressStyle products={dressStyles} />
      <HappyCustomers />
    </>
  );
}
