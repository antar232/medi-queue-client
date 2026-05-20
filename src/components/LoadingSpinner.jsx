export default function LoadingSpinner({ fullPage = true }) {
  if (fullPage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium tracking-wider uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10">
      <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
}
