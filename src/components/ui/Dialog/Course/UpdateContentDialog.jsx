/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Box, Stack, styled } from '@mui/system';
import { Divider, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Editor } from 'react-draft-wysiwyg';
import colors from '../../../../theme/colors';
import ProfileImage from '../../../../assets/images/4eb39004e72f380d1bde560b735bfe93.png';
import TextEditor from '../../TextEditor/TextEditor';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const ImgStyled = styled('img')(({ theme }) => ({
  width: 100,
  height: 100,
  marginRight: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
}));

export default function CourseDialog() {
  const [open, setOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState(ProfileImage);
  const theme = useTheme();
  const [inputValue, setInputValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputImageChange = file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);

      if (reader.result !== null) {
        setInputValue(reader.result);
      }
    }
  };

  return (
    <React.Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        Course dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogContent>
          <Stack>
            <Typography sx={{ color: 'white' }}>
              Edit Course Name [STD]
            </Typography>
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
              sx={{
                position: 'relative',
                width: 'max-content',
              }}
            >
              <ImgStyled src={imgSrc} alt='Profile Pic' />

              <IconButton
                component='label'
                role={undefined}
                variant='contained'
                tabIndex={-1}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: ' 42%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  height: '100%',
                  borderRadius: '0%',
                  color: 'rgba(255, 255, 255, 0.4)',
                }}
              >
                <AddPhotoAlternateIcon />
                <Typography>Choose</Typography>
                <input
                  hidden
                  type='file'
                  value={inputValue}
                  accept='image/png, image/jpeg'
                  onChange={handleInputImageChange}
                  id='account-settings-upload-image'
                />
              </IconButton>
            </Stack>
            <Stack alignItems={'center'} justifyContent={'center'} spacing={3}>
              <TextField
                size='small'
                fullWidth
                sx={{
                  border: '1px solid #343B4F',
                }}
              />
              <TextEditor />
              <Button
                sx={{
                  background: 'white',
                  display: 'inline-block',
                  color: '#000',
                  fontWeight: 'normal',
                }}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
