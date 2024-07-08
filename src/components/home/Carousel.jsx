"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Button } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import styles from './Carousel.module.css';
import Link from 'next/link';

const Carousel = ({ cardData }) => {
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
        setCurrent(current === length - 3 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 3 : current - 1);
    };

    return (
        <>
            <Typography className='' fontWeight='900' variant="h4" component="h1" gutterBottom align="center" mt={4} mb={4}>
                Have a quick <span className='blog-byte-gradient'> Blog Byte </span> under 50 words
            </Typography>
            <div className={styles.carousel}>
                <div className={styles.cards}>
                    {cardData.slice(current, current + 3).map((card, index) => (
                        <Card className={styles.card} key={index}>
                            <CardMedia
                                component="img"
                                height="auto"
                                width='100%'
                                image={card.image}
                                alt={card.name}
                            />
                            <CardContent>
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Typography className='font-normal text-base' variant="h6" component="div">
                                        {card.name}
                                    </Typography>
                                    <Typography className='font-normal text-base text-secondary' variant="h6">
                                        {card.date}
                                    </Typography>
                                </Grid>
                                <Typography className='text-start font-bold text-xl' variant="h6">
                                    {card.title}
                                </Typography>
                                <Typography className={`${styles.cardDescription} text-start font-normal text-base justify-normal`} variant="body2">
                                    {card.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className={styles.navigation}>
                    <IconButton className={styles.leftArrow} onClick={prevSlide}>
                        {/* <ArrowBackIos /> */}
                        <img src="/arrow_left.png" alt="right" loading='lazy' />

                    </IconButton>
                    <div className={styles.dots}>
                        {Array.from({ length: Math.ceil(length / 3) }).map((_, index) => (
                            <span
                                key={index}
                                className={current === index * 3 ? styles.dotActive : styles.dot}
                                onClick={() => setCurrent(index * 3)}
                            ></span>
                        ))}
                    </div>
                    <IconButton className={styles.rightArrow} onClick={nextSlide}>
                        {/* <ArrowForwardIos /> */}
                        <img src="/arrow_right.png" alt="right" loading='lazy' />
                    </IconButton>
                </div>
                <Button color="primary" variant="contained" className='mt-6 px-6 rounded-full font-bold join-community'>
                    <Link href="/blogs" passHref>More</Link>
                </Button>
            </div>
        </>
    );
};

export default Carousel;
