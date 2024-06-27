import React, { useState } from 'react';
import { CircularProgress, Pagination as MuiPagination } from '@mui/material';
import Header from './components/Header';
import PlanList from './components/Card/PlanList';
import usePlan from './hooks/usePlan';
import colors from '../../theme/colors';
import Pagination from '../shared/Pagination';

const Plan = () => {
  const {
    planData,
    loading,
    error,
    searchTerm,
    totalShowItems,
    totalPages,
    currentPage,
    setCurrentPage,
    ITEMS_PER_PAGE,
    deletePlan,
    setSearchTerm,
  } = usePlan();

  if (loading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-full'>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div
      className='w-full'
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '50px',
      }}
    >
      <Header value={searchTerm} onChange={setSearchTerm} />
      <PlanList planData={planData} onDelete={deletePlan} />

      <div className='flex justify-center mt-4'>
        {totalShowItems > ITEMS_PER_PAGE && (
          <Pagination
            totalCards={searchTerm ? planData?.length : totalShowItems}
            cardsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
};

export default Plan;
