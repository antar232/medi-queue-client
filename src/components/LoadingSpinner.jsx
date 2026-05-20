export default function LoadingSpinner({ fullPage = true }) {
  if (fullPage) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-14 h-14">
            <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
          
            <div className="absolute inset-0 border-4 border-[#1e6b65] border-t-transparent rounded-full animate-spin" />
          </div>
          
          <p className="text-[#1e6b65] text-xs font-bold tracking-widest uppercase animate-pulse mt-2">
            Loading Tutors...
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center py-12">
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
        <div className="absolute inset-0 border-4 border-[#1e6b65] border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}