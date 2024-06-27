import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import Header from './components/header';
import PaymentTable from './components/paymentTable';
import usePayment from './hooks/usePayment';

const PaymentHistory = () => {
  const { paymentData, searchValue, setSearchValue } = usePayment();

  return (
    <div className='overflow-x-hidden'>
      <Typography className='flex align-items-start' variant='mainLayoutTitle'>
        Payment History
      </Typography>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <PaymentTable paymentData={paymentData} />
    </div>
  );
};

export default PaymentHistory;
