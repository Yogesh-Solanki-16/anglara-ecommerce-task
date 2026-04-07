"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#F0F0F0] pt-[100px] sm:pt-[120px] relative mt-12 sm:mt-20">
      {/* FLOATING NEWSLETTER */}
      <div className="absolute top-[-60px] sm:top-[-80px] left-1/2 -translate-x-1/2 w-full px-4">
        <div className="max-w-[1240px] mx-auto bg-black rounded-[20px] px-6 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
          <h2 className="text-white text-[24px] sm:text-[32px] lg:text-[40px] font-extrabold leading-tight max-w-[520px] text-center lg:text-left ">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <div className="w-full lg:w-[350px] flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-white rounded-full pl-12 pr-4 py-3 text-sm outline-none"
              />
            </div>

            <button className="w-full bg-white text-black rounded-full py-3 text-sm font-medium hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links - Grey Background */}
      <div className="bg-[#F0F0F0] pt-6 sm:pt-8">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 lg:pb-[50px]">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link
                href="/"
                className="text-[24px] sm:text-[28px] lg:text-[32px] font-black tracking-tight inline-block mb- "
              >
                SHOP.CO
              </Link>
              <p className="text-black/60 text-sm leading-[22px] mb-6 sm:mb-8 ">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"
                      fill="none"
                      stroke="#F0F0F0"
                      strokeWidth="2"
                    />
                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                      stroke="#F0F0F0"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-black/10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium text-base tracking-[3px] mb-4 sm:mb-6 ">
                COMPANY
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-black/60 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="font-medium text-base tracking-[3px] mb-4 sm:mb-6">
                HELP
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-black/60 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-medium text-base tracking-[3px] mb-4 sm:mb-6">
                FAQ
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-black/60 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium text-base tracking-[3px] mb-4 sm:mb-6">
                RESOURCES
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-black/60 text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-black transition-colors">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-black/10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 ">
            <p className="text-black/60 text-xs sm:text-sm text-center sm:text-left">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex items-center justify-center sm:justify-end w-full sm:w-auto">
              <Image
                src="/payment.png"
                alt="Payment methods"
                width={240}
                height={30}
                className="h-auto w-auto max-w-[340px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
