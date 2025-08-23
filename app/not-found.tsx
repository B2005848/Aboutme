export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-indigo-800">404</h1>
      <p className="mt-2 text-lg text-gray-600">Oops! Page not found.</p>
      <a
        href="/"
        className="px-4 py-2 mt-4 text-white transition bg-indigo-800 rounded-lg hover:bg-indigo-700"
      >
        Come back Home
      </a>
    </div>
  );
}
