import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Chip,
  Box,
  Checkbox,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const StudentsCard = () => {
  return (
    <Card
      style={{
        backgroundColor: '#0A122A',
        borderRadius: '6px',
        padding: 20,
        width: '409px',
        color: 'white',
      }}
    >
      <CardContent style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt='User Avatar'
          src='https://via.placeholder.com/150'
          style={{ width: 60, height: 60, marginRight: 20 }}
        />
        <div style={{ flex: 1 }} className='text-left'>
          <Typography variant='h6'>Chirag Gondaliya</Typography>
          <Typography variant='body2'>abcorg@gmail.com</Typography>
          <Typography variant='body2'>+91 6353264115</Typography>
        </div>
        <Checkbox
          icon={<CheckBoxOutlineBlankIcon style={{ color: '#F18F01' }} />}
          checkedIcon={<CheckBoxIcon style={{ color: '#F18F01' }} />}
        />
      </CardContent>
      <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box textAlign='center'>
          <Typography variant='body2' style={{ color: '#B0B0B0' }}>
            Standard
          </Typography>
          <Chip
            label='10th'
            sx={{
              backgroundColor: 'custome.active__opacity',
              color: 'custome.active',
              mt: '5px',
              width: '50px',
            }}
          />
        </Box>
        <Box textAlign='center'>
          <Typography variant='body2' style={{ color: '#B0B0B0' }}>
            Enrollment
          </Typography>
          <Chip
            label='45675467'
            sx={{
              backgroundColor: 'custome.success__opacity',
              color: 'custome.success',
              mt: '5px',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default StudentsCard;
