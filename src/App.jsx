import React from "react";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
    const Home = lazy(() => import("./components/Home"));
    const Login = lazy(() => import("./components/Signin"));
    const CreateUserAccount = lazy(() => import("./components/CreateAccount"));
    const UserProfile = lazy(() => import("./components/UserProfile"));
    const ErrorPage = lazy(() => import("./components/ErrorPage"));

    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<CreateUserAccount />} />
                    <Route path="/Profile" element={<UserProfile />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;
