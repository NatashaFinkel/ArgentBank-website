import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import ProfilePage from "../pages/ProfilePage";

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;