"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (email === 'test@gmail.com' && otp === '12345') {
      // Simulate login by setting a state or using a real auth method
      localStorage.setItem('isLoggedIn', 'true');
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box sx={{ maxWidth: 300, mx: 'auto', mt: 8 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="OTP"
        variant="outlined"
        fullWidth
        type="password"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
