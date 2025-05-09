import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-center p-6 text-white">
      <img
        src="/assets/img/404.png"
        alt="404 Not Found"
        className="w-80 mb-6 drop-shadow-lg"
      />
      <h1 className="text-8xl font-extrabold">404</h1>
      <p className="text-2xl mt-4 text-red-600 font-semibold">Oops! The page you are looking for does not exist.</p>
      <p className="text-lg mt-2 text-red-600">It seems you've hit a dead end. But don't worry, let's get you back!</p>
      <div className="flex space-x-4 mt-6">
        <Link
          to="/"
          className="px-6 py-3 bg-white text-blue-600 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
        >
          Go Home
        </Link>
        <Link
          to="/contact-us"
          className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          Contact Support
        </Link>
      </div>
      <p className="mt-8 text-gray-200 text-sm">If you think this is a mistake, please let us know.</p>
    </div>
  );
}
