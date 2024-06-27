import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import services from '../services/services';
import useFetcher from '../../../hooks/useFetcher';

const ITEMS_PER_PAGE = 9;

const useContent = () => {
  const { API } = APIClient();
  const { getContent, isLockedContent, deleteContentById } = services();
  const { fetcher, getExecutorState } = useFetcher();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [totalData, setTotalData] = useState(0);

  const [contentList, setContentList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch initial data
  const fetchContentList = async () => {
    setLoading(true);
    try {
      fetcher({
        key: 'get-content',
        executer: () => getContent(searchTerm, currentPage),
        onSuccess: response => {
          console.log('response: ', response);
          const record = response?.data?.data?.data;
          console.log('🚀 ~ fetchContentList ~ record:', record);
          setContentList(record);
          setItemsPerPage(response?.data?.data?.per_page);
          setCurrentPage(response?.data?.data?.current_page);
          setTotalData(response?.data?.data?.total);
          setLoading(false); // Move this inside onSuccess
        },
      });
    } catch (err) {
      console.log('error while fetching chapters', err);
      setLoading(false); // Ensure loading state is reset in case of error
    }
  };

  const lockedContent = async id => {
    console.log('🚀 ~ lockedContent ~ id:', id);
    try {
      fetcher({
        key: 'content-locked',
        executer: () => isLockedContent(id),
        onSuccess: response => {
          console.log('response: ', response);
          fetchContentList();
        },
      });
    } catch (err) {
      console.log('error while fetching chapters', err);
    }
  };

  // delete course by id
  const DeleteContentById = useCallback(async id => {
    try {
      fetcher({
        key: 'delete-content',
        showSuccessToast: false,
        executer: () => deleteContentById(id),
        onSuccess: response => {
          console.log('rresponse: ', response);
          fetchContentList();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  useEffect(() => {
    fetchContentList();
  }, [searchTerm, currentPage]);

  return {
    contentList,
    loading,
    lockedContent,
    DeleteContentById,
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    totalShowItems: totalData,
    currentPage,
    itemsPerPage,
  };
};

export default useContent;
