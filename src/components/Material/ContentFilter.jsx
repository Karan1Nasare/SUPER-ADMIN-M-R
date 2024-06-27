/* eslint-disable import/no-extraneous-dependencies */
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
} from '@mui/material';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const ContentFilter = () => {
  const theme = useTheme();
  const [filters, setFilters] = useState({
    name: '',
    Chapter: '',
    Subject: '',
    Standard: '',
  });

  return (
    <div className='flex justify-between gap-5 p-5 rounded-xl border border-gray-700 border-solid bg-[#0B1739]  max-md:flex-wrap max-md:px-5'>
      {/* <div className='flex items-center bg-[#0B1739] p-4 space-x-4 justify-between'> */}
      <div className='flex flex-row gap-2 items-center'>
        <div>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            className='bg-[#0A1330] text-white placeholder-white p-2 rounded-md border border-[#343B4F] text-sm'
          />
        </div>

        <div>
          <select className="bg-slate-900 text-white p-2 rounded-md text-sm font-['Helvetica'] font-normal border border-[#343B4F]">
            <option>Select Subject</option>
            <option>Select Subject</option>
            <option>Select Subject</option>
            {/* Add other options here */}
          </select>
        </div>

        <div>
          <select className="bg-slate-900 text-white p-2 rounded-md text-sm font-['Helvetica'] font-normal border border-[#343B4F]">
            <option>Select Subject</option>
            <option>Select Subject</option>
            <option>Select Subject</option>
            {/* Add other options here */}
          </select>
        </div>

        <div>
          <select className="bg-slate-900 text-white p-2 rounded-md text-sm font-['Helvetica'] font-normal border border-[#343B4F]">
            <option>Select Subject</option>
            <option>Select Subject</option>
            <option>Select Subject</option>
            {/* Add other options here */}
          </select>
        </div>
      </div>

      <div>
        <button
          className='bg-white text-[#0E1736]rounded-md flex items-center h-[44px] text-base  flex-row gap-2'
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
          }}
        >
          <Icon icon={'simple-line-icons:plus'} /> Add Content
        </button>
      </div>
    </div>
  );
};

export default ContentFilter;
