import React from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
    const formFields = [
        {
            fieldName: "Email Id",
            placeholder: "example@gmail.com",
        },
        {
            fieldName: "Password",
            placeholder: "xxxxxxxxxxxx",
        },
    ];

    return (
        <div className="flex items-center justify-center h-screen text-black/75">
            <div className="flex flex-col justify-between p-5 h-screen bg-gray-100 max-sm:w-full w-1/4">
                <div>
                    <div>
                        <h1 className="text-2xl font-semibold mt-5 pr-28">
                            Signin your PopX account
                        </h1>
                        <div className="my-3 text-sm text-gray-700">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>consectetur adipisicing elit.</p>
                        </div>
                    </div>

                    <form>
                        {formFields.map((name) => (
                            <div
                                className="flex flex-col relative mt-5"
                                key={name.fieldName}
                            >
                                <div className="absolute left-4 -top-3.5 px-2 bg-gray-100">
                                    <span className="font-semibold text-indigo-600 text-sm">
                                        {name.fieldName}
                                    </span>
                                    <span className="text-red-600">*</span>
                                </div>
                                <input
                                    type="text"
                                    name={name.fieldName}
                                    id={name.fieldName}
                                    className="p-2 border-2 rounded-md focus:outline-none focus:border-indigo-700"
                                    placeholder={name.placeholder}
                                />
                            </div>
                        ))}
                    </form>
                </div>
                <div>
                    <NavLink
                        to="/profile"
                        className="bg-indigo-800 p-1.5 rounded text-gray-100 w-full block text-center"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Signin;
