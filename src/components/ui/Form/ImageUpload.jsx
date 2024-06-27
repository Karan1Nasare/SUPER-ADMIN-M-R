import React from 'react';
import { Icon } from '@iconify/react';

const ImageUpload = ({ image, setFile }) => {
  const [inputValue, setInputValue] = React.useState(image);
  const [imgSrc, setImgSrc] = React.useState();
  const inputRef = React.useRef();

  const handleInputImageChange = file => {
    const reader = new FileReader();
    const { files } = file.target;
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result);
      reader.readAsDataURL(files[0]);
      if (setFile) {
        setFile(files[0]);
      }
      if (reader.result !== null) {
        setInputValue(reader.result);
      }
    }
  };

  return (
    <>
      <div
        onClick={() => inputRef.current.click()}
        className='relative flex flex-col p-4 justify-center items-center w-full md:w-[100%] md:h-[100%] rounded-3xl border border-gray-700 border-solid aspect-square bg-[#0B1739]  max-md:mt-8'
      >
        {imgSrc ? (
          <div className='w-full h-full'>
            <img src={imgSrc} className='w-full h-full' />
          </div>
        ) : (
          <div className='flex justify-center items-center w-full h-full'>
            <svg className='absolute w-44 h-44'>
              <circle
                cx='50%'
                cy='50%'
                r='50%'
                fill='none'
                stroke='white'
                strokeDasharray='9 9'
                strokeWidth='2'
              />
            </svg>
            <Icon
              icon='material-symbols-light:upload-file-outline'
              className='text-white'
              width={50}
            />
          </div>
        )}

        <input
          hidden
          ref={inputRef}
          type='file'
          value={inputValue}
          accept='image/png, image/jpeg'
          onChange={handleInputImageChange}
          id='account-settings-upload-image'
        />
      </div>
    </>
  );
};

export default ImageUpload;
