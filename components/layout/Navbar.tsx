"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { ShoppingCart, User, Menu, X, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const totalItems = useCartStore((s) => s.totalItems());

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 flex items-center justify-between h-[60px] sm:h-[70px] lg:h-[72px]">
          <button
            className="lg:hidden mr-3 relative z-20"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="text-[24px] sm:text-[28px] lg:text-[32px] font-black tracking-tight shrink-0"
          >
            SHOP.CO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 ml-10 text-base">
            <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
              Shop{" "}
              <span className="text-xs">
                <ChevronDown className="w-4 h-4" />
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
      </nav>

      <div
        className={`
          fixed inset-0 z-100 lg:hidden
          transition-all duration-300 ease-in-out
          ${menuOpen ? "visible" : "invisible delay-300"}
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute inset-0 bg-black/50
            transition-opacity duration-300 ease-in-out
            ${menuOpen ? "opacity-100" : "opacity-0"}
          `}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`
            absolute top-0 left-0 bottom-0 w-full max-w-[320px] bg-white
            flex flex-col
            transition-transform duration-300 ease-in-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-xl font-bold">SHOP.CO</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 -mr-2 hover:opacity-70 transition-opacity"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3 text-base font-medium hover:opacity-70 transition-opacity border-b border-gray-50"
              >
                Shop
                <ChevronDown className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium hover:opacity-70 transition-opacity border-b border-gray-50"
              >
                On Sale
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium hover:opacity-70 transition-opacity border-b border-gray-50"
              >
                New Arrivals
              </Link>
              <Link
                href="#"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-medium hover:opacity-70 transition-opacity border-b border-gray-50"
              >
                Brands
              </Link>
            </div>

            {/* Search Section */}

            {/* Additional Links */}
            <div className="mt-8 px-4 pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <Link
                  href="/account"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-black transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>My Account</span>
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-black transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>My Cart</span>
                  {totalItems > 0 && (
                    <span className="ml-auto bg-black text-white text-[10px] rounded-full w-[18px] h-[18px] flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
