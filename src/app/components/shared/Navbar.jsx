"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, save, completed } = useContext(ExerciseContext);

  const isWorkouts = pathname === "/";
  const isMyPlan = pathname === "/my-plan";

  const remainingPlanCount = plan.filter(
    (exercise) => !completed.includes(exercise.id),
  ).length;

  return (
    <nav className="w-full bg-[#08090b] border-b border-[#1d1e21] px-4 sm:px-6 lg:px-10 py-4">
      <div className="max-w-300 mx-auto">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold tracking-wide text-[16px]"
          >
            FITLOG
          </Link>

          {/* Desktop / Tablet Middle */}
          <div className="hidden sm:flex items-center gap-3 md:gap-6 lg:gap-8 text-[14px]">

            {/* Workouts */}
            <Link
              href="/"
              className={`px-3 md:px-4 py-2 rounded-full transition ${
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
              className={`px-3 md:px-4 py-2 rounded-full transition ${
                isMyPlan
                  ? "bg-[#263b05] text-[#a8e600]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-1 sm:gap-2 text-[13px] sm:text-[14px]">

            {/* Plan */}
            <Link
              href="/my-plan"
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-full transition ${
                isMyPlan
                  ? "bg-[#151d0b] text-[#a8e600]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Plan</span>

              <span className="w-6 h-6 rounded-full bg-[#b6ff00] text-black flex items-center justify-center text-[12px] font-bold">
                {remainingPlanCount}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-full transition ${
                isMyPlan
                  ? "bg-[#151d0b] text-[#a8e600]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span>Saved</span>

              <span className="w-6 h-6 rounded-full border border-gray-600 text-gray-300 flex items-center justify-center text-[12px]">
                {save.length}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-center gap-2 mt-4 pt-3 border-t border-[#1d1e21]">

          {/* Workouts */}
          <Link
            href="/"
            className={`flex-1 text-center px-3 py-2 rounded-full text-sm font-medium transition ${
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
            className={`flex-1 text-center px-3 py-2 rounded-full text-sm font-medium transition ${
              isMyPlan
                ? "bg-[#263b05] text-[#a8e600]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

