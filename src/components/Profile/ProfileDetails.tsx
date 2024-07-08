// components/PersonProfile.js
import Image from 'next/image';
import { Box, Typography, SvgIcon, IconButton } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

const ProfileDetails = ({ src, name, designation }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        px: 4, 
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          marginLeft: '0',
          mt : -5,
        }}
      >
        <Image
          src={src}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Typography variant="h6" sx={{ mt: 2, color: 'white', display: 'flex', alignItems: 'center' }}>
        <IconButton aria-label="suitcase">
          <WorkIcon  sx={{ color: 'white' }} />
        </IconButton>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: 'white' }}>
        <IconButton aria-label="experience">
          <BusinessCenterIcon  sx={{ color: 'white' }} />
        </IconButton>
        {designation}
      </Typography>
    </Box>
  );
};

export default ProfileDetails;