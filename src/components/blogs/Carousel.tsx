"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import styles from './Carousel.module.css';

const cardData = [
    {
        image: 'blog-1.png',
        blogType: 'Sales & Marketing',
        blogDate: 'Nov 3, 2023',
        heading: 'User Experience: HR Recruitment Software Adoption',
        content: 'Leading AI tools like Salesforce Einstein, Marketo, and HubSpot employ high-performing algorithms to enhance the performance of sales conversions. They offer predictive analytics, personalized recommendations to deal with every client, and automated workflows for efficient usage of time, empowering businesses to have hands-on leads effectively and close more deals.',
    },
    {
        image: 'blog-1.png',
        blogType: 'Sales & Marketing',
        blogDate: 'Nov 3, 2023',
        heading: 'User Experience: HR Recruitment Software Adoption',
        content: 'Leading AI tools like Salesforce Einstein, Marketo, and HubSpot employ high-performing algorithms to enhance the performance of sales conversions. They offer predictive analytics, personalized recommendations to deal with every client, and automated workflows for efficient usage of time, empowering businesses to have hands-on leads effectively and close more deals.',
    },
    {
        image: 'blog-1.png',
        blogType: 'Sales & Marketing',
        blogDate: 'Nov 3, 2023',
        heading: 'User Experience: HR Recruitment Software Adoption',
        content: 'Leading AI tools like Salesforce Einstein, Marketo, and HubSpot employ high-performing algorithms to enhance the performance of sales conversions. They offer predictive analytics, personalized recommendations to deal with every client, and automated workflows for efficient usage of time, empowering businesses to have hands-on leads effectively and close more deals.',
    },
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = cardData.length;

    // Auto scroll
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); // Adjusted to 10 seconds

        return () => clearInterval(interval);
    }, [current]);

    const nextSlide = () => {
        setCurrent((current + 1) % length);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.cards}>
                <Card className={styles.card}>
                    <CardMedia
                        className={styles.cardMedia}
                        component="img"
                        image={cardData[current].image}
                        alt={cardData[current].heading}
                    />
                    <CardContent className={styles.cardContent}>
                        <Grid container justifyContent="space-between" alignItems="center" mb={3}>
                            <Typography variant="body2" component="p">
                                {cardData[current].blogType}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {cardData[current].blogDate}
                            </Typography>
                        </Grid>
                        <Typography variant="h4" component="div" mb={2}>
                            {cardData[current].heading}
                        </Typography>
                        <Typography className='text-lg justify-stretch' variant="body2" component="p">
                            {cardData[current].content}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.dots}>
                {cardData.map((_, index) => (
                    <span
                        key={index}
                        className={current === index ? styles.dotActive : styles.dot}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
