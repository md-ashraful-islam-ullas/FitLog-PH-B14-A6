"use client";

import { ExerciseContext } from "@/context/ExerciseContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import ListedExerciseCard from "../components/exercisesDetails/ListedExerciseCard";

const ListedExercise = () => {
  const { plan, save, completed } = useContext(ExerciseContext);

  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const activeList = activeTab === "plan" ? plan : save;

  const remainingList =
    activeTab === "plan"
      ? activeList.filter((exercise) => !completed.includes(exercise.id))
      : activeList;

  const sortedList = [...activeList].sort((a, b) => {
    if (sortBy === "duration") {
      return b.duration - a.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  const totalMinutes = remainingList.reduce(
    (sum, exercise) => sum + exercise.duration,
    0,
  );

  const totalCalories = remainingList.reduce(
    (sum, exercise) => sum + exercise.caloriesBurned,
    0,
  );

  return (
    <div className="bg-black min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-white font-extrabold uppercase text-3xl tracking-tight">
          My Plan
        </h1>

        <p className="text-neutral-400 mt-2 mb-8">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Stats */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl grid grid-cols-3 divide-x divide-neutral-800 mb-8">
          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">
              {activeTab === "plan" ? "Exercises" : "Saved"}
            </p>

            <p className="text-lime-400 font-extrabold text-2xl">
              {remainingList.length}
            </p>
          </div>

          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">Minutes</p>

            <p className="text-white font-extrabold text-2xl">{totalMinutes}</p>
          </div>

          <div className="px-6 py-5">
            <p className="text-neutral-400 text-sm mb-1">Calories</p>

            <p className="text-white font-extrabold text-2xl">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="flex items-center justify-between mb-4">
          {/* Tabs */}
          <div className="flex bg-neutral-900 border border-neutral-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "plan"
                  ? "bg-[#263b05] text-[#a8e600]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                activeTab === "saved"
                  ? "bg-[#263b05] text-[#a8e600]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">

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

        {/* Exercise List */}
        <div className="space-y-4">
          {sortedList.length === 0 && (
            <div className="border border-neutral-800 bg-neutral-900/60 rounded-xl py-16 px-6 text-center">
              <h3 className="text-white font-extrabold text-lg uppercase tracking-tight">
                {activeTab === "plan"
                  ? "Your plan is empty"
                  : "No saved exercises"}
              </h3>

              <p className="text-neutral-500 text-sm max-w-md mx-auto mt-2">
                {activeTab === "plan"
                  ? "Add exercises to your plan and start building your workout for today."
                  : "Save exercises you like and they’ll show up here for later."}
              </p>

              <Link
                href="/"
                className="inline-block mt-6 bg-lime-400 text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-lime-300 transition-colors"
              >
                {activeTab === "plan" ? "Browse Exercises" : "Find Exercises"}
              </Link>
            </div>
          )}

          {sortedList.map((exercise) => (
            <ListedExerciseCard
              key={exercise.id}
              exercise={exercise}
              activeTab={activeTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListedExercise;
