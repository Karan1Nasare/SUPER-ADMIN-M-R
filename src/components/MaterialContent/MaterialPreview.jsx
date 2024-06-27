import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PreviewAccordion from './PreviewAccordion';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
const MaterialPreview = props => {
  const {
    open,
    handleClose,
    videoFile,
    imageFile,
    questionBankFile,
    documentFile,
    threeDModel,
    thumbnailImage,
    thumbnailVideo,
    title,
    description,
  } = props;
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle sx={{ padding: '10px 0' }}>
          <Typography sx={{ color: 'white' }}>Preview</Typography>
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
        </DialogTitle>
        <DialogContent className='w-full p-0'>
          <PreviewAccordion
            videoFile={videoFile}
            imageFile={imageFile}
            questionBankFile={questionBankFile}
            documentFile={documentFile}
            threeDModel={threeDModel}
            thumbnailImage={thumbnailImage}
            thumbnailVideo={thumbnailVideo}
            title={title}
            description={description}
          />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default MaterialPreview;
