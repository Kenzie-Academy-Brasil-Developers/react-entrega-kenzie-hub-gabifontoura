import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectRoutes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesMain = ({userLogin, user, userLogout}) => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage userLogin={userLogin}/>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={ <ProtectedRoutes user={user} />} >
        <Route index path="/home" element={<HomePage user={user} userLogout ={userLogout}/>} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
