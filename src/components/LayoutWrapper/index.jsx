/* eslint-disable import/no-cycle */
import React from 'react';
import Header from '../shared/Header/header';
import SideBar from '../shared/SideBar/sidebar';
import LottieBackground from '../LottieBackground'; // Adjust the path as necessary

const LayoutWrapper = ({ children }) => {
  return (
    <div className='relative h-screen overflow-hidden'>
      {/* Static Background Images */}
      <div className='absolute inset-0 bg-blue bg-[url(/public/gradientBg.svg),_url(/public/vectorGrid.svg)] bg-cover z-[-2]'></div>
      {/* Lottie Animation Background */}
      <LottieBackground />
      {/* Main Content */}
      <Header />
      <aside
        id='default-sidebar'
        className='fixed z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-x-hidden'
        aria-label='Sidebar'
      >
        <div className='px-6.25 py-4 overflow-y-auto'>
          <SideBar />
        </div>
      </aside>
      <div
        className='p-4 sm:ml-64 overflow-y-auto'
        style={{
          flex: 1,
          overflowY: 'auto',
          marginTop: 2,
          paddingBottom: '50px',
          height: 'calc(100vh - 96px)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutWrapper;
