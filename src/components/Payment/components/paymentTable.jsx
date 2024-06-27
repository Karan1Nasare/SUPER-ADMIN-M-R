import React, { useState } from 'react';
import { Pagination } from '@mui/material';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';

import colors from '../../../theme/colors';

const PaymentTable = ({ paymentData }) => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedData = paymentData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage,
  );

  const formatDate = date => dayjs(date).format('DD-MM-YYYY');

  const calculateValidityDays = startDate => {
    const today = dayjs();
    const start = dayjs(startDate);
    return today.diff(start, 'day');
  };

  return (
    <div className='w-screen'>
      <table className='mt-6 lg:w-[77%] 2xl:w-[82%] xl:w-[80%]'>
        <thead>
          <tr className='bg-secondary__fill font-thin text-white lg:h-12'>
            <th className='mt-2'>
              Name <Icon icon='formkit:arrow-up' className='text-white' />
            </th>
            <th className='mt-2'>
              Transaction ID <Icon icon='formkit:arrow-up' />
            </th>
            <th className='mt-2'>
              Payment Type <Icon icon='formkit:arrow-up' />
            </th>
            <th className='mt-2'>
              Date <Icon icon='formkit:arrow-up' />
            </th>
            <th className='mt-2'>
              Plan Amount <Icon icon='formkit:arrow-up' />
            </th>
            <th className='mt-2'>
              Plan Validity (Days) <Icon icon='formkit:arrow-up' />
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.length === 0 ? (
            <tr>
              <td colSpan='6' className='text-center  text-white'>
                No records found
              </td>
            </tr>
          ) : (
            paginatedData?.map((data, index) => (
              <tr key={index} className='text-grey__primary__light lg:h-12'>
                <td className='2xl:mt-3 mt-2'>{data?.plans?.name || '-'}</td>
                <td className='2xl:mt-3 mt-2'>{data?.transaction_id || '-'}</td>
                <td className='2xl:mt-3 mt-2'>{data?.payment_type || '-'}</td>
                <td className='2xl:mt-3 mt-2'>
                  {formatDate(data?.created_at) || '-'}
                </td>
                <td className='2xl:mt-3 mt-2'>
                  {data?.plans?.total_amount || '-'}
                </td>
                <td className='2xl:mt-3 mt-2'>
                  {`${calculateValidityDays(data?.created_at)} Day Left` || '-'}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {paginatedData.length > 0 && (
        <div className='flex justify-center lg:w-[77%] 2xl:w-[82%] xl:w-[80%]'>
          <Pagination
            count={Math.ceil(paymentData.length / itemsPerPage)}
            page={page}
            onChange={handleChangePage}
            sx={{
              mt: '25px',
              '& .MuiPaginationItem-root': {
                color: 'rgba(125, 143, 179, 1)',
                '&.Mui-selected': {
                  color: colors.white,
                },
                '&:hover': {
                  backgroundColor: colors.secondary__fill__dark,
                  color: colors.white,
                },
              },
              '& .MuiPaginationItem-previousNext': {
                backgroundColor: colors.white,
                color: colors.black,
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PaymentTable;
