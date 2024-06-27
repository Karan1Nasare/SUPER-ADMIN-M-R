import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient, APIClient2 } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const ITEMS_PER_PAGE = 9;

const useCourseStd = () => {
  const { getCourseStd, editCourseStdById, deleteCourseStdById } = services();
  const { fetcher, getExecutorState } = useFetcher();

  const [courseStdList, setCourseStdList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch initial data
  const fetchCourseStdList = async (pageSize = '') => {
    setLoading(true);
    try {
      fetcher({
        key: 'get-courseStd',
        showSuccessToast: false,
        executer: () => getCourseStd(searchTerm, pageSize),
        onSuccess: response => {
          const record = response?.data?.data?.data;
          setCourseStdList(record);
          setLoading(false);
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  };

  // edit course
  const EditCourseStd = useCallback(async (id, course) => {
    try {
      fetcher({
        showSuccessToast: false,
        key: 'edit-courseStd',
        executer: () => editCourseStdById(id, course),
        onSuccess: response => {
          console.log('rresponse: ', response);
          fetchCourseStdList();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // delete course by id
  const DeleteCourseStdById = useCallback(async id => {
    try {
      fetcher({
        key: 'delete-courseStd',
        showSuccessToast: false,
        executer: () => deleteCourseStdById(id),
        onSuccess: response => {
          console.log('rresponse: ', response);
          fetchCourseStdList();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // Determine current items based on search results or pagination
  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = courseStdList?.slice(firstCardIndex, lastCardIndex);

  useEffect(() => {
    fetchCourseStdList();
  }, [searchTerm]);

  // Calculate filtered items based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setCurrentPage(1); // Reset page number when clearing search
      return;
    }

    setCurrentPage(1); // Reset page number when performing a search
  }, [searchTerm, courseStdList]);

  return {
    courseStdList,
    currentPage,
    ITEMS_PER_PAGE,
    loading,
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    totalShowItems: courseStdList?.length,
    onUpdate: EditCourseStd,
    onDelete: DeleteCourseStdById,
  };
};

export default useCourseStd;
