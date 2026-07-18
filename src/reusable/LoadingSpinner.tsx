/** @format */
const LoadingSpinner = () => (
  // <div className="rounded border border-slate-200 bg-slate-50 px-6 py-10 text-center">
  //   <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
  //   <div className="text-sm font-medium text-slate-700">Loading...</div>
  // </div>
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-sm">
      {/* Outer Spinner Ring */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-500"></div>
      
      {/* Optional Loading Text */}
      <p className="mt-4 text-sm font-semibold text-white tracking-wide animate-pulse">
        Loading compilation...
      </p>
    </div>
);

export default LoadingSpinner;
