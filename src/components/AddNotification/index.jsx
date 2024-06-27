import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import back from '../Icon/back.svg';
import Header from './components/header';
import AddNotificationForm from './components/addNotificationForm';
import useAddNotification from './hooks/useAddNotification';

const AddNotification = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit } = methods;

  const {
    newNotification,
    selectedFile,
    setSelectedFile,
    onAddNotification,
    data,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    selectAllAdmin,
    openAdminDialog,
    closeAdminDialog,
    handleSearchClick,
    handleSearchInputChange,
    selectedAdminData,
  } = useAddNotification();

  const [selectedAdminIds, setSelectedAdminIds] = useState([]);

  const onSubmit = formData => {
    const combinedData = {
      ...formData,
      user_ids: selectedAdminIds,
    };

    const Data = new FormData();
    Data.append('image', selectedFile);

    Object.keys(combinedData).forEach(key => {
      if (Array.isArray(combinedData[key])) {
        combinedData[key].forEach((value, index) => {
          Data.append(`${key}[${index}]`, value);
        });
      } else {
        Data.append(key, combinedData[key]);
      }
    });
    onAddNotification(Data);
  };

  const handleBackClick = () => {
    navigate('/notification');
  };

  return (
    <FormProvider {...methods}>
      <div className='flex flex-col space-y-8'>
        <div className='flex justify-between'>
          <h1 className='text-white text-3xl text-left'>Notification</h1>
          <div onClick={handleBackClick} className='flex mr-1 '>
            <img
              src={back}
              alt=''
              className='text-white mt-[4%] w-8 h-8 mr-1'
            />
            <button className='text-white text-2xl'>Back</button>
          </div>
        </div>
        <Header
          data={data}
          isEditOpen={isEditOpen}
          hasCheckedAdmins={hasCheckedAdmins}
          searchInputValue={searchInputValue}
          selectAllAdmin={selectAllAdmin}
          openAdminDialog={openAdminDialog}
          closeAdminDialog={closeAdminDialog}
          handleSearchClick={handleSearchClick}
          handleSearchInputChange={handleSearchInputChange}
          adminData={selectedAdminData}
          selectedAdminIds={selectedAdminIds}
          setSelectedAdminIds={setSelectedAdminIds}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <AddNotificationForm
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
          <button className='flex items-center gap-2.5 px-4 py-2.5 mt-8 float-right text-base text-center bg-white rounded-lg text-secondary__fill'>
            <Icon icon='fluent:add-circle-20-regular' />
            <span className='my-auto'>Add Notification</span>
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default AddNotification;
