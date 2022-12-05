import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesMain = ({userLogin, user}) => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage user={user}/>} />
      <Route path="/" element={<LoginPage userLogin={userLogin}/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesMain;
