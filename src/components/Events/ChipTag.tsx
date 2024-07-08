import React, {useState} from 'react';
import { Chip, Box} from '@mui/material';

const Chips = () => {
  const [filters, setFilters] = useState({}); 

  const handleCategoryChange = (category) => {
    setFilters((prevFilters) => ({ ...prevFilters, category }));
  };

  

  const categories = ['Sales', 'Marketing', 'Finance', 'Accounting', 'Technology', 'Embedded']; // add more categories here

  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: 'black', 
        borderRight: '1px solid #504949', m: 2 
        }}>
        <Chip
          label="All"
          sx={{ mr: 1, mb: 1, color: '#fff', bgcolor: '#333'  }}
        />
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          onClick={() => handleCategoryChange(category)}
          sx={{ mr: 1, mb: 1, color: '#fff', bgcolor: '#333' }}
        />
      ))}
    </Box>
      );
};

export default Chips;