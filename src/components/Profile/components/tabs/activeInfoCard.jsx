import React from 'react';

function ActiveInfoCard({
  tital,
  CircleColor,
  bageColor,
  bageColorLight,
  count,
}) {
  return (
    <div className='flex  items-center h-full'>
      <div className={`bg-${CircleColor} w-14 h-14 rounded-full`} />
      <div className='ml-3 p-3'>
        <p className='text-grey__primary__light text-[12px]'>{tital}</p>
        <div
          className={`bg-${bageColorLight} w-[60px] mt-2 text-${bageColor} rounded-full p-1.5 bg-opacity-25   text-xs  text-center `}
        >
          {count}
        </div>
      </div>
    </div>
  );
}

export default ActiveInfoCard;
