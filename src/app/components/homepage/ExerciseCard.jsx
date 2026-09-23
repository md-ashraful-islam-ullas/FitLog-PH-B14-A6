import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  const {
    image,
    muscleGroups = [],
    name,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = exercise;

  return (
    <Link href={`/${exercise.id}`}>
      <div className="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all duration-300 hover:border-lime-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-lime-400/10">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={name}
            height={300}
            width={300}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <div className="flex gap-2 mb-3">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-lime-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <h3 className="text-white font-extrabold uppercase text-lg tracking-tight transition-colors duration-300 group-hover:text-lime-400">
            {name}
          </h3>
          <p className="text-neutral-400 text-sm mb-4">{equipment}</p>

          <div className="flex items-center justify-between border border-neutral-700 rounded-lg px-4 py-2 text-neutral-300 text-sm">
            <span>⏱ {duration} min</span>
            <span>🔥 {caloriesBurned} kcal</span>
            <span>⭐ {rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExerciseCard;