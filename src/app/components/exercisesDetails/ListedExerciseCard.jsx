"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { Slide, toast } from "react-toastify";

const ListedExerciseCard = ({ exercise, activeTab }) => {
  const { plan, save, setPlan, setSave, completed, setCompleted } =
    useContext(ExerciseContext);

  const isCompleted = completed.includes(exercise.id);

  const handleDone = () => {
    if (isCompleted) return;

    setCompleted([...completed, exercise.id]);

    toast.success(`${exercise.name} completed!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  const handleRemove = () => {
    if (activeTab === "plan") {
      setPlan(plan.filter((item) => item.id !== exercise.id));

      setCompleted(completed.filter((id) => id !== exercise.id));

      toast.success(`${exercise.name} is removed from your plan.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Slide,
      });

      return;
    }

    setSave(save.filter((item) => item.id !== exercise.id));

    toast.success(`${exercise.name} is removed.`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  };

  return (
    <div
      className={`border rounded-xl px-4 sm:px-5 py-4 transition-all duration-300 ${
        activeTab === "plan" && isCompleted
          ? "bg-[#111a08] border-[#354d0d]"
          : "bg-neutral-900 border-neutral-800"
      }`}
    >
      {/* Exercise Information + Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Exercise Information */}
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div
            className={`shrink-0 rounded-lg ${
              activeTab === "plan" && isCompleted ? "opacity-50 grayscale" : ""
            }`}
          >
            <Image
              src={exercise.image}
              alt={exercise.name}
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
            />
          </div>

          <div className="min-w-0">
            <h3
              className={`font-extrabold uppercase text-sm tracking-tight truncate ${
                activeTab === "plan" && isCompleted
                  ? "text-neutral-500"
                  : "text-white"
              }`}
            >
              {exercise.name}
            </h3>

            <p
              className={`text-xs mb-1 truncate ${
                activeTab === "plan" && isCompleted
                  ? "text-neutral-600"
                  : "text-neutral-400"
              }`}
            >
              {exercise.equipment}
            </p>

            <div
              className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${
                activeTab === "plan" && isCompleted
                  ? "text-neutral-600"
                  : "text-neutral-300"
              }`}
            >
              <span>⏱ {exercise.duration} min</span>
              <span>🔥 {exercise.caloriesBurned} kcal</span>
              <span>⭐ {exercise.rating}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={`/${exercise.id}`}
            className={`flex-1 sm:flex-none text-center border font-semibold text-sm px-3 sm:px-4 py-2 rounded-lg transition-colors ${
              activeTab === "plan" && isCompleted
                ? "border-neutral-800 text-neutral-600"
                : "border-neutral-700 text-white hover:border-neutral-500"
            }`}
          >
            View Details
          </Link>

          {activeTab === "plan" && (
            <button
              onClick={handleDone}
              disabled={isCompleted}
              className={`flex-1 sm:flex-none font-semibold text-sm px-3 sm:px-4 py-2 rounded-lg transition-colors ${
                isCompleted
                  ? "bg-[#263b05] text-[#a8e600] border border-[#415f0b] cursor-not-allowed"
                  : "bg-lime-400 text-black hover:bg-lime-300 cursor-pointer"
              }`}
            >
              {isCompleted ? "✓ Completed" : "Mark as Done"}
            </button>
          )}

          <button
            onClick={handleRemove}
            className="shrink-0 border border-red-900 text-red-400 hover:bg-red-950 font-bold text-lg w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedExerciseCard;
