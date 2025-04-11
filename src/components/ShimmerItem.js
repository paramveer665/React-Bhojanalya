const ShimmerItem = () => {
  return (
    <div className="">
      {" "}
      <div className=" m-4 sm:mb-0  w-[428px] sm:w-[500px] md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg sm:rounded-b-none  flex sm:flex-col animate-pulse border-b-2">
        <div className="h-56 w-[250px] sm:w-full sm:rounded-l-lg sm:rounded-bl-none sm:rounded-t-lg rounded-l-lg bg-gray-400"></div>
        <div className="pr-2 pt-2 pl-4  mt-2">
          <div className="md:flex lg:flex sm:flex justify-between items-center mt-5 ">
            <div className="sm:h-6 sm:w-32 w-15 h-4 bg-gray-400 rounded-md"></div>
            <div className="flex sm:flex-col items-center gap-2">
              <div className="sm:h-6 sm:w-32  w-20 h-4 mt-2 bg-gray-400 rounded-md"></div>
            </div>
          </div>
          <div className="sm:h-5 sm:w-48 w-20 h-4 bg-gray-400 rounded-md mt-2"></div>
          <div className="sm:h-5 sm:w-64 w-20 h-4 bg-gray-400 rounded-md mt-2"></div>
          <div className="sm:h-5 sm:w-40 w-20 h-4 bg-slate-00 rounded-md mt-2"></div>
        </div>
      </div>
      <div className="flex pt-10 justify-between sm:w-[500px] sm:gap-[215px]  md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg sm:rounded-b-lg sm:rounded-none mx-4 p-4 mb-1 animate-pulse">
        <div>
          <div className="sm:h-6 sm:w-32 w-32 h-5 bg-gray-400 rounded-md mb-2"></div>
          <div className="sm:h-5 sm:w-24 w-20 h-5 bg-gray-400 rounded-md mb-2"></div>
          <div className="sm:h-4 sm:w-64 w-14 h-5 bg-gray-400 rounded-md mb-2"></div>
        </div>
        <div className="flex flex-col items-end m-2">
          <div className="sm:h-30 sm:w-30 w-28 h-32 bg-gray-400 rounded-lg "></div>
          <div className="sm:h-10 sm:w-24 w-25 h-8 bg-blue-500 rounded-lg mt-4"></div>
        </div>
      </div>
      <div className="flex pt-10 justify-between sm:w-[500px] sm:gap-[215px]  md:w-[650px] lg:w-[800px] bg-amber-300 rounded-lg sm:rounded-b-lg sm:rounded-none mx-4 p-4  animate-pulse">
        <div>
          <div className="sm:h-6 sm:w-32 w-32 h-5 bg-gray-400 rounded-md mb-2"></div>
          <div className="sm:h-5 sm:w-24 w-20 h-5 bg-gray-400 rounded-md mb-2"></div>
          <div className="sm:h-4 sm:w-64 w-14 h-5 bg-gray-400 rounded-md mb-2"></div>
        </div>
        <div className="flex flex-col items-end m-2">
          <div className="sm:h-30 sm:w-30 w-28 h-32 bg-gray-400 rounded-lg "></div>
          <div className="sm:h-10 sm:w-24 w-25 h-8 bg-blue-500 rounded-lg mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerItem;
