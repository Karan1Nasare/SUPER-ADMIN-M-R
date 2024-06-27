import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import ProfileImage from '../../../../assets/profile.svg';
import ProfileDetailInfo from '../tabs/profileDetailInfo';

const ChangeProfileIamge = ({ profileData, setIsChangeProfile }) => {
  console.log('🚀 ~ ChangeProfileIamge ~ profileData:', profileData);
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };
  const handleDeleteClick = () => {
    setIsDeleteOpen(true);
  };
  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
  };
  const confirmDeleteHandler = () => {
    setIsDeleteOpen(false);
  };

  return (
    <>
      <div className='bg-darkBlue p-6 mt-5 rounded-lg shadow-lg flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='flex items-center justify-center'>
            <div className='w-32 h-32 rounded-full overflow-hidden'>
              <img
                // src={profileData?.image[0]?.url || ProfileImage}
                src={ProfileImage}
                alt='Circular'
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          <div className='ml-4 text-start'>
            <p className='text-white text-lg'>Upload Your Banner</p>
            <p className='text-gray-400 text-sm'>
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
        <div className='flex items-center'>
          <label
            className='flex items-center h-12 px-4 py-2 bg-white text-black rounded cursor-pointer hover:bg-gray-200 transition-colors duration-200 mr-2'
            onClick={() => {
              setIsChangeProfile(true);
            }}
          >
            <UploadFileIcon className='mr-2 text-xl' />
            Change
          </label>

          <button
            onClick={handleDeleteClick}
            className='flex items-center h-12 px-4 py-2 bg-delete text-delete bg-opacity-20 rounded  transition-colors duration-200 mr-2'
          >
            <DeleteIcon className='mr-2 text-xl' />
            Remove
          </button>
        </div>
      </div>
      <ProfileDetailInfo profileData={profileData} />
    </>
  );
};

export default ChangeProfileIamge;
