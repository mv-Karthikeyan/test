import React from 'react'
import { Card, CardContent, Grid, Typography, Button, CardMedia, Box } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { IconButton, CardActions } from '@mui/material';

const JobCard = ({ job, bookmarked, onBookmark }) => {
  return (
    <Card sx={{ display: 'flex', bgcolor: '#181717', p: 3 , color: 'white', borderRadius: 2, position:"relative", }}>
    <CardMedia
      component="img"
      sx={{ width: '40%', height: '50%' }}
      image={job.image}
      alt={job.title}
    />
    <Box
        position="absolute"
        bottom={5}
        right={580}
        bgcolor="orange"
        px={2}
        py={1}
        borderRadius="4px"
        z-index="100"
      >
        <Typography variant="h6" color="black" fontWeight="bold" align='center'>
        {job.day}
        </Typography>
        <Typography variant="h6" color="black" fontWeight="bold" align='center'>
        {job.month}
        </Typography>
      </Box>
    <CardContent sx={{ flex: 1 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <IconButton
          aria-label="bookmark"
          onClick={() => onBookmark(job.id)}
          sx={{ ml: 1 }}
        >
          {bookmarked ? (
            <BookmarkIcon fontSize="small" sx={{color:"white"}} />
          ) : (
            <BookmarkBorderIcon fontSize="small" sx={{color:"white"}}/>
          )}
        </IconButton>
      </Grid>
      <Typography color="White">
      Location: <span style={{ fontSize: 16, fontWeight: 400 }}>{job.location}</span>
      </Typography>
      <Typography variant="body2">
      Email: <span style={{ fontSize: 16, fontWeight: 400 }}>{job.email}</span>
      </Typography>
      <Grid container spacing={2} justifyContent="flex-end" alignItems="center" >
        <Typography variant="body2" sx={{ marginRight: 2, alignSelf: 'center' }}>
          Price: <span style={{ fontSize: 18, fontWeight: 600 }}>{job.price.charAt(0).toUpperCase() + job.price.slice(1)}</span>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, borderRadius: 20 }}
        >
          Apply
        </Button>
      </Grid>
    </CardContent>
    <CardActions sx={{ justifyContent: 'flex-end' }}>
    </CardActions>
  </Card>
  );
};

export default JobCard