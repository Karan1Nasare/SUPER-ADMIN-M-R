import React, { useState } from 'react';
import { Icon } from '@iconify/react';

import AddMaterialForm from '../../components/ui/AddMaterialForm';
import StudentNotification from '../../components/ui/notification/students/StudentNotification';
import StaffNotification from '../../components/ui/notification/Staff/StaffNotification';
import TextField from '../../components/shared/input/TextField';
import MenuItem from '../../components/shared/menuitem/MenuItem';
import Button from '../../components/shared/buttons/Button';

const AddNotification = () => {
  const pageTitle = 'Notification';
  const [sendTo, setSendTo] = useState('Both');
  const [openstudentnotification, setOpenStudentNotification] = useState(false);
  const [openstaffnotification, setOpenstaffNotification] = useState(false);
  function handleselectstudent() {
    setOpenStudentNotification(true);
  }
  function handleSelectStaff() {
    setOpenstaffNotification(true);
  }
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1 className='text-left text-white text-4xl mb-8'>{pageTitle}</h1>
        <div className='flex items-center gap-2'>
          <TextField
            select
            onChange={e => setSendTo(e.target.value)}
            defaultValue='Both'
            sx={{ width: '148px', p: '9px' }}
          >
            <MenuItem value='Both'>Both</MenuItem>
            <MenuItem value='Student'>Student</MenuItem>
            <MenuItem value='Staff'>Staff</MenuItem>
          </TextField>

          {sendTo === 'Student' && (
            <Button
              sx={{ width: '132px', p: '9px', backgroundColor: 'white' }}
              onClick={handleselectstudent}
            >
              <span className='my-auto'>Select Student</span>
            </Button>
          )}
          {sendTo === 'Staff' && (
            <Button
              sx={{ width: '132px', p: '9px', backgroundColor: 'white' }}
              onClick={handleSelectStaff}
            >
              <span className='my-auto'>Select Staff</span>
            </Button>
          )}
        </div>
      </div>

      <AddMaterialForm inputLabel={'Title'} placeholder={'Enter Title'} />
      <div className='text-right w-full flex justify-end mt-2'>
        <button className='flex items-center gap-2.5 px-4 py-2.5 text-base text-center bg-white rounded-lg text-slate-900'>
          <Icon
            icon={'simple-line-icons:plus'}
            className='shrink-0 w-6 aspect-square text-black'
            fontSize={'1.2rem'}
          />
          <span className='my-auto'>Add {pageTitle}</span>
        </button>
      </div>
      {openstudentnotification && (
        <StudentNotification
          closehandler={() => setOpenStudentNotification(false)}
        />
      )}
      {openstaffnotification && (
        <StaffNotification
          closehandler={() => setOpenstaffNotification(false)}
        />
      )}
    </div>
  );
};

export default AddNotification;
