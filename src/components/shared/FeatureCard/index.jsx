import React, { useState } from 'react';
import { IoEye } from 'react-icons/io5';
import parse from 'html-react-parser';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Checkbox } from '@mui/material';
import { Icon } from '@iconify/react/dist/iconify';
import defaultImg from '../../../assets/announcement_card.png';
import PreviewDialog from '../Dialog/previewDialog';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import EditFeatureCard from '../Dialog/FeatureDialog/editDialog';

const FeatureCard = ({
  data,
  isPreviewOpen,
  isEditOpen,
  openDelete,
  openEditDialog,
  closeEditDialog,
  openPreviewDialog,
  closePreviewDialog,
  confirmDeleteHandler,
  handleCloseDelete,
  openDeleteDialog,
  adminPage,
}) => {
  const { id, image, name, description, gst } = data;
  const [selectedData, setSelectedData] = useState();

  const viewHandler = row => {
    openPreviewDialog();
    setSelectedData(row);
  };

  const editHandler = row => {
    openEditDialog();
    setSelectedData(row);
  };

  const deleteHandler = row => {
    openDeleteDialog();
    setSelectedData(row);
  };

  return (
    <div className='relative bg-secondary__fill h-68 w-34 mt-4 p-8 rounded-lg border border-grey__primary__light border-opacity-20'>
      <div className='h-9.37 w-21.7'>
        <img
          // src={image || defaultImg} for now default image
          src={defaultImg}
          className='w-full h-13'
          alt='Feature Image'
        />
      </div>
      <div className='flex items-center justify-between mt-4'>
        <div className='flex items-start flex-col w-full'>
          <div className='text-white font-normal text-md'>{name}</div>
          <div className='flex justify-between w-full'>
            <div className='flex items-center w-full mt-2'>
              <div className='text-grey__primary__light text-sm'>
                {adminPage?.show ? 'Total Amount:' : ''}
                {parse(description)}
              </div>
              <div className='text-xs rounded-xl border w-12 text-success border-none bg-success bg-opacity-50 px-1 py1 ml-3 font-semibold'>
                {adminPage?.show ? '20' : ''}
                {gst}
              </div>
            </div>
            <div>
              {adminPage?.show && (
                <Checkbox
                  sx={{ alignSelf: 'end' }}
                  checked={adminPage?.Ischecked}
                  onChange={() => adminPage?.onChnageCardChekbox(id)}
                  icon={
                    <Icon
                      icon='ic:round-check-box-outline-blank'
                      color='white'
                      fontSize={20}
                    />
                  }
                  checkedIcon={<Icon icon='ic:round-check-box' fontSize={20} />}
                />
              )}
            </div>
          </div>
        </div>
        {!adminPage?.show && (
          <div className='text-white flex'>
            <IoEye
              className='h-5 w-5 mr-4 cursor-pointer'
              onClick={() => viewHandler(data)}
            />
            <FaRegEdit
              className='h-5 w-5 mr-4'
              onClick={() => editHandler(data)}
            />
            <RiDeleteBin5Fill
              className='h-5 w-5 text-red-500 cursor-pointer'
              onClick={() => deleteHandler(data)}
            />
          </div>
        )}
      </div>
      {selectedData && (
        <PreviewDialog
          isOpen={isPreviewOpen}
          onClose={closePreviewDialog}
          heading='Announcement'
          data={selectedData}
        />
      )}

      {selectedData?.id && (
        <ConfirmDelete
          fullMessage={'Are you sure want to Delete Feature ?'}
          title={'Delete Feature'}
          handleClose={handleCloseDelete}
          deleteHandler={() => confirmDeleteHandler(selectedData?.id)}
          open={openDelete}
        />
      )}

      {isEditOpen && selectedData && (
        <EditFeatureCard
          isOpen={isEditOpen}
          onClose={closeEditDialog}
          heading='Edit Announcement'
          featureData={selectedData}
        />
      )}
    </div>
  );
};

export default FeatureCard;
