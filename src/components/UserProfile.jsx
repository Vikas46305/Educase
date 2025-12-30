import React from "react";

const UserProfile = () => {
    return (
        <div className="flex items-center justify-center h-screen text-black/85">
            <div className="bg-gray-100 h-screen w-1/4 max-sm:w-full border">
                <div className="bg-white p-5 font-semibold">
                    <h1>Account Setting</h1>
                </div>
                <div className="p-5">
                    <div className="flex items-center gap-5 mb-5">
                        <div>
                            <img
                                src="https://imgs.search.brave.com/lY7YYRwTdbD2pZ3nhpsLmMGSNDAC5LvPTzdDYDo5Kfs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JjLzNk/LzEwL2JjM2QxMGY5/Mzg0ZDliN2JkZjRl/MDI0NDFlYTMyZGMx/LmpwZw"
                                alt="ProfileImage"
                                className="h-16 w-16 rounded-full"
                            />
                        </div>
                        <div>
                            <p className="text-md font-semibold">
                                Vikas Sharma
                            </p>
                            <p className="text-sm">vikas@gmail.com</p>
                        </div>
                    </div>
                    <div className="text-sm">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, commodi quasi sapiente ipsam
                            inventore a earum laudantium debitis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
