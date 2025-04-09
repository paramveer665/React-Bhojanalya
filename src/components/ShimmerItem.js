const ShimmerItem = () => {
  return (
    <>
      {" "}
      <div className="items-center m-4 sm:mb-0 gap-8 sm:w-[500px] md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg sm:rounded-b-none flex sm:flex-col animate-pulse">
        <div className="h-56 w-full sm:rounded-l-lg sm:rounded-bl-none sm:rounded-t-lg rounded-l-lg bg-gray-400"></div>
        <div className="pr-10 pt-2 pl-4 w-full">
          <div className="md:flex lg:flex sm:flex justify-between items-center">
            <div className="h-6 w-32 bg-gray-400 rounded-md"></div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
              <div className="h-6 w-16 bg-gray-400 rounded-md"></div>
              <div className="h-6 w-12 bg-gray-400 rounded-md"></div>
            </div>
          </div>
          <div className="h-5 w-48 bg-gray-400 rounded-md mt-2"></div>
          <div className="h-5 w-64 bg-gray-400 rounded-md mt-2"></div>
          <div className="h-5 w-40 bg-gray-400 rounded-md mt-2"></div>
        </div>
      </div>
      <div className="sm:w-[500px] sm:gap-[215px] gap-[232px] md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg sm:rounded-b-lg sm:rounded-none flex justify-between p-4 mb-4 animate-pulse">
        <div>
          <div className="h-6 w-32 bg-gray-400 rounded-md mb-2"></div>
          <div className="h-5 w-24 bg-gray-400 rounded-md mb-2"></div>
          <div className="h-4 w-64 bg-gray-400 rounded-md mb-2"></div>
          <div className="h-6 w-16 bg-gray-400 rounded-md"></div>
        </div>
        <div>
          <div className="h-20 w-20 bg-gray-400 rounded-lg m-2"></div>
          <div className="h-10 w-24 bg-blue-500 rounded-lg"></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerItem;
