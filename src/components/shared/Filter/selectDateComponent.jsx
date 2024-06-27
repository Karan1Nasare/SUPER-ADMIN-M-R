import React, { useState } from 'react';
import Calendar from 'react-calendar';

import './filter.css';
import CustomCalendarNavigation from './customCalendarNavigation';

const SelectDateComponent = ({ dateOptions, dateTitle }) => {
  const [hoveredOption, setHoveredOption] = useState(-1);

  const handleOptionHover = index => {
    setHoveredOption(index);
  };

  const handleOptionLeave = () => {
    setHoveredOption(null);
  };
  return (
    <div>
      <div className='mt-8 text-start text-base text-white max-md:max-w-full'>
        {dateTitle}
      </div>
      <div className='flex gap-4 pr-9 mt-5 text-sm leading-5 text-white max-md:flex-wrap max-md:pr-5'>
        {dateOptions.map((option, index) => (
          <div
            key={index}
            className={`justify-center py-3 rounded-md border border-gray-700 border-solid ${hoveredOption === index && index !== -1 ? 'bg-white text-black' : 'bg-secondary__fill text-white'}  w-full relative`}
            onMouseEnter={() => handleOptionHover(index)}
            onMouseLeave={handleOptionLeave}
          >
            {option.label}
          </div>
        ))}
      </div>
      {hoveredOption >= 0 && (
        <div className='calendar-container mt-4 w-80'>
          <Calendar
            className='calendar'
            tileClassName='text-white text-center'
            navigationLabel={({ date }) => {
              const month = date.toLocaleString('en-us', {
                month: 'long',
              });
              const year = date.getFullYear();
              return `${month} ${year}`;
            }}
            navigationAriaLabel='Custom calendar navigation'
            onChange={() => {}}
            value={new Date()}
            renderNavigation={props => <CustomCalendarNavigation {...props} />}
          />
        </div>
      )}
    </div>
  );
};

export default SelectDateComponent;
