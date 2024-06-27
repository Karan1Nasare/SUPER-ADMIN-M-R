/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useDropzone } from 'react-dropzone';
import ReactPlayer from 'react-player/file';
import './styles.css';
import { FaPlay } from 'react-icons/fa';
import { Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UploadVideo = ({ onDrop, isUpload, thumbnailVideo, idx }) => {
  const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
    onDrop: acceptedFiles => onDrop(acceptedFiles, idx),
    accept: {
      'video/*': ['.mp4', '.mpeg'],
    },
    multiple: false,
  });

  console.log('thumbnailVideo', thumbnailVideo);

  return (
    <div className='relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md'>
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
      <div className='relative z-10 w-full h-full flex justify-center items-center'>
        {isUpload || thumbnailVideo?.src ? (
          <>
            <ReactPlayer
              url={thumbnailVideo?.src}
              playing={true}
              controls={true}
              width='100%'
              height='100%'
            />
            <div className='alter-section'>
              <span onClick={() => {}}>
                <div {...getRootProps()} className='h-full'>
                  <input {...getInputProps()} />
                  <EditIcon />
                </div>
              </span>
              <span onClick={() => {}}>
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
                <FaPlay size={30} style={{ marginBottom: '20px' }} />
                <p>
                  <Typography variant='thumbnailContentPlaceholder'>
                    Upload Thumbnail Video
                  </Typography>
                </p>
                <Typography variant='thumbnailContentPlaceholder'>
                  Max File Size 50 MB
                </Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadVideo;
