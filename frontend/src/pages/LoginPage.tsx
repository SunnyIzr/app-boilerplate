import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../features/auth/userSlice';
import { LoginCredentials, useLoginMutation } from '../features/auth/authApiSlice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface RedirectedLogin {
  from?: Location
}

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as RedirectedLogin
  const from = locationState?.from?.pathname || "/";
  const [email, setEmail] = useState('john@gmail.com');
  const [password, setPassword] = useState('password');
  const [login, { data, isError, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const loginCredentials: LoginCredentials = {
      email: email,
      password: password,
    }
    const result = await login(loginCredentials)
    if ("data" in result){
      const user = result.data
      dispatch(setUser(user));
      navigate(from)
    }
  }

  return(
    <div>
      <Box sx={{marginBottom: "25px"}}>
        <TextField 
          fullWidth
          id="email"
          label="Email"
          variant="standard"
          size="medium"
          value={email} 
          onChange={e => setEmail(e.target.value)}
        />
      </Box>
      <Box sx={{marginBottom: "25px"}}>
        <TextField
          fullWidth
          id="password"
          label="Password"
          type="password"
          variant="standard"
          size="medium"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Box>
      <Button onClick={handleLogin} variant="contained">Login</Button>
    </div>
  )
}

export default LoginPage;