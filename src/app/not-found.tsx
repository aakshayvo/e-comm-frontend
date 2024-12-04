"use client";
import Link from "next/link";

const ErrorComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="mt-2 text-gray-600">Does not exist</p>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Link>
    </section>
  );
};

export default ErrorComponent;
