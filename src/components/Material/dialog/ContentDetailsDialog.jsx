import {
  Button,
  CardMedia,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { CalendarToday } from '@mui/icons-material';

import DefaultImage from '../../../assets/adminProfile.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ContentDetailsDialog = props => {
  const { open, handleClose, data } = props;
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        fullWidth={true}
        maxWidth={'sm'}
      >
        <DialogContent>
          <Stack>
            <Typography sx={{ color: 'white' }}>{data?.name}</Typography>
            <IconButton
              aria-label='close'
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={{ background: '#6B7A99', margin: '8px 0' }} />
          <Stack spacing={3} sx={{ marginTop: '40px' }}>
            <Stack
              direction={'row'}
              alignContent={'center'}
              justifyContent={'center'}
              spacing={2}
            >
              <CardMedia
                component='img'
                image={data?.image || DefaultImage}
                alt='Person'
                sx={{ width: 150, height: 150, borderRadius: 2, mr: 2 }}
              />
              <Stack marginLeft={'1.25rem'}>
                <Typography
                  variant='h4'
                  className='text-start'
                  sx={{
                    marginLeft: 0,
                  }}
                >
                  {data?.name}
                </Typography>
                <Stack direction={'row'} alignItems={'center'}>
                  <CalendarToday sx={{ fontSize: 16, color: '#98A4AE' }} />
                  <p className='text-start text-[#98A4AE] text-xs my-3 mx-2'>
                    {data?.created_at || '13 May 2015'}
                  </p>
                </Stack>
                <p className='text-left text-xs'>
                  {data?.description || 'No description provided'}
                </p>
              </Stack>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default ContentDetailsDialog;
