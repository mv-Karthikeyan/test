"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
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
    image: 'blog-2.png',
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
    }, 10000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  return (
    <>
      <div className={styles.carousel}>
        <div className={styles.cards}>
          {cardData.slice(current, current + 1).map((card, index) => (
            <Card className={styles.card} key={index}>
              <CardMedia
                className={styles.cardMedia}
                component="img"
                height="auto"
                image={card.image}
                alt={card.heading}
              />
              <CardContent className={styles.cardContent}>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" component="div">
                    {card.blogType}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {card.blogDate}
                  </Typography>
                </Grid>
                <Typography variant="h6" component="div">
                  {card.heading}
                </Typography>
                <Typography variant="body2" component="p">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className={styles.navigation}>
          <div className={styles.dots}>
            {Array.from({ length }).map((_, index) => (
              <span
                key={index}
                className={current === index ? styles.dotActive : styles.dot}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
