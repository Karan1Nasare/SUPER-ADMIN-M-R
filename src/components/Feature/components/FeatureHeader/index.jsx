import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';

import colors from '../../../../theme/colors';

const FeatureHeader = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    onChange(e.target.value);
    setInputValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onChange(inputValue);
    }
  };
  return (
    <div className='flex items-center justify-between bg-secondary__fill p-5 rounded-md border border-grey__primary__light border-opacity-20'>
      <TextField
        className='w-4/12'
        variant='outlined'
        placeholder='Search Name, Inrollment, Standerd'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          sx: {
            height: '2.5rem !important',
            background: colors.secondary__fill__dark,
            border: 'none',
            borderRadius: '0.375rem',
          },
        }}
      />
      <Link to='/features/addFeature'>
        <Button variant='outline-add-button' startIcon={<AddCircleIcon />}>
          Add Features
        </Button>
      </Link>
    </div>
  );
};

export default FeatureHeader;
