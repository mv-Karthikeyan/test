import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';

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
                    <ImageListItem
                        key={index}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            '&:before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: item.bgColor,
                                transform: 'skewX(0deg) scaleX(1.3)',
                                zIndex: -1
                            }
                        }}
                    >
                        <img src={item.src} alt={item.name} className='p-10' style={{ position: 'relative', zIndex: 1 }} />
                        <ImageListItemBar
                            title={item.name}
                            position="bottom"
                            actionPosition="right"
                            sx={{
                                background: 'rgba(0, 0, 0, 0.03)',
                                textAlign: 'center',
                                fontWeight: '800',
                                position: 'relative',
                                zIndex: 1
                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default WhatDoWeOffer;
