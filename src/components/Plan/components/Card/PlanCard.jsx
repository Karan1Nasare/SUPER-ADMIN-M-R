import { Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegEdit } from 'react-icons/fa';
import { FiTrash2 } from 'react-icons/fi';

import ConfirmDelete from '../../../ui/Dialog/ConfirmDelete';
import EditPlan from '../../../shared/Dialog/Plan/editDialog';
import usePlan from '../../hooks/usePlan';

function PlanCard({ planData, children, showAddEditBtn = true, onDelete }) {
  console.log('🚀 ~ PlanCard ~ plan:', planData);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const editHandler = row => {
    setOpenEdit(true);
    setSelectedData(row);
  };
  const deleteHandler = row => {
    setOpenDelete(true);
    setSelectedData(row);
  };

  const confirmDeleteHandler = () => {
    if (selectedData) {
      onDelete(selectedData.id);
    }
    setOpenDelete(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const updateHandler = () => {
    setOpenEdit(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <>
      <ToastContainer />
      <Card className='border-bright__grey' sx={{ width: '100%' }}>
        <CardContent className='bg-secondary__fill'>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant='h5' className='text-white'>
              {planData?.data?.plan?.name}
            </Typography>
            {showAddEditBtn && (
              <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={2}
              >
                <FaRegEdit
                  className='text-white cursor-pointer'
                  onClick={() => editHandler(planData?.data?.plan)}
                />
                <FiTrash2
                  className='text-red-600 cursor-pointer'
                  onClick={() => deleteHandler(planData?.data?.plan)}
                />
              </Stack>
            )}
          </Stack>
          <Stack sx={{ margin: '20px 5px' }}>
            <img
              src={planData?.data?.badge}
              width={90}
              height={90}
              alt={`${planData?.data?.plan?.name} image`}
            />
          </Stack>
          <p className='text-primary font-bold text-left m-2'>
            {planData?.data?.plan?.price_rate}
          </p>
          <Stack textAlign={'left'}>
            <ul className='text-white'>
              {planData?.data?.features?.map((feature, index) => (
                <li
                  className='m-2 text-sm font-[Helvetica] text-[#BDBDBD]'
                  key={index}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </Stack>
          {children}
        </CardContent>
      </Card>
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Plan ?'}
        title={'Delete Plan'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
      {openEdit && selectedData && (
        <EditPlan
          open={openEdit}
          handleClose={handleCloseEdit}
          data={selectedData}
          updateHandler={updateHandler}
        />
      )}
    </>
  );
}

export default PlanCard;
