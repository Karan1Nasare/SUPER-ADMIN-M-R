import * as React from 'react';
import { Icon } from '@iconify/react/dist/iconify';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import UpdateContentDialog from '../../Material/dialog/UpdateContentDialog';
import ProfileImage from '../../../assets/images/profile-image.png';

function Image({ src, alt }) {
  return (
    <img loading='lazy' src={src} alt={alt} className=' w-[37px] h-[37px]' />
  );
}

function InfoItem({ label, value }) {
  return (
    <div className='mt-1.5 text-xs text-orange-400 capitalize'>
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

function NotificationCard() {
  const [openEditCard, setOpenEditcard] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handledit = () => {
    setOpenEditcard(true);
  };
  const handleCloseDelete = () => {
    setOpenEditcard(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  const updateHandler = () => {
    setOpenEdit(false);
  };
  return (
    <section className='flex flex-col p-8 rounded-lg border border-gray-700 border-solid bg-slate-900 max-w-[630px] max-md:px-5'>
      <header className='flex gap-3 justify-between w-full max-md:flex-wrap max-md:max-w-full'>
        <div className='flex gap-3 justify-center'>
          <Image
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/075c13b2da664ca5633519aac1c19411aa4d8cff7b28bc5cae6ebdbb9f417557?apiKey=33d350ef18e9405bbdd3cdc1375c0c2b&'
            alt='Exam schedule icon'
          />
          <div className='flex flex-col'>
            <h1 className='text-base text-white flex'>Exam Schedule</h1>
            <div className='flex'>
              <InfoItem label='Date' value='6-5-2024' />
              <InfoItem label='Time' value='09:45AM' />
            </div>
          </div>
        </div>
        <div className='flex gap-2.5 self-start'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/20ac1d91616eebffcc758e35d436ba6846946c60dd1a1449a6ff6f9c86da9cd3?apiKey=33d350ef18e9405bbdd3cdc1375c0c2b&'
            alt='Additional icon 1'
            className='shrink-0 w-5 aspect-square cursor-pointer'
            onClick={() => setOpenEdit(true)}
          />
          <Icon
            icon='fluent:delete-28-filled'
            color='red'
            width={24}
            onClick={handledit}
            className='cursor-pointer'
          />
        </div>
      </header>
      <Description>
        Description :<br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Description>
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Chapter ?'}
        title={'Delete Chapter'}
        handleClose={handleCloseDelete}
        open={openEditCard}
      />
      <UpdateContentDialog
        open={openEdit}
        handleClose={handleCloseEdit}
        data={{ image: ProfileImage }}
        updateHandler={updateHandler}
      />
    </section>
  );
}

export default NotificationCard;
