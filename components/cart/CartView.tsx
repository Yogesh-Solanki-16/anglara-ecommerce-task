"use client";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Trash2, Plus, Minus, Tag, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CartView() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [promoCode, setPromoCode] = useState("");

  // Calculate discount (20% for demo)
  const subtotal = totalPrice();
  const discountPercent = 20;
  const discountAmount = subtotal * (discountPercent / 100);
  const deliveryFee = 15;
  const total = subtotal - discountAmount + deliveryFee;

  const handleApplyPromo = () => {
    // console.log("Apply promo:", promoCode);
  };

  if (items.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-16 sm:py-20 lg:py-24 text-center">
        <h1 className="text-3xl sm:text-4xl font-black uppercase mb-4">Your Cart</h1>
        <p className="text-black/60 mb-8">Your cart is empty.</p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-12 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-6 sm:py-8 lg:py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-black/60 mb-6">
        <Link href="/" className="hover:text-black">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-black">Cart</span>
      </div>

      <h1 className="text-[32px] sm:text-[36px] lg:text-[40px] font-black uppercase mb-6 sm:mb-8">
        YOUR CART
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1 border border-black/10 rounded-[20px] p-4 sm:p-5 lg:p-6">
          <div className="space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 pb-6 border-b border-black/10 last:border-0 last:pb-0"
              >
                {/* Product Image */}
                <div className="relative w-[100px] h-[100px] sm:w-[124px] sm:h-[124px] bg-[#F0EEED] rounded-[8px] sm:rounded-[9px] shrink-0">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 sm:p-3"
                      sizes="124px"
                    />
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-base sm:text-lg lg:text-xl line-clamp-1">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#FF3333] hover:opacity-70 transition-opacity shrink-0"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                    <p className="text-xs sm:text-sm text-black/60 mb-1">
                      Size: <span className="text-black">Large</span>
                    </p>
                    <p className="text-xs sm:text-sm text-black/60 capitalize">
                      Color: <span className="text-black">{item.category}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <p className="font-bold text-xl sm:text-2xl">
                      ${(item.price * item.quantity).toFixed(0)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 sm:gap-5 bg-[#F0F0F0] rounded-full px-4 sm:px-5 py-2 sm:py-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <span className="text-sm sm:text-base font-medium min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[400px] xl:w-[505px] shrink-0">
          <div className="border border-black/10 rounded-[20px] p-5 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-5 mb-6">
              <div className="flex justify-between text-base sm:text-xl text-black/60">
                <span>Subtotal</span>
                <span className="font-bold text-black">${subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-base sm:text-xl text-black/60">
                <span>Discount (-{discountPercent}%)</span>
                <span className="font-bold text-[#FF3333]">-${discountAmount.toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-base sm:text-xl text-black/60">
                <span>Delivery Fee</span>
                <span className="font-bold text-black">${deliveryFee}</span>
              </div>
              <div className="border-t border-black/10 pt-5 flex justify-between text-lg sm:text-xl">
                <span className="font-medium">Total</span>
                <span className="font-bold text-xl sm:text-2xl">${total.toFixed(0)}</span>
              </div>
            </div>

            {/* Promo Code */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Tag className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-black/40" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Add promo code"
                  className="w-full bg-[#F0F0F0] rounded-full pl-10 sm:pl-12 pr-4 py-3 text-sm sm:text-base outline-none placeholder:text-black/40"
                />
              </div>
              <button
                onClick={handleApplyPromo}
                className="bg-black text-white px-6 sm:px-8 py-3 rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 rounded-full font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 cursor-pointer">
              Go to Checkout
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
