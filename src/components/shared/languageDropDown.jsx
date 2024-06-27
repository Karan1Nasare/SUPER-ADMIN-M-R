import React from 'react';

const LanguageDropDown = () => {
  const language = [
    {
      name: 'English',
    },
    {
      name: 'Hindi',
    },
  ];
  return (
    <div className='absolute ml-[79%] md:ml-[81%] lg:ml-[86%] z-10 bg-primary h-24 w-24 -mt-12 text-white'>
      {language.map(item => (
        <option key={item.name}>{item.name}</option>
      ))}
    </div>
  );
};

export default LanguageDropDown;
