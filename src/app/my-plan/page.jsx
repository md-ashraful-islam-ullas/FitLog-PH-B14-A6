'use client';
import { ExerciseContext } from "@/context/ExerciseContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";

const ListedExercise = () => {
  const { plan, save } = useContext(ExerciseContext);
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const activeList = activeTab === "plan" ? plan : save;

  const sortedList = [...activeList].sort((a, b) => {
    if (sortBy === "duration") return b.duration - a.duration;
    if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalMinutes = activeList.reduce((sum, ex) => sum + ex.duration, 0);
  const totalCalories = activeList.reduce((sum, ex) => sum + ex.caloriesBurned, 0);

  return (
    <div className="bg-black min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white font-extrabold uppercase text-3xl tracking-tight">
          My Plan
        </h1>
        <p className="text-neutral-400 mt-2 mb-8">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl grid grid-cols-3 divide-x divide-neutral-800 mb-8">
          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">Exercises</p>
            <p className="text-lime-400 font-extrabold text-2xl">{activeList.length}</p>
          </div>
          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">Minutes</p>
            <p className="text-white font-extrabold text-2xl">{totalMinutes}</p>
          </div>
          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">Calories</p>
            <p className="text-white font-extrabold text-2xl">{totalCalories}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "plan"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "saved"
                  ? "bg-white text-black"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-neutral-400 text-sm">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 text-white text-sm rounded-lg px-5 py-2"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {sortedList.length === 0 && (
            <p className="text-neutral-500 text-sm py-10 text-center">
              Nothing here yet.
            </p>
          )}

          {sortedList.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between px-5 py-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={exercise.image}
                  alt={exercise.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-white font-extrabold uppercase text-sm tracking-tight">
                    {exercise.name}
                  </h3>
                  <p className="text-neutral-400 text-xs mb-1">
                    {exercise.equipment}
                  </p>
                  <div className="flex items-center gap-3 text-neutral-300 text-xs">
                    <span>⏱ {exercise.duration} min</span>
                    <span>🔥 {exercise.caloriesBurned} kcal</span>
                    <span>⭐ {exercise.rating}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/${exercise.id}`}
                  className="border border-neutral-700 text-white font-semibold text-sm px-4 py-2 rounded-lg"
                >
                  View Details
                </Link>
                <button
                  onClick={() => {
                    // wire this to whatever ExerciseContext method
                    // marks an item done / removes it from `plan`
                  }}
                  className="bg-lime-400 text-black font-semibold text-sm px-4 py-2 rounded-lg"
                >
                  Mark as Done
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedExercise;