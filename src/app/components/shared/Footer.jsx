import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d10] border-t border-white/10 px-6 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-4">
          {/* Swap this span for your actual logo (<img> or inline SVG) */}
          <Image
            src="/logo.png"
            alt="Workout illustration"
            width={18}
            height={18}
            className="object-contain"
          />
          <span className="text-white font-bold tracking-wide text-sm">
            FITLOG
          </span>
        </div>

        <p className="text-gray-500 text-xs">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
