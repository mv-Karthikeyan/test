import React from 'react';
import { Box, FormControlLabel, Checkbox, Typography, Select, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const RightSearchBar = ({ filters, setFilters }) => {
  const handleFilterChange = (event) => {
    setFilters({
     ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleLocationChange = (event) => {
    const locationValue = event.target.value;
    console.log(locationValue);
    setFilters({
      ...filters,
      location: locationValue,
    });
  };

  return (
    <Box sx={{ width: '100%', m: 0 }}>
      <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FilterListIcon sx={{ mr: 1 }} /> Filters
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Box sx={{ mb: 1 }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: 'blue' }} checked={filters.online} onChange={handleFilterChange} name="online" />}
            label="Online"
          />
        </Box>
        <Box sx={{ mb: 1 }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: 'blue' }} checked={filters.offline} onChange={handleFilterChange} name="offline" />}
            label="Offline"
          />
        </Box>
        <Box sx={{ mb: 1 }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: 'blue' }} checked={filters.free} onChange={handleFilterChange} name="free" />}
            label="Free"
          />
        </Box>
        <Box sx={{ mb: 1 }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: 'blue' }} checked={filters.paid} onChange={handleFilterChange} name="paid" />}
            label="Paid"
          />
        </Box>
        <Box sx={{ mb: 1 }}>
        <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FilterListIcon sx={{ mr: 1 }} /> Location
      </Typography>
          <Select
            labelId="location-label"
            id="location-select"
            value="ALL"
            onChange={handleLocationChange}
            fullWidth
            sx={{
              backgroundColor: '#504949',
              borderRadius: '10px',
              color : 'white',
              '&.MuiSelect-select': {
                backgroundColor: 'white',
                color: 'cement',
                borderColor : '#504949', 
              },
            }}
          >
            <MenuItem value="ALL">All</MenuItem>
            <MenuItem value="hyderabad">Hyderabad</MenuItem>
            <MenuItem value="bangalore">Bangalore</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};

export default RightSearchBar;