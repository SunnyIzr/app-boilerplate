import React from 'react';
import {Outlet} from "react-router-dom";
import PublicNav from './PublicNav';

const PublicLayout = () => {
  return (
    <div>
      <PublicNav />
      <Outlet />
    </div>
  )
}

export default PublicLayout;