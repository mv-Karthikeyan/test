import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import Link from 'next/link';
import WhereDoYouBelong from '@/components/home/WhereDoYouBelong'
import WhatDoWeOffer from '@/components/home/WhatDoWeOffer';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Carousel from '@/components/home/Carousel';
import BigFooterSection from '@/components/home/BigFooterSection';

const HomePage = () => {

  const cardData = [
    {
      image: "/carousel-1.png",
      name: "John Doe",
      date: "June 1, 2024",
      title: "Sales & Marketing",
      description: "Top 7 Reasons Why Your DEI Recruiting Efforts are Failing",
    },
    {
      image: "/carousel-2.png",
      name: "Jane Smith",
      date: "May 25, 2024",
      title: "Accounting & Finance",
      description: "Leading AI tools like Salesforce Einstein, Marketo, and HubSpot employ high-performing algorithms to enhance the performance of sales conversions. They offer predictive analytics, personalized recommendations to deal with every client, and automated workflows for efficient usage of time, empowering businesses to have hands-on leads effectively and close more deals.",
    },
    {
      image: "/carousel-1.png",
      name: "Alice Johnson",
      date: "April 10, 2024",
      title: "Technology",
      description: "6 Tips to Improve Your Local Job Posting Strategy",
    },
    {
      image: "/carousel-2.png",
      name: "Bob Brown",
      date: "March 5, 2024",
      title: "Embedded",
      description: "Hardcore Hardware",
    },
    {
      image: "/carousel-1.png",
      name: "Alice Johnson",
      date: "April 10, 2024",
      title: "Technology",
      description: "6 Tips to Improve Your Local Job Posting Strategy",
    },
    {
      image: "/carousel-2.png",
      name: "Bob Brown",
      date: "March 5, 2024",
      title: "Embedded",
      description: "Hardcore Hardware",
    },
    {
      image: "/carousel-1.png",
      name: "Alice Johnson",
      date: "April 10, 2024",
      title: "Technology",
      description: "6 Tips to Improve Your Local Job Posting Strategy",
    },
    {
      image: "/carousel-2.png",
      name: "Bob Brown",
      date: "March 5, 2024",
      title: "Embedded",
      description: "Hardcore Hardware",
    },
  ];


  return (
    <>
      <GlobalLayout>
        <Container>
          <Typography className='' variant="h2" fontWeight='800' component="h1" gutterBottom align="center" mt={8} mb={1}>
            Learn . Connect . Grow
          </Typography>
          <Typography variant="h5" component="h1" gutterBottom align="center" mt={1} mb={3}>
            The Professional Knowledge Hub
          </Typography>
          <Grid container justifyContent="center" mt={4} mb={4}>
            <Grid item>
              <Link href="/join" passHref>
                <Button className='px-6 py-3 rounded-full font-extrabold join-community' variant="contained" color="primary" size="large">Join Community</Button>
              </Link>
            </Grid>
          </Grid>

          <WhereDoYouBelong />
          {/* <SkewedCards /> */}

          {/* Add new section with image on left and content on right */}
          <Grid container spacing={4} alignItems="center" mb={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Networking Nirvana
              </Typography>
              <Typography className='ps-4' variant="body1" paragraph style={{ fontSize: '1.1rem' }} sx={{ textAlign: 'justify', borderLeft: '#38BAFD  4px solid', }}>
                Connect with like-minded individuals for mentorship, collaboration, and professional networking.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="300"
                image="./Rectangle-2.png"
                alt="Descriptive Alt Text"
                sx={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} alignItems="center" mb={8}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="300"
                image="./Rectangle-1.png"
                alt="Descriptive Alt Text"
                sx={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Only useful Content
              </Typography>
              <Typography className='ps-4' variant="body1" paragraph style={{ fontSize: '1.1rem' }} sx={{ textAlign: 'justify', borderLeft: '#38BAFD  4px solid', }}>
                Our expert-written posts fuel insightful conversations on topics they're passionate about. Share innovative ideas and ignite your creativity.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={4} alignItems="center" mb={8}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Ecosystem of Support
              </Typography>
              <Typography className='ps-4' variant="body1" paragraph style={{ fontSize: '1.1rem' }} sx={{ textAlign: 'justify', borderLeft: '#38BAFD  4px solid', }}>
                Share & celebrate knowledge, ideas, and success stories. Every contribution matters, big or small.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="300"
                image="./Rectangle-3.png"
                alt="Descriptive Alt Text"
                sx={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
            </Grid>
          </Grid>

          {/* Add   What do we offer?*/}
          <WhatDoWeOffer />
          <Carousel cardData={cardData} />
        </Container>
        <BigFooterSection />
      </GlobalLayout>
    </>
  );
};

export default HomePage;
