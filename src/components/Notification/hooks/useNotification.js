import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axiosInstance, { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';

const ITEMS_PER_PAGE = 4;

const useNotification = () => {
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();

  const editNotification = async (id, data) => {
    return axiosInstance.post(URLS.EDIT_NOTIFICATION(id), data);
  };

  const deleteNotification = async (id, data) => {
    return axiosInstance.delete(URLS.DELETE_NOTIFICATION(id));
  };

  const getNotification = (searchInput, pageSize) => {
    return axiosInstance.get(URLS.GET_NOTIFICATIION(searchInput, pageSize));
  };

  const navigate = useNavigate();

  const [notificationList, setNotificationList] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  console.log('🚀 ~ useNotification ~ searchTerm:', searchTerm);

  // Fetch initial data
  const fetchNotificationList = async (pageSize = '') => {
    setLoading(true);
    fetcher({
      key: 'get-notification',
      executer: () => getNotification(searchTerm, pageSize),
      showSuccessToast: false,
      onSuccess: response => {
        const record = response?.data?.data?.data;
        setNotificationList(record);
        setLoading(false);
      },
      onFailure: () => {
        setLoading(false);
      },
    });
  };

  const DeleteNotification = useCallback(async id => {
    fetcher({
      key: 'delete-notification',
      executer: () => deleteNotification(id),
      onSuccess: () => {
        fetchNotificationList();
      },
    });
  }, []);

  const UpdateNotification = useCallback(async (id, notification) => {
    fetcher({
      key: 'edit-notification',
      executer: () => editNotification(id, notification),
      onSuccess: response => {
        fetchNotificationList();
      },
    });
  }, []);

  const handleUpdateNotification = (id, notification) => {
    UpdateNotification(id, notification);
    setIsEditOpen(false);
  };

  useEffect(() => {
    fetchNotificationList();
  }, [searchTerm]);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    setCurrentPage(1); // Reset page number when performing a search
  }, [searchTerm, notificationList]);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = notificationList?.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = value => {
    setSearchTerm(value);
  };

  const openEditDialog = () => setIsEditOpen(true);
  const closeEditDialog = () => setIsEditOpen(false);
  const confirmDeleteHandler = id => {
    DeleteNotification(id);
    setOpenDelete(false);
  };
  const handleCloseDelete = () => setOpenDelete(false);
  const openDeleteDialog = () => setOpenDelete(true);
  const handleAddNotification = () => navigate('/notification/addNotification');

  return {
    data: currentItems,
    isEditOpen,
    openDelete,
    searchTerm,
    totalShowItems: notificationList?.length,
    currentPage,
    ITEMS_PER_PAGE,
    loading,
    setCurrentPage,
    handleSearchChange,
    openEditDialog,
    closeEditDialog,
    confirmDeleteHandler,
    handleCloseDelete,
    openDeleteDialog,
    handleAddNotification,
    handleUpdateNotification,
  };
};

export default useNotification;
