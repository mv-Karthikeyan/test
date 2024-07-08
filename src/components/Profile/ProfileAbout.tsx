import React from 'react';
import { Stack, Link, Typography, Grid } from '@mui/material';

const ProfileAbout = () => {
  return (
    <Grid container spacing={2} sx={{ px: 2, py: 2 }}> 
      <Grid item xs={12} md={6} lg={6}  sx={{ px: 4, py: 4 }}> 
      <Grid sx={{ px:3, py:4}}>
        <Typography variant="h5" sx={{ color: 'white' }}>
            About
        </Typography>
        <Typography variant="p" sx={{ color: 'white' }}>
          This is some text content alongside the icons. This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.This is some text content alongside the icons.
        </Typography>
      </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}  sx={{ px: 4, py: 4, }}> 
        <Grid  sx={{bgcolor:'#6662623d', px:3, py:4, borderRadius: 5 }}>
        <Typography variant="h5" sx={{ color: 'white', display: 'block' }}>
            Basic Info
        </Typography>
        <Typography variant="p" sx={{ color: '#837e7e', display: 'block', pt:2 }}>
            Industry
        </Typography>
        <Typography variant="p" sx={{ color: 'white', display: 'block' }}>
            Finance & Accounting
        </Typography>
        <Typography variant="p" sx={{ color: '#837e7e', display: 'block', pt:2 }}>
            Education
        </Typography>
        <Typography variant="p" sx={{ color: 'white', display: 'block' }}>
            Example University
        </Typography>
        <Typography variant="p" sx={{ color: '#837e7e', display: 'block', pt:2 }}>
            LinkedIn
        </Typography>
        <Link href="">
            https://www.linkedin.com
        </Link>
        <Typography variant="p" sx={{ color: '#837e7e', display: 'block', pt:2 }}>
            Email 
        </Typography>
        <Typography variant="p" sx={{ color: 'white', display: 'block' }}>
            example@gmail.com
        </Typography>
        <Typography variant="p" sx={{ color: '#837e7e', display: 'block', pt:2 }}>
            Phone 
        </Typography>
        <Typography variant="p" sx={{ color: 'white', display: 'block' }}>
            9876543212
        </Typography>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileAbout;