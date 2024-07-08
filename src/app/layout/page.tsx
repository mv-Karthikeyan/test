import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
import MiniDrawer from '../../components/Sidebar/Sidebar';
import MuiImage from '@/components/Events/ImageTag';

const Profile = () => {

    return (
        <div className="p-4">
            <Grid container spacing={2}>
                <Grid item xs={0.5} md={0.5} lg={0.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949', mt:5 }}>
                    <MiniDrawer />
                    </Grid>
                <Grid item xs={11.5} md={11.5} lg={11.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949' }}>\>
                    
                </Grid>
            </Grid>
        </div>
    
        );

};

export default Profile;