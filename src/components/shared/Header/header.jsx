import React, { useState } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import UserAvatar from '../../../assets/user-avatar.png';

import NotificationDropDown from '../Notification/dropDown';
import HomeLogo from '../../../assets/homeLogo.png';

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleOnClick = () => {
    setDropDown(!dropDown);
  };
  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate('/profile');
  };
  return (
    <>
      <div className='flex justify-between'>
        <a href='/'>
          <img className='m-3 p-3 ml-8' src={HomeLogo} />
        </a>
        <div className='flex m-2 p-2'>
          <span className='text-white my-2 ' onClick={handleOnClick}>
            <IoIosNotifications style={{ fontSize: '1.875rem' }} />
          </span>
          <div onClick={handleUserClick} className='flex'>
            <div className='h-10 w-10 my-1 m-2 p-2 rounded-full bg-slate-500'>
              <img
                className='object-cover w-full h-full rounded-full'
                src={UserAvatar}
              />
            </div>
            <h6 className='text-white my-3 ml-2'>Hi User</h6>
          </div>
        </div>
      </div>
      {dropDown ? <NotificationDropDown /> : null}
    </>
  );
};

export default Header;
