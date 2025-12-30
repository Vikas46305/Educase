import React from "react";
import { NavLink } from "react-router-dom";

const CreateAccount = () => {
    const formFields = [
        {
            fieldName: "Full Name",
            placeholder: "Vikas Sharma",
        },
        {
            fieldName: "Phone Number",
            placeholder: "+91 000000000",
        },
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
                            Create your PopX Account
                        </h1>
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

                        <div className="mt-3">
                            <div className="mb-2">
                                <label className="font-medium">
                                    Are you an Agency?{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                            </div>

                            <div className="flex items-center gap-6">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="yes"
                                        className="accent-indigo-600"
                                    />
                                    Yes
                                </label>

                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="agency"
                                        value="no"
                                        className="accent-indigo-600"
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <NavLink
                        to="/profile"
                        className="bg-indigo-800 p-1.5 rounded text-gray-100 w-full block text-center"
                    >
                        Create Account
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
