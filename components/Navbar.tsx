"use client";
import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, User, Menu, X, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-[60px] sm:h-[70px] lg:h-[72px]">
        {/* Mobile: Hamburger on left */}
        <button
          className="lg:hidden mr-3"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="text-[24px] sm:text-[28px] lg:text-[32px] font-black tracking-tight"
        >
          SHOP.CO
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 ml-10 text-base">
          <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
            Shop{" "}
            <span className="text-xs">
              <ChevronDown />
            </span>
          </button>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            On Sale
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            New Arrivals
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            Brands
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 flex-1 max-w-[577px] ml-10">
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent text-base outline-none w-full text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 sm:gap-4 ml-auto lg:ml-10">
          <button className="lg:hidden hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <Link
            href="/cart"
            className="relative hover:opacity-70 transition-opacity"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center font-medium">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="hover:opacity-70 transition-opacity">
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-base">
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 py-2"
          >
            Shop
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 py-2"
          >
            On Sale
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 py-2"
          >
            New Arrivals
          </Link>
          <Link
            href="#"
            onClick={() => setMenuOpen(false)}
            className="hover:opacity-70 py-2"
          >
            Brands
          </Link>
          <div className="flex items-center bg-[#F0F0F0] rounded-full px-4 py-3 mt-2">
            <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent text-base outline-none w-full text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
