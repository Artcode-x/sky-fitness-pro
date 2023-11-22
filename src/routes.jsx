import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage.jsx";
// import { NotFound } from "./pages/not-found/NotFound";
import { Login } from "./pages/AuthPage/Login.jsx";
import { Registration } from "./pages/AuthPage/Registration.jsx";
import { Profile } from "./pages/profile/profile.jsx";
import { WorkoutInfoPage } from "./pages/WorkoutInfoPage/WorkoutInfoPage.jsx";
import { WorkoutVideoPage } from "./pages/WorkoutVideoPage/WorkoutVideoPage.jsx";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute.jsx";

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
            <MainPage />
        }
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/registration" element={<Registration />}></Route>
        <Route path="/profile" element={
        <ProtectedRoute isAllowed={Boolean(user)}>
          <Profile />
          </ProtectedRoute>
        }></Route>
      <Route path="/workout-info-page" element={<WorkoutInfoPage />}></Route>
      <Route path="/workout-video-page" element={
      <ProtectedRoute isAllowed={Boolean(user)}>
          <WorkoutVideoPage />
          </ProtectedRoute>}></Route>
   
      {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
  );
};