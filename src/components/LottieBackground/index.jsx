import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationBg from '../../assets/lottieBg/BG_Animation.json';

const LottieBackground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Lottie
        animationData={animationBg}
        loop={true}
        autoplay={true}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default LottieBackground;
