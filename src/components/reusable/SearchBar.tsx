"use client";
import React, { useState } from 'react';
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

interface SearchBarProps {
    placeholder?: string;
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query);
    };

    return (
        <Box className='p-4 mt-4'>
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon style={{ color: '#fff' }} />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    backgroundColor: "#1A232A",
                    borderRadius: '32px',
                    width: {
                        xs: '100%', 
                        sm: '100%', 
                        md: '50%',  
                        lg: '50%',  
                        xl: '60%',  
                    },
                    mb: 2,
                    '& .MuiInputBase-root': {
                        color: '#ffffff',
                        borderRadius: '30px',
                    },
                    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'transparent',
                    },
                }}
            />
        </Box>
    );
};

export default SearchBar;
