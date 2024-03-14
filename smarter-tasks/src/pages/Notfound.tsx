import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4 text-red-400">404</h1>
      <p className="text-lg text-gray-600">
        The URL you are looking for does not exist
      </p>
      <a href="/">Go back Home</a>
    </div>
  );
};
export default NotFound;
