import { Icon } from '@iconify/react/dist/iconify';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
} from '@mui/material';
import { Box, borderRadius } from '@mui/system';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Announcementbg from '../../../assets/plan/Announcementbg.png';
import TextField from '../../../shared/input/TextField';
import Button from '../../../shared/buttons/Button';
import colors from '../../../../theme/colors';

function Announcement() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });
  const thumbs = files.map(file => (
    <div key={file.name} className='w-full h-full overflow-clip rounded-[10px]'>
      <div className='w-full'>
        <img
          src={file.preview}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          bgcolor: 'secondary.main',
          width: '647px',
          //   height: '578px',
          borderRadius: '20px',
          p: '20px',
          pb: '0px',
        }}
      >
        <CardHeader
          sx={{ textAlign: 'left', color: 'white', fontSize: '20px', p: 0 }}
          title='Edit Announcement'
          action={
            <IconButton aria-label='close'>
              <Icon
                icon='material-symbols:close'
                width={24}
                height={24}
                color='white'
              />
            </IconButton>
          }
        />
        <Divider sx={{ bgcolor: 'custome.grey__light' }} />
        <CardContent sx={{ color: 'white', p: 0, pb: 0 }}>
          <Box sx={{ mt: '40px', position: 'relative' }} {...getRootProps()}>
            <img src={Announcementbg} alt='error' className='' />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                cursor: 'pointer',
                zIndex: 10,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  zIndex: 11,
                }}
              >
                <Icon
                  icon='fluent:image-add-20-regular'
                  color='white'
                  fontSize={30}
                />
                Change
              </Box>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
              }}
            >
              {thumbs}
            </Box>
            <input {...getInputProps()} className=' border border-red-800' />
          </Box>
          <Box sx={{ mt: '20px' }}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  label='Enter Plan'
                  variant='outlined'
                  defaultValue='Enter Plan'
                  fullWidth
                  bgcolor='white'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Title'
                  variant='outlined'
                  defaultValue='Aklavya'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  label='Description'
                  variant='outlined'
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Rate (Amount)'
                  variant='outlined'
                  defaultValue='Enter Rate'
                  fullWidth
                  bgcolor='white'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Total Amount'
                  variant='outlined'
                  defaultValue='Enter Total Amount'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='GST'
                  variant='outlined'
                  defaultValue='Enter GST'
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{
                    bgcolor: 'white',
                    width: '108px ',
                    py: '10px',
                    borderRadius: '8px',
                  }}
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Announcement;
