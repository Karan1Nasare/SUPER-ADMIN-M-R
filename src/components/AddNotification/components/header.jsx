import React, { useEffect, useState } from 'react';
import { RHFSelect } from '../../../hooks/hook-form';
import SelectAdminDialog from './dialog/selectAdmin';
import SelectedAdminCard from './selectedAdminCard';

const Header = ({
  data,
  isEditOpen,
  searchInputValue,
  selectAllAdmin,
  openAdminDialog,
  closeAdminDialog,
  handleSearchClick,
  handleSearchInputChange,
  adminData,
  selectedAdminIds,
  setSelectedAdminIds,
}) => {
  const handleRemoveAdmin = idToRemove => {
    const updatedAdminIds = selectedAdminIds.filter(id => id !== idToRemove);
    const updatedData = data.map(admin => {
      if (admin.id === idToRemove) {
        return { ...admin, isChecked: false };
      }
      return admin;
    });
    setSelectedAdminIds(updatedAdminIds);
    // Update your data state here if needed
  };

  useEffect(() => {
    const selectedIds = data
      .filter(admin => admin.isChecked)
      .map(admin => admin.id);
    setSelectedAdminIds(selectedIds);
  }, [data]);

  const hasCheckedAdmins = selectedAdminIds.length > 0;

  return (
    <>
      {!hasCheckedAdmins ? (
        <div className='select mt-6'>
          <div className='flex justify-end'>
            {/* <div className='bg-secondary__fill w-[10%]'>
              <RHFSelect name={'adminId'} />
            </div> */}
            <button
              onClick={openAdminDialog}
              className='bg-white ml-4 w-28 rounded-md p-1 h-10 text-sm'
            >
              Select Admin
            </button>
          </div>
          <SelectAdminDialog
            data={data}
            isOpen={isEditOpen}
            searchInputValue={searchInputValue}
            onClose={closeAdminDialog}
            selectAllAdmin={selectAllAdmin}
            handleSearchClick={handleSearchClick}
            handleSearchInputChange={handleSearchInputChange}
            selectedAdminData={adminData}
          />
        </div>
      ) : (
        <div className='overflow-x-hidden w-full max-w-screen mx-auto'>
          <div className='overflow-x-scroll'>
            <div className='flex gap-4'>
              <SelectedAdminCard
                data={data.filter(admin => admin.isChecked)}
                handleRemoveAdmin={handleRemoveAdmin}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
