import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Icon } from '@iconify/react/dist/iconify';
import dayjs from 'dayjs';

import ConfirmDelete from '../../../ui/Dialog/ConfirmDelete';
import EditDialogCard from '../../../ui/Dialog/Notification/editDialog';

function Image({ src, alt }) {
  return (
    <img loading='lazy' src={src} alt={alt} className='w-[37px] h-[37px]' />
  );
}

function InfoItem({ label, value }) {
  return (
    <div className='mt-1.5 text-xs text-orange__primary capitalize'>
      {label} : {value}
    </div>
  );
}

function Description({ children }) {
  return (
    <div className='mt-6 text-xs leading-4 text-gray-400 max-md:max-w-full text-left'>
      {children}
    </div>
  );
}

function NotificationCard({
  data,
  isEditOpen,
  openDelete,
  openEditDialog,
  closeEditDialog,
  confirmDeleteHandler,
  handleCloseDelete,
  openDeleteDialog,
  handleUpdateNotification,
}) {
  const [selectedData, setSelectedData] = useState(null);
  const dateTime = dayjs(data?.created_at);
  const formattedDateTime = dateTime.format('YYYY-MM-DD');
  const timeWithAMPM = dateTime.format('hh:mm:ss A');

  const editHandler = row => {
    openEditDialog();
    setSelectedData(row);
  };

  const deleteHandler = row => {
    openDeleteDialog();
    setSelectedData(row);
  };

  return (
    <section className='flex flex-col p-8 rounded-lg border border-gray-700 border-solid bg-secondary__fill  max-md:px-5'>
      <header className='flex gap-3 justify-between w-full max-md:flex-wrap max-md:max-w-full'>
        <div className='flex gap-3 justify-center'>
          <Image
            src={`${data?.image?.url || 'https://cdn.builder.io/api/v1/image/assets/TEMP/075c13b2da664ca5633519aac1c19411aa4d8cff7b28bc5cae6ebdbb9f417557?apiKey=33d350ef18e9405bbdd3cdc1375c0c2b&'}`}
            alt='Exam schedule icon'
          />
          <div className='flex flex-col'>
            <h1 className='text-base text-white flex'>{data?.title}</h1>
            <div className='flex'>
              <InfoItem label='Date' value={formattedDateTime} />
              &nbsp;
              <InfoItem label='Time' value={timeWithAMPM} />
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-end gap-2.5 ml-auto'>
          <Icon
            icon={'lucide:edit'}
            className='text-white'
            onClick={() => editHandler(data)}
          />
          <Icon
            icon={'material-symbols:delete'}
            color='red'
            onClick={() => deleteHandler(data)}
            className='cursor-pointer'
          />
        </div>
      </header>
      <Description>
        Description :<br />
        <br />
        {parse(data?.description)}
        {/* {data?.description} */}
      </Description>
      {selectedData?.id && (
        <ConfirmDelete
          fullMessage='Are you sure you want to Delete Notification?'
          title='Delete Notification'
          handleClose={handleCloseDelete}
          open={openDelete}
          deleteHandler={() => confirmDeleteHandler(selectedData?.id)}
        />
      )}

      {isEditOpen && selectedData && (
        <EditDialogCard
          updateData={selectedData}
          isOpen={isEditOpen}
          onClose={closeEditDialog}
          heading='Edit Notifications'
          handleUpdateNotification={handleUpdateNotification}
        />
      )}
    </section>
  );
}

export default NotificationCard;
