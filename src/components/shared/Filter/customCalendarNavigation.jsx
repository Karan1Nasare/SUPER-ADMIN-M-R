import React from 'react';

const CustomCalendarNavigation = ({
  date,
  label,
  nextLabel,
  prevLabel,
  setActiveStartDate,
}) => {
  const handlePrev = () =>
    setActiveStartDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  const handleNext = () =>
    setActiveStartDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));

  return (
    <div className='flex justify-between items-center p-4 text-lg font-bold text-white'>
      <button onClick={handlePrev} className='text-yellow-500 text-2xl'>
        {prevLabel || '<'}
      </button>
      <div className='text-white text-xl'>{label}</div>
      <button onClick={handleNext} className='text-yellow-500 text-2xl'>
        {nextLabel || '>'}
      </button>
    </div>
  );
};

export default CustomCalendarNavigation;
