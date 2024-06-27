import React, { useState } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { RiArrowDropDownLine } from 'react-icons/ri';
import LanguageDropDown from '../Notification/languageDropDown';

import NotificationDropDown from '../Notification/dropDown';
import HomeLogo from '../../../assets/homeLogo.png';

const OrganizationHeader = () => {
  const [dropDown, setDropDown] = useState(false);
  const [language, setLanguage] = useState(false);

  const handleOnClick = () => {
    setDropDown(!dropDown);
  };
  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <>
      <div className='flex justify-between'>
        <img className='m-3 p-3 ml-8 lg:h-24' src={HomeLogo} />
        <div className='flex p-2'>
          <h3 className='text-white mt-3'>English</h3>
          <span onClick={handleLanguage} className='text-white mt-2 mr-2 '>
            <RiArrowDropDownLine style={{ fontSize: '1.875rem ' }} />
          </span>
          <span
            className='text-white my-2 lg:mt-4 lg:mr-2 '
            onClick={handleOnClick}
          >
            <IoIosNotifications style={{ fontSize: '1.875rem ' }} />
          </span>
          <div className='flex mt-1'>
            <div className='h-10 w-10 my-1 m-2 p-2 lg:h-14 lg:w-14 rounded-full bg-slate-500'>
              <img className='' src='' />
            </div>
            <h6 className='text-white my-3 ml-2 lg:mt-4 lg:text-2xl'>
              Hi User
            </h6>
          </div>
        </div>
      </div>
      {dropDown ? <NotificationDropDown /> : null}
      {language ? <LanguageDropDown /> : null}
    </>
  );
};

export default OrganizationHeader;
