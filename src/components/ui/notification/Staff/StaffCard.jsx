import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Box,
  Checkbox,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const StaffCard = ({ staff }) => {
  const { name, email, phone } = staff;

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
          <Typography variant='h6'>{name}</Typography>
          <Typography variant='body2'>{email}</Typography>
          <Typography variant='body2'>{phone}</Typography>
        </div>

        <Checkbox
          icon={<CheckBoxOutlineBlankIcon style={{ color: '#F18F01' }} />}
          checkedIcon={<CheckBoxIcon style={{ color: '#F18F01' }} />}
        />
      </CardContent>
      <CardContent>
        <Box display='flex' alignItems='center' mb={2} gap={3}>
          <Typography variant='body2' style={{ color: '#B0B0B0' }}>
            Primary Class -
          </Typography>
          <Chip
            label='5B'
            sx={{
              backgroundColor: 'custome.active__opacity',
              color: 'custome.active',
              width: '50px',
            }}
          />
          <Chip
            label='5B'
            sx={{
              backgroundColor: 'custome.active__opacity',
              color: 'custome.active',
              width: '50px',
            }}
          />
          <Chip
            label='5B'
            sx={{
              backgroundColor: 'custome.active__opacity',
              color: 'custome.active',
              width: '50px',
            }}
          />
        </Box>
        <Box textAlign='center'>
          <Box display='flex' justifyContent='center' gap={1} mt={1}>
            <Chip
              label='Social Science'
              sx={{
                backgroundColor: 'custome.success__opacity',
                color: 'custome.success',
                width: '120px',
              }}
            />
            <Chip
              label='Social Science'
              sx={{
                backgroundColor: 'custome.success__opacity',
                color: 'custome.success',
                width: '120px',
              }}
            />
            <Chip
              label='Social Science'
              sx={{
                backgroundColor: 'custome.success__opacity',
                color: 'custome.success',
                width: '120px',
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StaffCard;
