import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar = () => {
  return (
    <TextField
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '20px', 
          backgroundColor: '#333', 
        },
        '& .MuiInputBase-input': {
          padding: '5px',
          color: 'white',
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={{ backgroundColor: 'transparent' }}>
            <SearchIcon sx={{ color: 'white', backgroundColor: '#333' }} />
          </InputAdornment>
        ),
      }}
      placeholder="Search by Title"
    />
  );
};

export default SearchBar;