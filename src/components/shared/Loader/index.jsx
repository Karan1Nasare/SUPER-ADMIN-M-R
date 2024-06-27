import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='flex items-center justify-center'>
      <Oval
        height={40}
        width={40}
        color='white'
        ariaLabel='loading'
        secondaryColor='#ffffff'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
