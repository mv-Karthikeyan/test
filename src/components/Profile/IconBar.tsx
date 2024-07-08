// components/IconBar.js
import React from 'react';
import { Stack, IconButton, Button, Grid } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';

const IconBar = () => {
  return (
    <Grid container spacing={2} sx={{ pl:2, pr:2, }}>
      <Grid item xs={12} md={8} lg={8}></Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Stack spacing={2} sx={{mt:4}}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
          <IconButton aria-label="message" sx={{ bgcolor: '#6662623d', px: 1, borderRadius: 1 }}>
            <MessageIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label="bookmark" sx={{ bgcolor: '#6662623d', px: 1, borderRadius: 1 }}>
            <BookmarkIcon sx={{ color: 'white' }} />
          </IconButton>
          <IconButton aria-label="share" sx={{ bgcolor: '#6662623d', px: 1, borderRadius: 1 }}>
            <ShareIcon sx={{ color: 'white' }} />
          </IconButton>
          </Stack>
          <Button variant="contained" color="primary" sx={{ borderRadius: 10, fontSize:12 }}>
            Join to View Profile
          </Button>
        </Stack>
      </Grid>
    </Grid>
    
  );
};

export default IconBar;