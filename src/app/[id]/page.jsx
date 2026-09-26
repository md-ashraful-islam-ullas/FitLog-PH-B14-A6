import Image from 'next/image';
import React from 'react';
import AddtoPlanButton from '../components/exercisesDetails/AddtoPlanButton';
import SavedforLaterButton from '../components/exercisesDetails/SavedforLaterButton';
import { notFound } from 'next/navigation';

const getExercise = async (id) => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data;
};

const ExerciseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const exercise = await getExercise(id);

  if (!exercise) {
    notFound()
  }

  const {
    name,
    image,
    description,
    muscleGroups = [],
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions = [],
  } = exercise;

  const stats = [
    { label: 'Equipment', value: equipment },
    { label: 'Difficulty', value: difficulty },
    { label: 'Sets', value: sets },
    { label: 'Reps', value: reps },
    { label: 'Duration', value: `${duration} min` },
    { label: 'Calories', value: `${caloriesBurned} kcal` },
    { label: 'Rating', value: rating },
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Image
          src={image}
          alt={name}
          height={300}
          width={300}
          className="w-full h-full max-h-150 object-cover rounded-2xl"
        />

        <div>
          <h1 className="text-white font-extrabold uppercase text-3xl tracking-tight">
            {name}
          </h1>
          <p className="text-neutral-400 mt-3">
            {description}
          </p>

          <div className="flex gap-2 mt-4">
            {muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-lime-400 text-black text-xs font-bold uppercase px-3 py-1 rounded-full"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="bg-neutral-900 border border-neutral-800 rounded-xl mt-6 divide-y divide-neutral-800">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between px-5 py-3"
              >
                <span className="text-neutral-400 text-xs font-bold uppercase tracking-wide">
                  {label}
                </span>
                <span className="text-white text-sm font-semibold">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-white font-extrabold uppercase text-lg mt-8 mb-4">
            Instructions
          </h2>
          <ol className="space-y-3">
            {instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-neutral-300 text-sm">
                <span className="text-neutral-500 font-semibold">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="flex gap-3 mt-8">
            <AddtoPlanButton exercise={exercise} />
            <SavedforLaterButton exercise={exercise} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetailsPage;