import Image from "next/image";

const Banner = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8 lg:py-12">
      <div className="mx-auto max-w-327.5 overflow-hidden rounded-2xl border border-[#262a32] bg-[#15171c]">
        <div className="grid min-h-117.5 grid-cols-1 items-center lg:grid-cols-2">
          
          {/* Content */}
          <div className="px-8 py-12 sm:px-12 lg:px-14 lg:py-16">
            
            <p className="mb-6 text-sm font-bold tracking-wide text-[#b6ff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="max-w-162.5 text-[50px] font-bold leading-[0.95] text-white sm:text-[50px] lg:text-[50px]">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>

            <p className="mt-7 max-w-140 text-base leading-7 text-[#9298a5] sm:text-lg">
              FitLog is a dark, no-nonsense gym companion: pick a lift,
              lock it into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <button className="mt-8 rounded-md bg-[#b6ff00] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#c5ff33]">
              BROWSE WORKOUTS
            </button>
          </div>

          {/* Image */}
          <div className="relative flex min-h-75 items-center justify-center px-8 pb-10 lg:min-h-117.5 lg:px-6 lg:pb-0">
            <div className="relative h-75 w-full max-w-107.5 sm:h-87.5 lg:h-100">
              <Image
                src="/banner.png"
                alt="Workout illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;