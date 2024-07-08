import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
// import Link from 'next/link';

const WhatDoWeOffer = () => {
    const imageData = [
        { name: 'Events', src: '/events.png', bgColor: '#6C55FF', link: '/events' },
        { name: 'Blogs', src: '/blogs.png', bgColor: '#A3C052', link: '/blogs' },
        { name: 'Opportunities', src: '/opportunities.png', bgColor: '#FFAB3A', link: '/opportunities' },
        { name: 'Activities', src: '/activities.png', bgColor: '#FF5A61', link: '/activities' }
    ];

    return (
        <Container className='mb-6'>
            <Typography fontWeight='700' variant="h4" component="h1" gutterBottom align="center" mt={4} mb={4}>
                What do we Offer ?
            </Typography>
            <ImageList cols={4} gap={4} sx={{ '@media (max-width: 768px)': { cols: 2 } }}>
                {imageData.map((item, index) => (
                    // <Link key={index} href={item.link} passHref>
                        <ImageListItem    key={index} sx={{ backgroundColor: item.bgColor, }}>
                            <img src={item.src} alt={item.name} className='p-10' />
                            <ImageListItemBar
                                title={item.name}
                                position="bottom"
                                actionPosition="right"
                                sx={{ background: 'rgba(0, 0, 0, 0.03)', textAlign: 'center', fontWeight: '800' }}
                            />
                        </ImageListItem>
                    // </Link>
                ))}
            </ImageList>
        </Container>
    );
};

export default WhatDoWeOffer;
