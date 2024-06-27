import { Button } from '@mui/material';
import React, { useState } from 'react';
import InputDialog from './Dialog/inputDialog';

const ChangePassword = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Change Password
      </Button>
      <InputDialog
        open={open}
        onClose={handleClose}
        title='Change Password'
        content={[
          // { label: 'Cancel', onClick: handleClose },
          // { label: 'Confirm', onClick: handleConfirm, color: 'primary' },
          {
            label: 'Current Password',
            placeholder: 'Enter your current password',
          },
          {
            label: 'New Password',
            placeholder: 'Enter your new password',
          },
          {
            label: 'New Confirm Password',
            placeholder: 'New Confirm password',
          },
        ]}
        actions={[
          {
            label: 'Update',
            onClick: handleClose,
            backgroundColor: 'white',
            color: 'black',
          },
        ]}
      >
        Change Password
      </InputDialog>
    </>
  );
};

export default ChangePassword;
