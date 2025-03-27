const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-800">
      {Array(8)
        .fill("")
        .map((index) => (
          <div className="w-72 h-80 m-4 bg-gray-600 rounded-lg overflow-hidden animate-pulse">
            {/* Image Placeholder */}
            <div className="w-full h-56 bg-gray-700"></div>

            {/* Content Placeholder */}
            <div className="p-4 bg-gray-300">
              <div className="h-6 bg-gray-500 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-400 rounded w-1/2 mb-2"></div>
              <div className="h-3 bg-gray-400 rounded w-1/4"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
