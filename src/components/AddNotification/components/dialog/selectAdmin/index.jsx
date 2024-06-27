import React, { useState, useEffect } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoCloseOutline } from 'react-icons/io5';
import SelectAdminCard from './selectAdminCard';

const SelectAdminDialog = ({
  isOpen,
  onClose,
  data,
  searchInputValue,
  handleSearchInputChange,
  handleSearchClick,
  selectedAdminData,
}) => {
  const [updatedAdminData, setUpdatedAdminData] = useState([]);

  useEffect(() => {
    setUpdatedAdminData(data);
  }, [data]);

  const toggleChecked = (index, isChecked) => {
    if (index < 0 || index >= updatedAdminData.length) {
      return;
    }

    const updatedData = updatedAdminData.map((admin, idx) => {
      if (idx === index) {
        return {
          ...admin,
          isChecked,
        };
      }

      if (isChecked && admin.isChecked && idx !== index) {
        // Keep the isChecked state unchanged for other items
        return admin;
      }

      return admin;
    });

    console.log('🚀 ~ toggleChecked ~ updatedData:', updatedData);
    setUpdatedAdminData(updatedData);
  };

  const selectAllAdmin = () => {
    const updatedData = updatedAdminData.map(admin => ({
      ...admin,
      isChecked: true,
    }));

    console.log('🚀 ~ selectAllAdmin ~ updatedData:', updatedData);

    setUpdatedAdminData(updatedData);
  };

  const onSave = () => {
    selectedAdminData(updatedAdminData);
    onClose();
  };

  const selectedCount = updatedAdminData.filter(
    admin => admin.isChecked,
  ).length;

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-70 text-start'>
      <div className='absolute rounded-lg bg-secondary__fill h-4/5 overflow-x-hidden p-4 w-[50%]'>
        <div className='flex justify-between text-white'>
          <h1 className='text-xl my-3 '>Select Admin</h1>
          <span onClick={onClose} className='pr-3 mt-3'>
            <IoCloseOutline style={{ fontSize: '2rem' }} />
          </span>
        </div>
        <div className='mt-3 overflow-y-scroll'>
          <div className='bg-secondary__fill rounded-md border border-gray-700 p-4 h-24 flex mr-2 w-[98.7%]'>
            <div className='flex overflow-x-hidden '>
              <input
                key={7}
                onChange={handleSearchInputChange}
                value={searchInputValue}
                className='p-2 rounded-sm text-white w-80 mt-4 opacity-45 h-8 bg-blue'
                type='text'
                placeholder='Search Name, Enrollment, Standard'
              />
              <span
                onClick={handleSearchClick}
                className='p-2 pl-2 mt-4 bg-opacity-45 rounded-sm text-white m-2 h-8 w-10 bg-blue'
              >
                <MdOutlineSegment />
              </span>
            </div>
            <div className='mt-4 flex'>
              <div
                onClick={selectAllAdmin}
                className='flex text-sm p-1 text-white border mr-10 pl-3 border-gray-700 border-solid bg-secondary__fill h-8 w-24 rounded-md'
              >
                <button>Select All</button>
              </div>
              <h1 className='text-white mr-10 mt-1 text-sm'>
                {selectedCount} Selected
              </h1>
              <div
                onClick={onSave}
                className='flex p-1 text-sm bg-white pl-3 h-8 w-16 rounded-md'
              >
                <button>Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap w-[125%] gap-4 mt-3'>
          <SelectAdminCard
            data={updatedAdminData}
            toggleChecked={toggleChecked}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectAdminDialog;
