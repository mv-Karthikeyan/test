"use client"
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const WhereDoYouBelong = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const cardData = [
        {
            grayImage: "/Marketing-Grey.png",
            colorImage: "/Marketing-Color.png",
            title: "Sales & Marketing",
            description: "Walking the Talk",
        },
        {
            grayImage: "/Finance-Grey.png",
            colorImage: "/Finance-Color.png",
            title: "Accounting & Finance",
            description: "Matters of Money",
        },
        {
            grayImage: "/Tech-Grey.png",
            colorImage: "/Tech-Color.png",
            title: "Technology",
            description: "All things Tech",
        },
        {
            grayImage: "/Embedded-Grey.png",
            colorImage: "/Embedded-Color.png",
            title: "Embedded",
            description: "Hardcore Hardware",
        },
    ];

    return (
        <>
            <Typography fontWeight='700' variant="h4" component="h1" gutterBottom align="center" mt={4} mb={4}>
                Where do you belong?
            </Typography>
            <Grid container spacing={2} justifyContent="center" mt={4} mb={6}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                        <Card 
                            sx={{ 
                                maxWidth: 300, 
                                color:'#fff',
                                backgroundColor: 'transparent', 
                                backgroundImage: 'none', 
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={hoveredIndex === index ? card.colorImage : card.grayImage}
                                    alt={card.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="" textAlign='center'>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default WhereDoYouBelong;
