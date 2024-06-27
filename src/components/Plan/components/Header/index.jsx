import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = ({ value, onChange }) => {
  return (
    <>
      <div className='w-max mb-6 '>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Plan
        </h2>
      </div>
      <div className='text-sm font-medium text-center bg-[#0B1739] text-gray-500 border border-bright__grey  p-8 rounded-md flex items-center justify-between  border-grey__primary__light border-opacity-20'>
        <div>
          <input
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            className='justify-center items-start self-start px-3 py-3   bg-secondary__fill__dark   text-white w-72 rounded-md'
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </div>
        <Link to='/plan/addPlan'>
          <Button variant='outline-add-button' startIcon={<AddCircleIcon />}>
            Add Plan
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Header;
