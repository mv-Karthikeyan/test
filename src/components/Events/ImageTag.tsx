import React from 'react';
import CardMedia from '@mui/material/CardMedia';

const MuiImage = ({ src, alt, height = 140, ...props }) => {
  return (
    <CardMedia
      component="img"
      height={height}
      image={src}
      alt={alt}
      style={{
        width: '100%', 
        objectFit: 'contain', 
        objectPosition: 'center', 
        padding: 0, 
        margin: 0, 
        display: 'block', 
      }}
      {...props}
    />
  );
};

export default MuiImage;