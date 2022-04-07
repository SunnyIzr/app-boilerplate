import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../app/hooks';
import { useLogoutMutation } from './authApiSlice';
import { clearUser } from './userSlice';

import Link from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogoutLink = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logout, { data, isError, isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    const result = await logout();
    navigate('/login');
    dispatch(clearUser());
  }
  return(
    <Link onClick={handleLogout}><Button>Logout</Button></Link>
  )
}

export default LogoutLink;