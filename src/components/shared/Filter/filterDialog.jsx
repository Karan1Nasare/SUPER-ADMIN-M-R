import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Divider,
  Slide,
} from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import SelectMultipleOptions from './selectMultipleOptions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const FilterDialog = ({ open, content, onClose, title, actions }) => {
  console.log('conntent', content);
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
            width: '100%',
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
          <SelectMultipleOptions
            filterOptions={content?.filterOptions || []}
            title='Standard'
          />
        </DialogContent>

        <DialogActions>
          {actions.map((action, index) => (
            <Button
              key={index}
              onClick={action.onClick}
              variant='contained'
              style={{ marginLeft: index !== 0 ? '8px' : '0' }}
              sx={{
                backgroundColor: action.backgroundColor,
                color: action.color,
                borderColor: action.borderColor || '#343B4F',
                marginRight: '8px',
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
};

export default FilterDialog;
