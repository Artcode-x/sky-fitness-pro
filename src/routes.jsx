import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage/MainPage.jsx'
import { NotFound } from './pages/NotFound/NotFound.jsx'
import { Profile } from './pages/profile/profile.jsx'
import { WorkoutInfoPage } from './pages/WorkoutInfoPage/WorkoutInfoPage.jsx'
import { WorkoutVideoPage } from './pages/WorkoutVideoPage/WorkoutVideoPage.jsx'
import { ProtectedRoute } from './components/protected-route/ProtectedRoute.jsx'
import { AuthPage } from 'pages/AuthPage/Auth.jsx'
import { useSelector } from 'react-redux'

export const AppRoutes = () => {
  const user = useSelector((state) => state.user)

  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/auth" element={<AuthPage />}></Route>
      <Route
        path="/profile"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <Profile />
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/workout-info-page/:id" element={<WorkoutInfoPage />}></Route>
      <Route
        path="/workout-video-page"
        element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <WorkoutVideoPage />
          </ProtectedRoute>
        }
      ></Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}
