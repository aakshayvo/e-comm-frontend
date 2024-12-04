const Loading = () => {
  return (
    <div className=" h-[550px] border w-96 rounded-lg p-2 flex flex-col animate-pulse">
      <div className="relative h-64 w-full bg-gray-200 rounded-lg"></div>

      <div className="mt-5 px-1 space-y-3">
        <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
        <div className="h-6 w-3/4 bg-gray-200 rounded"></div>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-5 w-5 bg-gray-200 rounded-full"></div>
          ))}
        </div>
        <div className="flex items-center space-x-3">
          <div className="h-6 w-1/4 bg-gray-200 rounded"></div>{" "}
          <div className="h-8 w-1/4 bg-gray-200 rounded"></div>{" "}
          <div className="h-6 w-1/4 bg-gray-300 rounded"></div>{" "}
        </div>
      </div>

      <div className="mt-auto flex justify-between items-center p-2">
        <div className="h-10 w-32 bg-gray-200 rounded-full"></div>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
