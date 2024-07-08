// components/ResponsiveImage.js
import Image from 'next/image';
import { Box } from '@mui/material';

const BgImage = ({ src, alt }) => {
  return (
    <Box
      sx={{
        height: 200,
        width: '100%',
        position: 'relative',
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};

export default BgImage;
