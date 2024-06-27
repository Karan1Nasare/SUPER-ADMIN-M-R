import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Slide,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function InputDialog({ open, content, onClose, title, actions }) {
  return (
    <Box
      sx={{
        padding: '10px',
      }}
    >
      <Dialog
        PaperProps={{
          style: {
            backgroundColor: '#0B1739',
            width: '50%',
            height: 'auto',
            padding: '8px',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          },
        }}
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby='alert-dialog-slide-description'
        fullWidth={true}
        maxWidth={'xs'}
      >
        <DialogTitle
          sx={{
            marginBottom: '10px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '6px',
            }}
          >
            <Typography
              variant='h4'
              className='text-start text-white'
              sx={{
                marginLeft: 0,
              }}
            >
              {title}
            </Typography>
            <IconButton
              onClick={onClose}
              sx={{
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Divider sx={{ backgroundColor: 'white' }} />
        </DialogTitle>

        <DialogContent>
          {content.map((action, index) => (
            <>
              <div className='text-start'>
                <label className='text-white text-start mb-2 block'>
                  {action.label}
                  <span className='text-red-500'>&nbsp;*</span>
                </label>

                <TextField
                  variant='outlined'
                  placeholder={action.placeholder}
                  fullWidth
                />
              </div>
            </>
          ))}
        </DialogContent>
        <DialogActions
          style={{ justifyContent: 'flex-start', marginLeft: '1.5rem' }}
        >
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              variant='contained'
              sx={{
                backgroundColor: action.backgroundColor,
                color: action.color,
              }}
              s
            >
              {action.label}
            </Button>
          ))}
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default InputDialog;
