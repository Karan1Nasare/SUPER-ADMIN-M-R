import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FilterDialog = ({ open = true, onClose = () => {}, withstd = false }) => {
  const [selectedRole, setSelectedRole] = useState('student');
  const [selectedStandard, setSelectedStandard] = useState('std-9');

  const handleRoleSelection = value => {
    setSelectedRole(value);
  };

  const handleStandardSelection = value => {
    setSelectedStandard(value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: '#0A122A',
          borderRadius: 20,
          padding: 20,
          paddingLeft: '30px',
          width: '673px',
          height: '400px',
        },
      }}
    >
      <DialogTitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <span style={{ color: 'white' }}>Filter</span>
          <IconButton onClick={onClose} style={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 0, mt: '30px' }}>
        <div style={{ color: 'white', marginBottom: 20 }}>Select</div>
        <div style={{ marginBottom: 20, display: 'flex', gap: '10px' }}>
          <Button
            variant='contained'
            style={{
              color: selectedRole === 'student' ? 'black' : 'white',
              backgroundColor:
                selectedRole === 'student' ? 'white' : 'transparent',
              border:
                selectedRole === 'student'
                  ? '1px solid white'
                  : '1px solid white',
            }}
            onClick={() => handleRoleSelection('student')}
          >
            Student
          </Button>
          <Button
            variant='contained'
            style={{
              color: selectedRole === 'staff' ? 'black' : 'white',
              backgroundColor:
                selectedRole === 'staff' ? 'white' : 'transparent',
              border:
                selectedRole === 'staff'
                  ? '1px solid white'
                  : '1px solid white',
            }}
            onClick={() => handleRoleSelection('staff')}
          >
            Staff
          </Button>
        </div>
        {withstd && (
          <>
            <div style={{ color: 'white', marginBottom: 20 }}>Standard</div>
            <div style={{ marginBottom: 20, display: 'flex', gap: '10px' }}>
              {['std-7', 'std-8', 'std-9', 'std-10', 'std-12'].map(std => (
                <Button
                  key={std}
                  variant='contained'
                  style={{
                    color: selectedStandard === std ? 'black' : 'white',
                    backgroundColor:
                      selectedStandard === std ? 'white' : 'transparent',
                    border:
                      selectedStandard === std
                        ? '1px solid white'
                        : '1px solid white',
                  }}
                  onClick={() => handleStandardSelection(std)}
                >
                  {std.replace('std-', 'Std-')}
                </Button>
              ))}
            </div>
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant='contained'
            style={{
              marginRight: 10,
              backgroundColor: '#000000',
              color: 'white',
            }}
          >
            Reset
          </Button>
          <Button
            variant='contained'
            style={{ backgroundColor: '#F18F01', color: 'white' }}
          >
            Filter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
