import React, { useEffect, useState } from 'react';
import useFetcher from '../../../hooks/useFetcher';
import { APIClient2 } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';

const usePayment = () => {
  const { axiosInstance } = APIClient2();

  const { fetcher, getExecutorState } = useFetcher();
  const [paymentData, setPaymentData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getPaymentHistory = async (searchInput, pageSize) => {
    return axiosInstance.get(URLS.GET_PAYMENT_HISTORY(searchInput, pageSize));
  };

  const fetchData = async (pageSize = 1) => {
    fetcher({
      key: 'get-payment-history',
      showSuccessToast: false,
      executer: () => getPaymentHistory(searchValue, pageSize),
      onSuccess: response => {
        const record = response?.data?.data?.data;
        setPaymentData(record);
      },
    });
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log('error while fetching notifications', error);
    }
  }, [searchValue]);

  return { paymentData, searchValue, setSearchValue };
};

export default usePayment;
