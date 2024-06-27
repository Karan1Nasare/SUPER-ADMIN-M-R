import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@iconify/react';

const DropDown = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        dropdownMenuRef.current &&
        !dropdownMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  useEffect(() => {
    if (isOpen && dropdownMenuRef.current && dropdownRef.current) {
      const { top, left, width, height } =
        dropdownRef.current.getBoundingClientRect();
      dropdownMenuRef.current.style.top = `${top + height}px`;
      dropdownMenuRef.current.style.left = `${left}px`;
      dropdownMenuRef.current.style.width = `${width}px`;
    }
  }, [isOpen]);
  return (
    <div ref={dropdownRef} className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full h-11 text-left border border-gray-800 text-white rounded-md text-sm  flex items-center justify-between px-4'
      >
        <span className='truncate'>{selectedOption}</span>
        <Icon icon={'formkit:down'} className='text-white ml-2' width={20} />
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <div
            ref={dropdownMenuRef}
            className='absolute bg-blue border text-white border-gray-800 rounded-md z-50'
          >
            {options.map(option => (
              <div
                key={option}
                onClick={() => {
                  setSelectedOption(option);
                  setIsOpen(false);
                }}
                className='px-4 py-2 cursor-pointer text-sm md:text-base lg:text-lg'
              >
                {option}
              </div>
            ))}
          </div>,
          document.body,
        )}
    </div>
  );
};
export default DropDown;
