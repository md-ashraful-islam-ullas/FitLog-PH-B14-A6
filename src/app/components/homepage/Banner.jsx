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
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            <a
              href="#library"
              className="mt-8 inline-block rounded-md bg-[#b6ff00] px-7 py-3.5 text-sm font-bold text-black transition hover:bg-[#c5ff33]"
            >
              BROWSE WORKOUTS
            </a>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center px-6 pb-10 lg:px-6 lg:pb-0">
            <Image
              src="/banner.png"
              alt="Workout illustration"
              width={500}
              height={500}
              priority
              className="w-full max-w-107.5 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
