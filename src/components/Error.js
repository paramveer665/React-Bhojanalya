import { useRouteError } from "react-router";
import { BiErrorCircle } from "react-icons/bi";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-red-600 text-center">
      <BiErrorCircle className="text-7xl mb-4" />
      <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
      <h2 className="text-lg">
        Error {err?.status || "Unknown"} :{" "}
        {err?.statusText || "Unexpected Error"}
      </h2>
      {err?.data && (
        <p className="mt-4 max-w-md text-sm text-gray-700 dark:text-blue-400">
          {err.data}
        </p>
      )}
      <button
        className="mt-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-md"
        onClick={() => (window.location.href = "/")}
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
