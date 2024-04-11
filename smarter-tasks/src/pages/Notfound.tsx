import React from "react";

const NotFound: React.FC = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen bordered border-purple-500 border-2 w-full">
            <p className="justify-center w-fit"> <b>404</b> The requested route was not found</p>
            <button className="text-white bg-green-400 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" id="backToHomeButton">
                <a href="/account">Go to home</a>
            </button>
        </div>
    );
};

export default NotFound;
