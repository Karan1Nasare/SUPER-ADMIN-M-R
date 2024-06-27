import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import URLS from '../../../constants/api';
import { APIClient2 } from '../../../utilities/axios-client';
import useFetcher from '../../../hooks/useFetcher';

const useAddNotification = () => {
  const { fetcher, getExecutorState } = useFetcher();
  const { axiosInstance } = APIClient2();

  const navigate = useNavigate();

  const [adminData, setAdminData] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const data = filteredData.length > 0 ? filteredData : adminData;

  const addNotification = async record => {
    return axiosInstance.post(URLS.ADD_NOTIFICATION(), record);
  };

  const getAllAdmins = () => {
    return axiosInstance.get(URLS.GET_ADMINS());
  };

  const openAdminDialog = () => {
    setIsEditOpen(true);
  };

  const closeAdminDialog = () => {
    setIsEditOpen(false);
  };

  const selectAllAdmin = record => {
    setAdminData(record);
  };

  const selectedAdminData = adminDataSelected => {
    console.log(adminDataSelected);
    if (adminDataSelected) {
      setAdminData(adminDataSelected);
    }
  };

  const hasCheckedAdmins = adminData.some(item => item.isChecked);

  const handleSearchClick = () => {
    console.log('handleSearchClick');
    if (searchInputValue.trim() === '') {
      setFilteredData([]);
      return;
    }

    const filtered = adminData.filter(
      card =>
        card.name.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        card.enrollment
          .toLowerCase()
          .includes(searchInputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(searchInputValue.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleSearchInputChange = e => {
    setSearchInputValue(e.target.value);
    if (e.target.value.trim() === '') {
      setFilteredData([]);
    }
  };

  const onAddNotification = useCallback(async notification => {
    try {
      // const response = await API('POST', URLS.ADD_FEATURE(), data);
      fetcher({
        key: 'notification',
        executer: () => addNotification(notification),
        onSuccess: response => {
          console.log('notification rresponse feature: ', response);
          navigate('/notification');
        },
      });
    } catch (err) {
      console.error('Error while adding feature', err);
    }
  }, []);

  const GetAllAdmins = useCallback(async admins => {
    try {
      fetcher({
        key: 'admins',
        executer: () => getAllAdmins(),
        onSuccess: response => {
          console.log('admins rresponse feature: ', response);
          setAdminData(response?.data?.data?.data);
        },
      });
    } catch (err) {
      console.error('Error while adding feature', err);
    }
  }, []);

  useEffect(() => {
    try {
      GetAllAdmins();
    } catch (error) {
      console.log('Error while fetching notifications', error);
    }
  }, []);

  return {
    data: adminData,
    isEditOpen,
    hasCheckedAdmins,
    searchInputValue,
    openAdminDialog,
    closeAdminDialog,
    selectedAdminData,
    selectAllAdmin,
    handleSearchClick,
    handleSearchInputChange,
    onAddNotification,
    selectedFile,
    setSelectedFile,
  };
};

export default useAddNotification;
