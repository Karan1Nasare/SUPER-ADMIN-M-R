import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
  Divider,
} from '@mui/material';
import {
  Close as CloseIcon,
  CalendarToday as CalendarTodayIcon,
} from '@mui/icons-material';

const ChemistryCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        backgroundColor: '#0B0E3F',
        color: 'white',
        borderRadius: 1,
      }}
    >
      <Box className='p-3'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            py: 1,
          }}
        >
          <Typography variant='h6'>Chemistry</Typography>
          <IconButton size='small' sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider className='my-2 mx-3 bg-white' />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
        <CardMedia
          component='img'
          image='https://via.placeholder.com/150'
          alt='Person'
          sx={{ width: 150, height: 150, borderRadius: 2, mr: 2 }}
        />
        <CardContent>
          <Typography variant='h6' className='text-left' sx={{ mb: 2 }}>
            Chemistry
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <CalendarTodayIcon sx={{ mr: 1, fontSize: 16 }} />
            <Typography variant='body2' className='text-left text-[#98A4AE]'>
              19 May 2023
            </Typography>
          </Box>
          <Typography variant='body2' className='text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
            amet lorem eleifend, pellentesque turpis id, consequat leo.
            Pellentesque quis rutrum nulla, et feugiat est. Morbi aliquam ligula
            non sagittis lobortis. Suspendisse hendrerit purus nec sapien
            placerat, eget fermentum lectus suscipit.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default ChemistryCard;
