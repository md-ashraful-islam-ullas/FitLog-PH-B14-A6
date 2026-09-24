const ExercisesLoading = () => {
  return (
    <section className="py-16 px-4" id="library">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white font-extrabold uppercase text-3xl md:text-4xl tracking-tight">
          The Library
        </h2>

        <p className="text-neutral-400 mt-2 mb-10">
          Loading workouts…
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-80 rounded-xl bg-neutral-900 border border-neutral-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExercisesLoading;