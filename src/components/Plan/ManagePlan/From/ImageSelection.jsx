import React, { useState } from 'react';
import { RiImageAddFill } from 'react-icons/ri';
import { FiTrash2 } from 'react-icons/fi';
import FileUploaderImage from '../../../ui/Form/FileUploaderImage';
import back from '../../../Icon/back.svg';

const ImageSelection = ({ file, setFile, selectFile, setSelectFile }) => {
  const [removeFile, setRemoveSelection] = useState(false);

  const handleSelectFile = () => {
    setSelectFile(true);
  };

  const handleRemoveFile = () => {
    setFile(null); // Reset file state when removing
    setRemoveSelection(true);
  };

  return (
    <div className='text-sm w-full font-medium text-center bg-[#0B1739] text-gray-500 border border-dropdown__border p-7 rounded-md flex items-center justify-between'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <FileUploaderImage
            setFile={setFile}
            selectFile={selectFile}
            removeFile={removeFile}
            setRemoveSelection={setRemoveSelection}
            setSelectFile={setSelectFile}
          />
          <div className='ml-4'>
            <p className='text-lg text-white text-left'>
              Upload Your Plan Image
            </p>
            <p className='text-sm font-normal text-[#98A4AE]'>
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <button
            onClick={handleSelectFile}
            className='btn flex flex-row justify-center items-center gap-2 bg-white mr-2'
          >
            <RiImageAddFill />
            Choose File
          </button>
          <button
            onClick={handleRemoveFile}
            className='btn bg-[rgba(255,102,146,0.2)] flex flex-row justify-center items-center gap-2 text-red-900'
          >
            <FiTrash2 className='text-red-600 cursor-pointer' />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSelection;
