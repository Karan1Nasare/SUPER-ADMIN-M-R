import React from 'react';
import { LiaFileUploadSolid } from 'react-icons/lia';
import { Icon } from '@iconify/react';

const AddSuperAdmin = () => {
  return (
    <div>
      <div className='flex flex-col justify-center p-8 rounded-xl border border-gray-700 border-solid bg-secondary__fill max-md:px-5'>
        <div className='max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-[23%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col justify-center items-center px-12 w-full rounded-3xl border border-gray-700 border-solid aspect-square bg-secondary__fill max-md:px-5 max-md:mt-8'>
                <div className='flex justify-center items-center px-16 py-16 rounded-full border border-white border-dashed max-md:px-5'>
                  <span className='text-white  aspect-square '>
                    <LiaFileUploadSolid style={{ fontSize: '3em' }} />
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow max-md:mt-8 max-md:max-w-full'>
                <div className='text-sm text-left text-white max-md:max-w-full'>
                  Title
                </div>
                <input
                  type='text'
                  placeholder=' Enter Title'
                  className='justify-center  bg-secondary__fill items-start px-3 py-3 mt-2 text-sm leading-5 rounded border border-gray-700 border-solid text-stone-300 max-md:pr-5 max-md:max-w-full'
                />
                <div className='mt-8 text-sm text-white text-left max-md:max-w-full'>
                  Description
                </div>
                <div className='flex flex-col pt-3 pr-1.5 pb-1.5 pl-3 mt-2 rounded border border-gray-700 border-solid max-md:max-w-full'>
                  <input
                    type='text'
                    placeholder='Enter Description...'
                    className='text-sm bg-secondary__fill text-stone-300 max-md:max-w-full'
                  />
                  <div className='flex gap-5 justify-between items-start mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/5745a340f3a3efc3190af78669fff73e40d1a2afcd697dfa621eec549067ffeb?'
                      className='aspect-[14.29] w-[377px]'
                    />
                    <img
                      loading='lazy'
                      src='https://cdn.builder.io/api/v1/image/assets/TEMP/c7db462cdcb3fd989f4a23e4b3dc911122d724d622d20933a268bd3ec0dbbfab?'
                      className='shrink-0 mt-5 w-3 aspect-square'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className='flex items-center gap-2.5 px-4 py-2.5 mt-8 float-right text-base text-center bg-white rounded-lg text-secondary__fill'
        // onClick={handleaddnotification}
      >
        <Icon icon='fluent:add-circle-20-regular' />
        <span className='my-auto'>Add Notification</span>
      </button>
    </div>
  );
};

export default AddSuperAdmin;
