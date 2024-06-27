import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Stack } from '@mui/material';
import PATH_DASHBOARD from '../../../routes/path';
import TextField from '../../shared/input/TextField';
import MenuItem from '../../shared/menuitem/MenuItem';
import useCourseStd from '../hooks/useCourseStd';
import useSubject from '../hooks/useSubject';

const SubjectFilterApply = () => {
  const { courseStdList } = useCourseStd();
  const { setSearchTerm } = useSubject();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      setSearchTerm(inputValue);
    }
  };
  const navigate = useNavigate();

  return (
    <div className='flex justify-between gap-5 p-5 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
      {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}
      <Grid container spacing={2} sx={{ flex: 1 }}>
        <Grid item sm={6} md={3} xs={12}>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            className='px-3 py-3 w-full h-full  bg-secondary__fill__dark   text-white rounded-md'
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </Grid>
        <Grid item sm={6} md={3} xs={12}>
          <TextField
            select
            sx={{
              width: '100%',
              textAlign: 'left',
              padding: '1px',
            }}
          >
            <MenuItem value='' disabled>
              Select Standard
            </MenuItem>
            {courseStdList?.map((option, i) => (
              <MenuItem key={i} value={i}>
                {option?.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
        <button
          className='bg-white text-[#0E1736]rounded-md flex items-center h-[44px] text-base  flex-row gap-2'
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
          }}
          onClick={() => navigate(PATH_DASHBOARD.Material['add-subject'])}
        >
          <Icon icon={'simple-line-icons:plus'} /> Add Subject
        </button>
      </Stack>{' '}
    </div>
  );
};

export default SubjectFilterApply;
