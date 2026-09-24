import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-lime-400 font-bold text-sm mb-3">
          404
        </p>

        <h1 className="text-white text-4xl font-extrabold">
          Page Not Found
        </h1>

        <p className="text-neutral-400 mt-3">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 bg-lime-400 text-black font-semibold px-5 py-3 rounded-lg hover:bg-lime-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;