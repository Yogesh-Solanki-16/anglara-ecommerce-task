"use client";
import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-black text-white text-xs sm:text-sm text-center py-2 sm:py-2.5 px-4 relative">
      <span className="text-white/90">
        Sign up and get 20% off to your first order.{" "}
      </span>
      <a href="#" className="underline font-medium hover:opacity-80 transition-opacity">
        Sign Up Now
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 text-white hover:opacity-70 transition-opacity"
        aria-label="Close announcement"
      >
        <X className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
}
