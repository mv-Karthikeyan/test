import React, { useState } from 'react';
import { Grid, Divider } from '@mui/material';
import MiniDrawer from '../../components/Sidebar/Sidebar';
import BgImage from '@/components/Profile/BgImage';
import ProfileDetails from '@/components/Profile/ProfileDetails';
import IconBar from '@/components/Profile/IconBar';
import ProfileAbout from '@/components/Profile/ProfileAbout';


const Profile = () => {

    return (
        <div className="p-4" sx={{BgColor:'black'}}>
            <Grid container spacing={2}>
                <Grid item xs={0.5} md={0.5} lg={0.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949'}}>
                    <MiniDrawer />
                </Grid>
                <Grid item xs={11.5} md={11.5} lg={11.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949' }}>
                    <BgImage src="/profile/profilebg.png" alt="Profile" />
                    <Grid container spacing={2} sx={{ pl:2, pr:2, }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <ProfileDetails src="/profile/profileuser.png" name="John Doe" designation="Software Engineer" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <IconBar />
                    </Grid>
                    </Grid>
                    {/* <Grid container spacing={0} sx={{ pl:2, pr:2, }}> */}
                    <Divider sx={{ backgroundColor: '#6662623d', m:4, thickness:4 }}  />
                    {/* </Grid> */}
                    <Grid container spacing={2} sx={{ pl:2, pr:2, }}>
                    
                    <ProfileAbout />
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    
    );
};

export default Profile;