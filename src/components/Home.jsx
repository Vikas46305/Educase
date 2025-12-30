import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center justify-center h-screen text-black/85">
            <div className="bg-gray-100 p-4 flex items-end min-w-1/4 max-sm:w-full h-screen ">
                <div className="w-full">
                    <h1 className="text-2xl font-bold">Welcome to PopX</h1>
                    <div className="my-1.5 text-gray-600 text-sm">
                        <p>Lorem ipsum, dolor sit amet</p>
                        <p>consectetur adipisicing elit.</p>
                    </div>

                    <div className="flex flex-col gap-2 text-center">
                        <NavLink
                            to="/signup"
                            className="bg-indigo-800 p-1.5 rounded  text-gray-100"
                        >
                            Create Account
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="bg-gray-300 p-1.5 rounded  text-gray-900"
                        >
                            Already registered? Login
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
