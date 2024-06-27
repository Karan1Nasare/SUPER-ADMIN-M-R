import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  Typography,
  Box,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteDialog = ({ open, onClose, onDelete, courseName }) => {
  return (
    <Dialog
      open={open || false}
      PaperProps={{
        style: {
          backgroundColor: '#0A1931',
          color: 'white',
          borderRadius: '10px',
        },
      }}
    >
      <DialogTitle>
        Delete {courseName} [STD]
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white',
          }}
        >
          <CloseIcon />
        </IconButton>
        <Divider className='  bg-slate-300' sx={{ width: '100%', my: 4 }} />
      </DialogTitle>
      <DialogContent dividers>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          mb={2}
        >
          <Box
            sx={{
              width: 70,
              height: 70,
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <DeleteIcon sx={{ fontSize: 30, color: '#F00' }} />
          </Box>
          <Typography variant='h6' gutterBottom>
            Are you sure you want to delete {courseName} [STD]?
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box display='flex' justifyContent='center' width='100%' mb={2}>
          <Button
            onClick={onDelete}
            variant='contained'
            color='error'
            sx={{ backgroundColor: '#fff', color: '#F00' }}
          >
            Delete
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

// ParentComponent.js

const CustomeDialog = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleDelete = () => {
    // Add your delete logic here
    console.log('Course deleted');
    handleCloseDialog();
  };

  return (
    <div>
      <button onClick={handleOpenDialog}>Open Dialog</button>
      <DeleteDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onDelete={handleDelete}
        courseName='Course Name'
      />
    </div>
  );
};

export default CustomeDialog;
