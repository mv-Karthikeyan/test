"use client";

import React, { useState } from 'react';
import { Grid, Box } from '@mui/material';
// import MiniDrawer from '@/components/Events/LeftNavbar';
import RightSearchBar from '@/components/Events/RightSearchBar';
import JobCard from '@/components/Events/JobCard';
import { Typography, Container } from '@mui/material';
// import Layout from '../components/events/BGEvents';
import MuiImage from '@/components/Events/ImageTag';
import Chips from '@/components/Events/ChipTag';
import SearchBar from '@/components/Events/SearchIcon';
// import Calendar from '../components/events/MonthDate';
import Suggest from '@/components/Events/SuggestBox';
import BasicDateRangeCalendar from '@/components/Events/MonthDate';
// import HeaderEvents from '@/components/Events/HeaderEvents';
// import FooterEvents from '@/components/Events/FooterEvents';
import SubscribeForm from '@/components/Events/SubcribeForm';
import MiniDrawer from '../../components/Sidebar/Sidebar';
import Link from 'next/link';



const jobData = [
  {
    image: '../events/Rectangle-1.png', 
    title: 'Software Engineer', 
    location: 'hyderabad', 
    email: 'ample@gmail.com', 
    type: 'online', 
    price: 'free',
    day: '29-30',
    month: 'june',
    category: 'Sales',
  },
  {
    image: '../events/Rectangle-1.png', 
    title: 'Data Scientist', 
    location: 'hyderabad', 
    email: 'test@gmail.com', 
    type: 'offline', 
    price: 'paid' ,
    day: '30-31',
    month: 'jun',
    category: 'Marketing',
  },
  {
    image: '../events/Rectangle-1.png', 
    title: 'Data Scientist', 
    location: 'bangalore', 
    email: 'test@gmail.com', 
    type: 'offline', 
    price: 'paid',
    day: '1-2',
    month: 'jul',
    category: 'Marketing',

  },
  // Add more job data here
];

const Events = () => {
  const [filters, setFilters] = useState({
    online: false,
    offline: false,
    free: false,
    paid: false,
    location: '',
    category: '',
  }); 

  const applyFilters = (jobs) => {
    return jobs.filter((job) => {
      if (filters.online && filters.offline) {
      }
      else if (filters.online && job.type!== 'online') { return false; }
      else if (filters.offline && job.type!== 'offline') { return false; }
      if (filters.free && filters.paid) {
      }
      else if (filters.free && job.price!== 'free') {return false ;}
      else if (filters.paid && job.price!== 'paid') {return false;}
      if (filters.location && job.location !== filters.location) return false;
      if (filters.category && job.category !== filters.category) return false;
      return true;
    });
  };

  const filteredJobs = applyFilters(jobData);
  console.log(filteredJobs);

  return (
      <Grid container spacing={0} sx={{ bgcolor: 'black', display: 'flex', height: '100vh' }}>
        <Grid item xs={12} md={12} lg={12} sx={{ bgcolor: 'black', borderRight: '1px solid #504949' }}>
          {/* <HeaderEvents /> */}
        </Grid>
      <Grid item xs={0.5} md={0.5} lg={0.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949', mt:5 }}>
        <MiniDrawer />
        </Grid>
      <Grid item xs={11.5} md={11.5} lg={11.5} sx={{ bgcolor: 'black', borderRight: '1px solid #504949' }}>
        <MuiImage 
          sx={{ alignSelf: 'flex-start' }}
          src="../events/eventsbg.png"
          alt="Description of image"
        />
        <Box sx={{ display: 'flex' }}>
        <Grid item xs={10} md={10} lg={10} sx={{p: 2, borderRight: '1px solid #504949' }}>
          
            <Grid container spacing={2} sx={{mt:0}}>
              <Grid item xs={12} md={6} sx={{mt:2}}>
                <Box sx={{ pb: 0 }}>
                  <Typography variant='h6' sx={{color:'white'}}>
                    Upcoming Events
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ pb: 0 }}>
                  <Grid container spacing={2} sx={{mt:0}}>
                  <Grid item xs={6} md={6} >
                    <SearchBar />
                  </Grid>
                  <Grid item xs={6} md={6} >
                    <BasicDateRangeCalendar /> 
                  </Grid>
                  </Grid>
                </Box> 
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', bgcolor: 'black', borderRight: '1px solid #504949', m: 2 }}>  
            {/* <Link href=''> */}
              <Chips/>
              {/* </Link> */}
            </Box>
            <Grid container spacing={2}>
              {filteredJobs.map((job, index) => (
                <Grid item xs={12} sm={12} md={12} key={index}>
                  <JobCard job={job} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={2} md={2} lg={2} sx={{ color: 'white', p: 1, m: 1}}>
            <RightSearchBar filters={filters} setFilters={setFilters} />
            <Suggest />
          </Grid>
        </Box> 
            <SubscribeForm />
        </Grid>
        </Grid>
  );
};

export default Events;