import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './styles/dropzone.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { RiImageAddLine } from 'react-icons/ri';
import { Typography } from '@mui/material';

const MrDropzone = ({
  onDrop,
  files,
  onRemoveThumbnail,
  imgIcon,
  uploadMetadata,
}) => {
  console.log('files', files);
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop,
    accept: {
      ...uploadMetadata?.mimeType,
    },
    multiple: false,
  });
  const styles = {
    dropzone: {
      ...(!files?.src ? { padding: '20px' } : { padding: '10px' }),
    },
  };

  return (
    <div
      style={styles.dropzone}
      className='relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md'
    >
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
          rx='10'
          ry='10'
        />
      </svg>
      <div className='relative z-10 w-full h-full flex justify-center items-center'>
        {files?.src ? (
          <>
            <img src={files?.src} className='drop-img' />
            <div className='alter-section'>
              <span onClick={() => {}}>
                <div {...getRootProps()} className='h-full'>
                  <input {...getInputProps()} />
                  <EditIcon />
                </div>
              </span>
              <span onClick={onRemoveThumbnail}>
                <DeleteIcon style={{ marginLeft: '3px' }} />
              </span>
            </div>
          </>
        ) : (
          <div
            {...getRootProps()}
            className='h-full w-full flex justify-center items-center'
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here...</p>
            ) : (
              <div className='flex flex-col items-center justify-center h-full'>
                {imgIcon}
                <p>
                  <Typography variant='thumbnailContentPlaceholder'>
                    {uploadMetadata?.title}
                  </Typography>
                </p>
                <Typography variant='thumbnailContentPlaceholder'>
                  {uploadMetadata?.description}
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MrDropzone;
