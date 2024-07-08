import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

const WhereDoYouBelong = () => {
    const cardData = [
        {
            image: "/Marketing-Grey.png",
            title: "Sales & Marketing",
            description: "Walking the Talk",
        },
        {
            image: "/Finance-Grey.png",
            title: "Accounting & Finance",
            description: "Matters of Money",
        },
        {
            image: "/Tech-Grey.png",
            title: "Technology",
            description: "All things Tech",
        },
        {
            image: "/Embedded-Grey.png",
            title: "Embedded",
            description: "Hardcore Hardware",
        },
    ];

    return (
        <>
            <Typography fontWeight='700' variant="h4" component="h1" gutterBottom align="center" mt={4} mb={4}>
                Where do you belong?
            </Typography>
            <Grid container spacing={3} justifyContent="center" mt={4} mb={6}>
                {cardData.map((card, index) => (
                    <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                        <Card sx={{ maxWidth: 300, backgroundColor: 'transparent', boxShadow: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={card.image}
                                    alt={card.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div" textAlign='center'>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
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
