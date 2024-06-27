import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import PATH_DASHBOARD from '../../../routes/path';
import TextField from '../../shared/input/TextField';
import MenuItem from '../../shared/menuitem/MenuItem';
import MaterialDropDown from './MaterialDropDown';
import MaterialDropDown2 from './MaterialDropDown2';

const SelectSubject = [
  {
    label: 'Select Subject',
    value: '1',
  },
  {
    label: 'Subject  2',
    value: '2',
  },
  {
    label: 'Subject  3',
    value: '3',
  },
  {
    label: 'Subject  4',
    value: '4',
  },
];
const SelectStandard = [
  {
    label: 'Select Standard',
    value: '1',
  },
  {
    label: 'Standard  2',
    value: '2',
  },
  {
    label: 'Standard  3',
    value: '3',
  },
  {
    label: 'Standard  4',
    value: '4',
  },
];
const SelectChapter = [
  {
    label: 'Select Chapter',
    value: '1',
  },
  {
    label: 'Chapter  2',
    value: '2',
  },
  {
    label: 'Chapter  3',
    value: '3',
  },
  {
    label: 'Chapter  4',
    value: '4',
  },
];
const ContentFilterApply = () => {
  const [course, setCourse] = useState([]);
  const [filters, setFilters] = useState({
    search: '',
    course: '',
    subject: '',
    chapter: '',
  });

  const navigate = useNavigate();

  const isCheckFilterSelected = () => {
    console.log('filters', filters);
    return filters.course && filters.subject && filters.chapter;
  };

  return (
    <>
      <div className='flex flex-wrap justify-between gap-5 p-5 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
        {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}
        <MaterialDropDown2 setApplyFilter={setFilters} />
        <Stack
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <button
            className='bg-white text-[#0E1736]rounded-md flex items-center h-[44px] text-base  flex-row gap-2'
            style={{
              padding: '10px 16px',
              borderRadius: '6px',
            }}
            onClick={() => {
              // if (isCheckFilterSelected()) {
              navigate(PATH_DASHBOARD.Material['add-content']);

              // }
              // toast.dismiss();
              // toast.error('Plese selct all filter first.', {
              //   position: 'top-right',
              // });
              // }}
            }}
          >
            <Icon icon={'simple-line-icons:plus'} /> Add Content
          </button>
        </Stack>
      </div>
    </>
  );
};

export default ContentFilterApply;
