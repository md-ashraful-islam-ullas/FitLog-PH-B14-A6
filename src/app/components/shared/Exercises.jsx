import React from "react";
import ExerciseCard from "../homepage/ExerciseCard";

const getExercises = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const Exercises = async () => {
  const exercisesData = await getExercises();
  return (
    <section className="py-16 px-4" id="library">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight">
          The Library
        </h2>
        <p className="text-neutral-400 mt-2 mb-10">
          Twelve lifts covering every major muscle group.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercisesData.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exercises;
