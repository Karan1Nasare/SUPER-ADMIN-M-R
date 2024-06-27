import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const NotificationCard = ({ Description, Schedule }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        backgroundColor: '#0b1437',
        color: '#fff',
        borderRadius: '8px',
        padding: '30px',
      }}
    >
      <CardContent>
        <Box display='flex' alignItems='center'>
          <Avatar
            variant='rounded'
            alt='Profile Picture'
            src='https://via.placeholder.com/150'
            sx={{ width: 56, height: 56, marginRight: 2 }}
          />
          <Box flexGrow={1} className='text-left'>
            <Typography variant='h6' component='div' className='p-1'>
              Exam Schedule
            </Typography>
            <Typography variant='body2' color='#febd38' className='p-1'>
              Date: 6-5-2024 Time: 09:45AM
            </Typography>
          </Box>
          <IconButton color='inherit'>
            <Edit />
          </IconButton>
          <IconButton color='error'>
            <Delete />
          </IconButton>
        </Box>
        <Box mt={2} className='text-left' sx={{ mt: '12px' }}>
          <Typography variant='body2' color='inherit' gutterBottom>
            Description:
          </Typography>
          <Typography variant='body2' color='inherit' className='mt-2'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default NotificationCard;
