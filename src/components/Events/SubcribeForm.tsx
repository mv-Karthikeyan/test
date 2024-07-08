import React from 'react';
import { Box, TextField, Button, FormControl } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '60vh',
  width: '100%',
  backgroundImage: 'url(../events/SubscribeEvents-Banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const SubscribeForm = () => {
  return (
    <BackgroundContainer>
      <FormControl sx={{ maxWidth: 400, mx: 'auto', p: 4, bgcolor: '#fff', borderRadius: 2 }}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            label: {
              color: 'black',
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          sx={{
            label: {
              color: 'black',
            },
          }}
        />
        <Button variant="contained" color="primary" fullWidth>
          Subscribe
        </Button>
      </FormControl>
    </BackgroundContainer>
  );
};

export default SubscribeForm;