"use client";
import Image from "next/image";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import StarRating from "@/components/shared/StarRating";

interface ProductCardProps {
  product: Product;
  originalPrice?: number;
  priority?: boolean;
}

export default function ProductCard({ product, originalPrice, priority = false }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const discount = originalPrice
    ? Math.round(((originalPrice - product.price) / originalPrice) * 100)
    : null;

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative h-[180px] sm:h-[240px] lg:h-[298px] bg-[#F0EEED] rounded-[13px] lg:rounded-[20px] overflow-hidden mb-3 lg:mb-4">
        {product.image && (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-3 sm:p-4 lg:p-6 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={priority}
          />
        )}
      </div>
      
      {/* Product Info */}
      <div>
        <h3 className="font-bold text-sm sm:text-base lg:text-xl text-gray-900 line-clamp-1 mb-1 lg:mb-2">
          {product.title}
        </h3>
        
        <div className="mb-1 lg:mb-2">
          <StarRating 
            rating={typeof product.rating === 'number' ? product.rating : product.rating?.rate || 0} 
            count={typeof product.rating === 'object' ? product.rating?.count : undefined} 
          />
        </div>
        
        <div className="flex items-center gap-2 lg:gap-[10px] flex-wrap">
          <span className="font-bold text-lg sm:text-xl lg:text-2xl">${product.price.toFixed(0)}</span>
          {originalPrice && (
            <>
              <span className="text-gray-400 line-through text-lg sm:text-xl lg:text-2xl font-bold">
                ${originalPrice}
              </span>
              <span className="bg-[#FF3333]/10 text-[#FF3333] text-[10px] sm:text-xs px-2 sm:px-[13px] py-1 sm:py-[6px] rounded-full font-medium">
                -{discount}%
              </span>
            </>
          )}
        </div>
        
        <button
          onClick={() => addItem(product)}
          className="mt-3 lg:mt-4 w-full bg-black text-white text-xs sm:text-sm lg:text-base py-2 sm:py-2.5 lg:py-3 rounded-full hover:bg-gray-800 transition-colors font-medium cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
