/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { Stack, styled } from '@mui/system';
import { Divider, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@emotion/react';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ProfileImage from '../../../assets/images/profile-image.png';
import TextEditor from '../../ui/TextEditor/TextEditor';
import RichTextEditor from '../../shared/RichTextEditor';

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

export default function UpdateContentDialog(props) {
  const { open, handleClose, data, updateHandler } = props;
  console.log('🚀 ~ UpdateContentDialog ~ data:', data);
  const [imgSrc, setImgSrc] = React.useState(ProfileImage);
  const [changeData, setChangeData] = React.useState({
    name: '',
    description: '',
    image: '',
  });
  const theme = useTheme();

  React.useEffect(() => {
    if (open) {
      setImgSrc(data?.image || ProfileImage);
      setChangeData({
        name: data?.name || '',
        description: data?.description || '',
        image: data?.image || '',
        _method: 'PUT',
      });
    }
  }, [open, data]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setChangeData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputImageChange = file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => {
        setImgSrc(reader.result);
        setChangeData(prevState => ({
          ...prevState,
          image: files[0],
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleUpdate = () => {
    console.log('🚀 ~ handleUpdate ~ formData:', changeData);
    const formData = new FormData();

    Object.entries(changeData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    updateHandler(formData);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
        PaperProps={{
          sx: {
            width: '42.063rem',
            height: '36.069rem',
            borderRadius: '8px',
          },
        }}
      >
        <DialogContent>
          <Stack>
            <Typography sx={{ color: 'white' }}>Edit {data?.name}</Typography>
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
              <div className='mt-3 mr-5'>
                <CloseIcon />
              </div>
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
              <ImgStyled src={imgSrc || ProfileImage} alt='Profile Pic' />
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
                  accept='image/png, image/jpeg'
                  onChange={handleInputImageChange}
                  id='account-settings-upload-image'
                />
              </IconButton>
            </Stack>
            <Stack alignItems='center' justifyContent='center' spacing={3}>
              <TextField
                size='small'
                fullWidth
                name='name'
                value={changeData.name}
                onChange={handleInputChange}
              />
              <div className='mt-5 w-full'>
                <RichTextEditor
                  value={changeData?.description}
                  onChange={description =>
                    setChangeData(prevState => ({
                      ...prevState,
                      description,
                    }))
                  }
                />
              </div>
              <div className='mt-6'>
                <Button
                  sx={{
                    marginTop: '28px',
                    background: 'white',
                    display: 'inline-block',
                    color: '#000',
                    fontWeight: 'normal',
                    width: '8rem',
                    text: '18px',
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </Button>
              </div>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
