import React, { useState } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

const BasicDateRangeCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const handlePreviousMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={0}>
      <IconButton onClick={handlePreviousMonth} sx={{ color: 'white' }}>
        <ArrowBack />
      </IconButton>
      <Typography variant="body" component="div" mx={2} sx={{ color: 'white' }}>
        {currentDate.format('MMM YYYY')}
      </Typography>
      <IconButton onClick={handleNextMonth} sx={{ color: 'white' }}>
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default BasicDateRangeCalendar;