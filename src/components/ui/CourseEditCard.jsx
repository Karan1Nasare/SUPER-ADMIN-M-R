import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { Visibility, Edit, Delete } from '@mui/icons-material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const CourseEditCard = () => {
  return (
    <Card
      style={{
        marginTop: '20px',
        marginLeft: '20px',
        padding: '15px',
        display: 'flex',
        backgroundColor: '#0a182e',
        color: '#ffffff',
        borderRadius: '12px',
        width: '400px',
      }}
    >
      <CardMedia
        component='img'
        sx={{ width: 80, height: 80, borderRadius: '10px', margin: '10px' }}
        image='https://via.placeholder.com/80'
        alt='Profile'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent
          sx={{
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography className='text-left' component='div' variant='h6'>
            Chemistry
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
            <CalendarTodayIcon
              style={{ fontSize: '16px', marginRight: '5px' }}
            />
            <Typography variant='body2' component='div'>
              19 May 2023
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <IconButton color='primary'>
          <Visibility />
        </IconButton>
        <IconButton color='primary'>
          <Edit />
        </IconButton>
        <IconButton color='secondary'>
          <Delete />
        </IconButton>
      </Box>
    </Card>
  );
};

export default CourseEditCard;
