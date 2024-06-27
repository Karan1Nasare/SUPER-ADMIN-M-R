import React, { useState } from 'react';
import useNotification from './hooks/useNotification';
import NotificationCard from './components/NotificationCard';
import NotificationSearch from './components/Header/searchHeader';
import Pagination from '../shared/Pagination';
import Loader from '../shared/Loader';

const NotificationView = () => {
  const {
    data,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems,
    totalPages,
    currentPage,
    ITEMS_PER_PAGE,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    handleAddNotification,
    handleUpdateNotification,
    loading,
  } = useNotification();

  let content;

  if (loading) {
    content = <Loader />;
  } else if (data?.length > 0) {
    content = (
      <div className='grid lg:grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 w-full'>
        {data.map((notification, index) => (
          <NotificationCard
            key={index}
            data={notification}
            isEditOpen={isEditOpen}
            openDelete={openDelete}
            openEditDialog={openEditDialog}
            closeEditDialog={closeEditDialog}
            confirmDeleteHandler={confirmDeleteHandler}
            handleCloseDelete={handleCloseDelete}
            openDeleteDialog={openDeleteDialog}
            handleUpdateNotification={handleUpdateNotification}
          />
        ))}
      </div>
    );
  } else {
    content = <p className='text-white'>No records found.</p>;
  }

  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
        padding: 2,
      }}
    >
      <div className='w-max mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Notification
        </h2>
      </div>
      <NotificationSearch
        value={searchTerm}
        onChange={handleSearchChange}
        handleAddNotification={handleAddNotification}
      />
      <div className='flex-1 mt-4'>{content}</div>
      {totalShowItems > ITEMS_PER_PAGE && (
        <Pagination
          totalCards={searchTerm ? data.length : totalShowItems}
          cardsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NotificationView;
