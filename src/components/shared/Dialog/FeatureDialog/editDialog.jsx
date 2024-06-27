import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
import AnnouncementImage from '../../../../assets/announcement_card.png';
import RichTextEditor from '../../RichTextEditor';
import useFeatures from '../../../Feature/hooks/useFeatures';

const EditFeatureCard = ({ isOpen, onClose, featureData }) => {
  console.log('🚀 ~ EditFeatureCard ~ featureData:', featureData);
  if (!isOpen) {
    return null;
  }

  const { EditFeature } = useFeatures();
  const [bgImage, setBgImage] = useState(AnnouncementImage);
  const [data, setData] = useState({
    name: featureData?.name || '',
    description: featureData?.description || '',
    total_amount: featureData?.total_amount || '',
    image: null,
    _method: 'PUT',
  });

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result);
      };
      reader.readAsDataURL(file);
      setData(prevState => ({ ...prevState, image: file }));
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const id = featureData?.id;
      console.log('🚀 ~ handleSubmit ~ id:', id);

      await EditFeature(id, formData);
      onClose();
    } catch (error) {
      console.error('Error editing feature:', error);
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-20 text-start'>
      <div className='flex flex-col px-8 py-7 rounded-3xl border border-gray-700 border-solid text-start bg-secondary__fill w-42.6 max-md:px-5'>
        <div className='flex gap-5 text-xl text-white max-md:flex-wrap max-md:max-w-full'>
          <div className='flex-auto my-auto '>Edit Announcement</div>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: 'white',
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className='shrink-0 items-center h-px border border-solid bg-slate-500 border-slate-500 max-md:max-w-full' />
        <div className='flex overflow-hidden relative rounded flex-col justify-center items-center px-20 pt-11 pb-20 mt-11 text-base text-center text-white whitespace-nowrap min-h-[158px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
          <div className='absolute inset-0 flex items-center justify-center'>
            <img
              loading='lazy'
              src={bgImage}
              className='object-cover w-full h-full opacity-50'
            />
          </div>

          <div className='relative z-10 flex flex-col items-center justify-center'>
            <label htmlFor='fileInput' className='cursor-pointer'>
              <Icon
                icon={'uil:image-upload'}
                className='text-white text-xl mb-1'
              />
              <input
                id='fileInput'
                type='file'
                hidden
                onChange={handleFileChange}
              />
            </label>
            <span
              className='text-white text-lg cursor-pointer'
              onClick={() => document.getElementById('fileInput').click()}
            >
              Change
            </span>
          </div>
        </div>

        <div className='flex flex-wrap gap-5 content-start mt-5 text-sm '>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>Feature Name</div>
            <input
              type='text'
              name='name'
              className='w-full px-3 py-3 mt-2 rounded border border-gray-700 border-solid bg-none leading-[143%] text-ellipsis text-stone-300  focus:outline-none focus:ring-2 focus:ring-primary bg-transparent'
              placeholder='Select Feature Name'
              value={data.name}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col flex-1'>
            <div className='text-white'>Total Amount</div>
            <input
              type='text'
              name='total_amount'
              placeholder='Total Amount'
              inputMode='numeric'
              pattern='[0-9]+'
              className='justify-center bg-transparent items-start px-3 py-3 mt-2 rounded border border-gray-700 border-solid leading-[143%] text-stone-300 max-md:pr-5'
              value={data.total_amount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className='mt-5 text-sm text-white max-md:max-w-full'>
          Description
        </div>
        <div className='mt-2'>
          <RichTextEditor
            value={data.description}
            onChange={value =>
              setData(prevState => ({ ...prevState, description: value }))
            }
          />
        </div>

        <button
          onClick={handleSubmit}
          className='justify-center self-center px-7 py-3 mt-8 text-base text-center whitespace-nowrap bg-white rounded-lg text-slate-900 max-md:px-5'
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default EditFeatureCard;
