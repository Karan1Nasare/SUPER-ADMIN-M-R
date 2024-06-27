import React, { useState } from 'react';
import { Button } from '@mui/material';

import FilterDialog from './filterDialog';
import FilterCard from './filterCard';

const UseFilter = ({ filterOptions, dateOptions }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Show Filter
      </Button> */}
      {/* <FilterDialog
        open={open}
        onClose={handleClose}
        title='Filter'
        content={{ filterOptions }}
        actions={[
          {
            label: 'Reset',
            onClick: handleClose,
            backgroundColor: '#081028',
            borderColor: '#343B4F',
            color: 'white',
          },
          {
            label: 'Filter',
            onClick: handleClose,
            backgroundColor: 'primary',
            color: 'white',
          },
        ]}
      >
        Change Password
      </FilterDialog> */}
      <FilterCard
        filterOptions={filterOptions}
        dateOptions={dateOptions}
        open={open}
        onClose={handleClose}
        filterTitle='Standard'
        dateTitle='Select Date'
      />
    </>
  );
};

export default UseFilter;
