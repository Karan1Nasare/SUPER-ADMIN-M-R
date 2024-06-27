/* eslint-disable import/no-named-as-default */
import React, { useCallback, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MrDropzone from './tools/MrDropzone';
import HeadSection from './tools/HeadSection';
import AddVideoCard from './tools/AddVideoCard/AddVideoCard';
import { videoState } from './constant/defaultState';
import MaterialContentHelper from './utils/common';
import UploadVideo from '../shared/UploadVideo/index';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: '#F6B336',
}));

const Videos = props => {
  const { setVideoFiles, videoFiles } = props;
  const theme = useTheme();
  const videoHelper = MaterialContentHelper();
  // useEffect(() => {
  //   console.log('in useEffect');
  //   setVideoFiles(videoHelper.generateVideoCard(3));
  // }, []);
  const addVideoCard = () => {
    setVideoFiles(prevValues => [
      ...prevValues,
      ...videoHelper.generateVideoCard(1),
    ]);
  };
  const onDropVideo = (acceptedFiles, idx) => {
    // Handle the files
    const filesTemp = [...videoFiles];
    filesTemp[idx] = {
      file: acceptedFiles[0],
      src: URL.createObjectURL(acceptedFiles[0]),
    };
    setVideoFiles(filesTemp);
    // setThumbnailVideo(filesTemp[1]);
    // setVideoUpload(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeadSection title={'Videos'} />
      <Grid container spacing={2}>
        {videoFiles?.map((videItem, idx) => {
          return (
            <Grid item xs={6} md={4} key={idx}>
              <Item>
                <UploadVideo
                  onDrop={onDropVideo}
                  idx={idx}
                  isUpload={false}
                  thumbnailVideo={videItem}
                />
              </Item>
            </Grid>
          );
        })}
        <Grid item xs={6} md={4}>
          <Item>
            <AddVideoCard title='Add Video' onSubmit={addVideoCard} />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Videos;
