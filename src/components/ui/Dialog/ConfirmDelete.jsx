import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function ConfirmDelete(props) {
  const { open, fullMessage, handleClose, deleteHandler, title } = props;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        fullWidth={true}
        maxWidth={'xs'}
      >
        <DialogTitle>
          {title}
          <IconButton
            aria-label='close'
            onClick={handleClose}
            sx={{
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            sx={{ padding: '21px 57px' }}
          >
            <Box
              sx={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#EB001B29',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem',
              }}
            >
              <DeleteForeverIcon sx={{ fontSize: '2rem', color: '#EB001B' }} />
            </Box>

            <Typography variant='h4' sx={{ textAlign: 'center' }}>
              {fullMessage}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={deleteHandler}
            sx={{
              backgroundColor: '#fff',
              color: '#EB001B',
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
