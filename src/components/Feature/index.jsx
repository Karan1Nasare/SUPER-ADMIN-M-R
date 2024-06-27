import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import FeatureHeader from './components/FeatureHeader';
import FeatureCard from '../shared/FeatureCard';
import useFeatures from './hooks/useFeatures';
import Pagination from '../shared/Pagination';
import Loader from '../shared/Loader';

const Feature = () => {
  const {
    data,
    isPreviewOpen,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems,
    currentPage,
    ITEMS_PER_PAGE,
    loading,
    featureDataById,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    openPreviewDialog,
    closePreviewDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
  } = useFeatures();

  let content;

  if (loading) {
    content = <Loader />;
  } else if (data?.length > 0) {
    content = (
      <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1'>
        {data &&
          data?.map((feature, index) => (
            <FeatureCard
              key={index}
              data={feature}
              isPreviewOpen={isPreviewOpen}
              isEditOpen={isEditOpen}
              openDelete={openDelete}
              featureDataById={featureDataById}
              openEditDialog={openEditDialog}
              closeEditDialog={closeEditDialog}
              openPreviewDialog={openPreviewDialog}
              closePreviewDialog={closePreviewDialog}
              confirmDeleteHandler={confirmDeleteHandler}
              handleCloseDelete={handleCloseDelete}
              openDeleteDialog={openDeleteDialog}
            />
          ))}
      </div>
    );
  } else {
    content = <p className='text-white'>No records found.</p>;
  }

  return (
    <>
      <div className='h-full flex flex-col'>
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Features
        </Typography>
        <FeatureHeader value={searchTerm} onChange={handleSearchChange} />
        <div className='flex-1 '>{content}</div>
        <Pagination
          totalCards={searchTerm ? data.length : totalShowItems}
          cardsPerPage={ITEMS_PER_PAGE}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default Feature;
