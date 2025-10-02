import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center bg-gray-50 dark:bg-gray-900">
      <h1 className="mb-4 text-6xl font-extrabold text-gray-800 dark:text-white">404</h1>
      <h2 className="mb-8 text-2xl font-semibold text-gray-700 dark:text-gray-200">Page Not Found</h2>
      <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
        Could not find the requested resource.
      </p>
      <Link href="/"
        className="px-6 py-3 text-lg font-medium text-white transition-all duration-300 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
      >
        Return Home
      </Link>
    </div>
  );
}
