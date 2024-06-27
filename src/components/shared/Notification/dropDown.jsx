import React from 'react';
import locationIcon from '../../../assets/icon/locationIcon.svg';
import archivedDaraIcon from '../../../assets/icon/archivedDaraIcon.svg';
import callIcon from '../../../assets/icon/callIcon.svg';
import mailIcon from '../../../assets/icon/mailIcon.svg';

const NotificationDropDown = () => {
  const notification = [
    {
      icon: locationIcon,
      title: 'Notification',
      subTitle: 'working on',
      time: '5 mins',
    },
    {
      icon: archivedDaraIcon,
      title: 'Archived Data',
      subTitle: 'working on',
      time: '10 mins',
    },
    {
      icon: callIcon,
      title: 'Meeting with client',
      subTitle: 'pending',
      time: '15 mins',
    },
    {
      icon: archivedDaraIcon,
      title: 'Archived Data',
      subTitle: 'working on',
      time: '10 mins',
    },
    {
      icon: mailIcon,
      title: 'Send envelope to john',
      subTitle: 'done',
      time: '20 mins',
    },
  ];
  return (
    <div className='lg:p-6 rounded-md lg:ml-[62%] lg:-mt-12 ml-[55%] md:ml-[56%] lg:w-[30%] lg:h-[50%] absolute bg-secondary__fill border border-gray-700 z-10 -mt-10 text-white m-2 p-2 w-[35%] h-[58%]'>
      <div className='flex justify-between'>
        <h1 className='pl-4'>Notification</h1>
        <div className='w-24 bg-yellow-500 rounded-full '>
          <h6 className=''>New</h6>
        </div>
      </div>
      {notification.map((noti, index) => (
        <div key={index} className='flex ml-3 justify-between'>
          <div className='flex text-sm'>
            <img src={noti.icon} alt='' className='h-8 mt-5' />
            <div className='mt-2 p-2 justify-between'>
              <h1>{noti.title}</h1>
              <h6 className='text-gray-400 text-left'>{noti.subTitle}</h6>
            </div>
          </div>
          <div className='m-2 p-2 text-sm'>{noti.time}</div>
        </div>
      ))}
      <hr className='mt-4 w-full border-gray-700' />
      <div className='flex justify-center'>
        <div className='  bg-yellow-500 h-8 w-56 mt-5 lg:mt-8 rounded-md'>
          <h6 className='text-sm pt-1 '>See All Notification</h6>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropDown;
