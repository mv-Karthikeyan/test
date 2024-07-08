"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography, Grid, IconButton, Link, Pagination, Box, PaginationItem } from '@mui/material';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { cardData } from './cardData'; // Importing cardData from separate file
import SearchBar from '@/components/reusable/SearchBar';

const BlogTypesSectionOne = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredCards, setFilteredCards] = useState(cardData); // State for filtered cards
    const cardsPerPage = 6; // Number of cards per page

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
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    // Handle search query change
    const handleSearchChange = (query: string) => {
        const filtered = cardData.filter((card) =>
            card.heading.toLowerCase().includes(query.toLowerCase()) ||
            card.blogType.toLowerCase().includes(query.toLowerCase()) ||
            card.blogDate.toLowerCase().includes(query.toLowerCase()) ||
            card.content.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCards(filtered);
        setCurrentPage(1); // Reset to first page when search query changes
    };

    // Calculate current cards to display based on currentPage and filteredCards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <>
            <SearchBar onSearch={handleSearchChange} />
            <Grid container spacing={3} className='p-4'>
                {currentCards.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
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
                            <Grid container className='mb-0 pb-0' justifyContent="space-between" alignItems="center" mb={3}>
                                <Typography className='ms-4' variant="inherit" component="p">
                                    <Link href="#" color='primary'>Comments</Link>
                                </Typography>
                                <CardActions disableSpacing >
                                    <IconButton color="inherit" aria-label="add to favorites">
                                        <FavoriteBorderOutlinedIcon />
                                    </IconButton>
                                    <IconButton color="inherit" aria-label="share">
                                        <ShareOutlinedIcon />
                                    </IconButton>
                                </CardActions>
                            </Grid>
                        </Card>
                    </Grid>
                ))}
            </Grid >
            <Pagination
                count={Math.ceil(filteredCards.length / cardsPerPage)}
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

export default BlogTypesSectionOne;
