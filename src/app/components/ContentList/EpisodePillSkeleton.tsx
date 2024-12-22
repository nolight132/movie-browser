const EpisodePillSkeleton = () => (
  <div className="absolute top-2 left-2 flex bg-gray-500/80 rounded-full">
    <div className="p-2 h-6 rounded-full shadow-lg text-xs flex gap-2 items-center justify-center text-white font-semibold">
      <div className="w-12 bg-gray-300 animate-pulse h-3 rounded"></div>
      <div className="h-3 border-l border-gray-400"></div>
      <div className="w-12 bg-gray-300 animate-pulse h-3 rounded"></div>
    </div>
  </div>
);

export default EpisodePillSkeleton;
