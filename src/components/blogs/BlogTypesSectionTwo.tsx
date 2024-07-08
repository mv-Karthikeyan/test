"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton, Pagination } from '@mui/material';
import { cardData } from './cardData';

const BlogTypesSectionTwo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 2; // Number of cards per page

    // Simulating API call with useEffect
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulated API call logic
                // Replace with actual API call if needed
                // const response = await fetch(`https://api.example.com/cards?page=${currentPage}&perPage=${cardsPerPage}`);
                // const data = await response.json();
                // setCardData(data); // Assuming data structure similar to your cardData
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentPage, cardsPerPage]);

    // Handle page change
    const handlePageChange = (event, page: number) => {
        setCurrentPage(page);
    };

    // Calculate current cards to display based on currentPage
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <>
            <Grid container spacing={3} className='p-4 mt-4'>
                {currentCards.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6}>
                        <Card className='p-5'
                            sx={{
                                background: 'none',
                                color: '#fff',
                                transition: 'background-color 0.3s ease',
                                '&:hover': {
                                    backgroundColor: '#949494',
                                    color: '#fff',
                                },
                            }}>
                            <CardMedia
                                component="img"
                                alt={card.heading}
                                height="auto"
                                image={card.image}
                            />
                            <CardContent>
                                <Grid container justifyContent="space-between" alignItems="center" mb={3}>
                                    <Typography variant="body2" component="p">
                                        {card.blogType}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {card.blogDate}
                                    </Typography>
                                </Grid>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.heading}
                                </Typography>
                                <Typography variant="body2" color="">
                                    {card.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(cardData.length / cardsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
                className="my-4 ps-4"
                sx={{
                    '& .MuiPaginationItem-root': {
                        color: '#fff',
                        border: '1px solid',
                    },
                    '& .Mui-selected': {
                        color: '#fff',
                    },
                }}
            />
        </>
    );
}

export default BlogTypesSectionTwo;
