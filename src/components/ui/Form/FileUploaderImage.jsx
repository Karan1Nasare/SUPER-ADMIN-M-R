import React, { useState, Fragment, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useDropzone } from 'react-dropzone';
import {
  Backdrop,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@mui/material';

const FileUploaderImage = ({
  setFile,
  selectFile,
  removeFile,
  setRemoveSelection,
  setSelection,
  imgSrc,
  isRounded,
}) => {
  const [files, setFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(false);
  const buttonRef = useRef();
  const [selectImgSrc, setSelectedImgSrc] = useState(imgSrc);

  const handleInputImageChange = filesSelected => {
    const reader = new FileReader();
    if (filesSelected && filesSelected.length !== 0) {
      reader.onload = () => setSelectedImgSrc(reader.result);
      reader.readAsDataURL(filesSelected[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxSize: 10000000,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    onDrop: acceptedFiles => {
      const file = acceptedFiles.map(rowFile => Object.assign(rowFile));
      setFiles(file);
      handleInputImageChange(file);
      if (setFile) {
        setFile(file);
      }
      setErrorMsg('');
    },
    onDropRejected: () => {
      setErrorMsg('Image files less than 10 MB are supported.');
    },
  });

  const previewFile = file => {
    setSelectedImage(file);
    setShowImage(true);
  };

  const renderFilePreview = file => {
    if (file.type.startsWith('image')) {
      return (
        <img
          width={38}
          height={38}
          alt={file.name}
          src={file.src ? file.src : URL.createObjectURL(file)}
          onClick={e => {
            e.stopPropagation();
            previewFile(file);
          }}
        />
      );
    }
    return null;
  };

  const handleRemoveFile = () => {
    setFiles([]);
  };

  useEffect(() => {
    if (removeFile) {
      setFiles([]);
      setFile(null);
      if (setRemoveSelection) {
        setRemoveSelection(false);
      }
    }
  }, [removeFile]);

  useEffect(() => {
    if (selectFile) {
      buttonRef?.current?.click();
      if (setSelection) {
        setSelection(false);
      }
    }
  }, [selectFile]);

  const fileList = files?.map(file => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
      </div>
      <IconButton
        onClick={e => {
          e.stopPropagation();
          handleRemoveFile();
        }}
        sx={{ color: 'white' }}
      >
        <Icon icon='tabler:x' fontSize={20} />
      </IconButton>
    </ListItem>
  ));

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone w-full h-full min-h-28 p-8 relative flex justify-center items-center overflow-hidden *:
${isRounded ? 'rounded-[50%]' : 'rounded-lg'}
          `}
        ref={buttonRef}
      >
        {isRounded ? (
          <svg className='absolute top-0 left-0 w-full h-full'>
            <circle
              cx='50%'
              cy='50%'
              r='50%'
              fill='none'
              stroke='white'
              strokeDasharray='9 9'
              strokeWidth='2'
            />
          </svg>
        ) : (
          <svg className='absolute top-0 left-0 w-full h-full'>
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='none'
              stroke='white'
              strokeDasharray='9 9'
              strokeWidth='2'
              rx='6'
              ry='6'
            />
          </svg>
        )}
        <input {...getInputProps()} />
        <div className='flex  justify-center items-center'>
          <Icon
            icon='material-symbols-light:upload-file-outline'
            className='text-white'
            width={50}
          />
          {files.length === 1 && (
            <div className='absolute bottom-0 left-0 top-0 right-0 w-full h-full'>
              <img src={selectImgSrc} className='w-full h-full' />
            </div>
          )}

          {files.length > 1 && (
            <div>
              <Fragment>
                <List>{fileList}</List>
                <Backdrop
                  sx={{
                    color: '#fff',
                    zIndex: theme => theme.zIndex.drawer + 1000,
                  }}
                  open={showImage}
                  onClick={e => {
                    e.stopPropagation();
                    setShowImage(false);
                  }}
                >
                  <IconButton
                    size='small'
                    onClick={e => {
                      e.stopPropagation();
                      setShowImage(false);
                    }}
                    sx={{
                      borderRadius: 1,
                      color: 'text.primary',
                      backgroundColor: 'action.selected',
                      top: 10,
                      right: 20,
                      position: 'absolute',
                    }}
                  >
                    <Icon icon='tabler:x' fontSize='1.125rem' />
                  </IconButton>
                  {selectedImage && (
                    <img
                      width={'80%'}
                      height={'80%'}
                      alt={selectedImage.name}
                      src={
                        selectedImage.src
                          ? selectedImage.src
                          : URL.createObjectURL(selectedImage)
                      }
                    />
                  )}
                </Backdrop>
              </Fragment>
            </div>
          )}
        </div>
      </div>

      {errorMsg && (
        <Typography variant='body2' color='error.main'>
          {errorMsg}
        </Typography>
      )}
    </>
  );
};

export default FileUploaderImage;
