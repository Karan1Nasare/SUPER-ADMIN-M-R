import React from 'react';
import totalOrganizationsIcon from '../../assets/icon/totalOrganizationsIcon.svg';
import totalActiveStudentsIcon from '../../assets/icon/totalActiveStudentsIcon.svg';
import totalStaffIcon from '../../assets/icon/totalStaffIcon.svg';
import totalContentsIcon from '../../assets/icon/totalContentsIcon.svg';

const AdminCards = () => {
  const card = [
    {
      icon: totalOrganizationsIcon,
      title: 'Total Organizations',
      count: '245',
      color: 'blue',
    },
    {
      icon: totalStaffIcon,
      title: 'Total Contents',
      count: '1834',
      color: 'blue',
    },
    {
      icon: totalContentsIcon,
      title: 'Total Students',
      count: '800',
      color: 'blue',
    },
    {
      icon: totalActiveStudentsIcon,
      title: 'Total Active Students',
      count: '16,689',
      color: 'blue',
    },
  ];
  return (
    <div className='flex flex-wrap '>
      {card.map((item, index) => (
        <div
          className={`ml-4 rounded-md lg:h-40 lg:w-96 opacity-50 bg-${item.color} text-white m-2 h-32 w-72`}
          key={index}
        >
          <img
            key={index}
            className='ml-[38%] p-2 lg:ml-[40%] lg:pt-6'
            src={item.icon}
          />
          <div className='' key={index}>
            <h2 className='text-xs '>{item.title}</h2>
            <h3 className='font-bold'>{item.count}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCards;

// green
