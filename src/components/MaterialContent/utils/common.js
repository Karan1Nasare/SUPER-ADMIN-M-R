import React from 'react';
import { videoState } from '../constant/defaultState';

const MaterialContentHelper = () => {
  const generateVideoCard = cardSize => {
    return Array(cardSize).fill(videoState);
  };
  return { generateVideoCard };
};

export default MaterialContentHelper;
