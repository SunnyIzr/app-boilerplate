import React from 'react';
import { Navigate, Route, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { useDashboardQuery } from './userApiSlice';
import { setUser } from './userSlice';

import CircularProgress from '@mui/material/CircularProgress';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  let location = useLocation();
  
  // User state does not exist
  if (user.id == null) {
    // So we hit the dashboard route with local cookie
    const { data, error, isLoading } = useDashboardQuery()

    if (isLoading){
      return <CircularProgress />
    } else {
      // Server is not able to authenticate cookie
      if (error){
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;

      // Seriver IS able to authenticate cookie
      } else {
        dispatch(setUser(data))
      }
    }
  }

  return children;

}

export default RequireAuth;