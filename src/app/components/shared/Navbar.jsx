"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  return (
    <nav className="w-full bg-[#08090b] border-b border-[#1d1e21] px-10 py-4">
      <div className="max-w-300 mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold tracking-wide text-[16px]"
        >
          FITLOG
        </Link>

        {/* Middle */}
        <div className="flex items-center gap-8 text-[14px]">

          {/* Workouts */}
          <Link
            href="/"
            className={`px-4 py-2 rounded-full transition ${
              isWorkouts
                ? "bg-[#263b05] text-[#a8e600]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className={`px-4 py-2 rounded-full transition ${
              isMyPlan
                ? "bg-[#263b05] text-[#a8e600]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 text-[14px]">

          {/* Plan */}
          <Link
            href="/my-plan"
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition ${
              isMyPlan
                ? "bg-[#151d0b] text-[#a8e600]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Plan

            <span className="w-6 h-6 rounded-full bg-[#b6ff00] text-black flex items-center justify-center text-[12px] font-bold">
              0
            </span>
          </Link>

          {/* Saved */}
          <Link
            href="/my-plan"
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition ${
              isMyPlan
                ? "bg-[#151d0b] text-[#a8e600]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Saved

            <span className="w-6 h-6 rounded-full border border-gray-600 text-gray-300 flex items-center justify-center text-[12px]">
              0
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;