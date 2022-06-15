import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import RequireAuth from '../features/auth';

import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => {
  return(
    <Routes>
      {/* Protected Routes */}
      <Route element={<PrivateLayout />}>
        <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
      </Route>


      {/* Public Routes */}
      <Route element={<PublicLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>

      <Route path='*' element={<RequireAuth><NotFoundPage /></RequireAuth>} />
    </Routes>
  )
}

export default AppRouter;