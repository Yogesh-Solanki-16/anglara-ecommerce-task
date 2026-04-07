import { Product } from "@/types";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface NewArrivalsProps {
  products: Product[];
}

export default function NewArrivals({ products }: NewArrivalsProps) {
  // Show exactly 4 products
  const displayed = products.slice(0, 4);

  // Assign fake original prices to show discount on 2nd and 4th items
  const getOriginalPrice = (index: number, price: number) => {
    if (index === 1 || index === 3) {
      return Math.round(price * 1.3);
    }
    return undefined;
  };

  return (
    <section id="new-arrivals" className="py-10 sm:py-14 lg:py-[72px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-center mb-8 sm:mb-12 lg:mb-[55px] tracking-tight">
          NEW ARRIVALS
        </h2>

        {/* Responsive grid: 2 cols mobile, 3 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayed.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              originalPrice={getOriginalPrice(index, product.price)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6 sm:mt-8 lg:mt-[36px]">
          <Link
            href="#"
            className="border border-black/10 text-sm sm:text-base font-medium px-12 sm:px-[54px] py-3 sm:py-4 rounded-full hover:bg-gray-50 transition-colors"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
