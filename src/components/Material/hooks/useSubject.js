import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { APIClient, APIClient2 } from '../../../utilities/axios-client';
import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';
import services from '../services/services';

const useSubject = () => {
  const { getSubject, editSubjectById, deleteSubjectById, addSubject } =
    services();
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();

  const { axiosInstance } = APIClient2();

  const [subjectList, setSubjectList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch initial data
  const fetchSubjectList = async (courseId = '', pageSize = '') => {
    setLoading(true);
    try {
      fetcher({
        key: 'get-subject',
        executer: () => getSubject(searchTerm, pageSize, courseId),
        onSuccess: response => {
          console.log('rresponse: ', response);
          const record = response?.data?.data?.data;
          setSubjectList(record);
          setLoading(false);
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  };

  // edit subject
  const EditSubject = useCallback(async (id, subject) => {
    try {
      fetcher({
        key: 'edit-subject',
        executer: () => editSubjectById(id, subject),
        onSuccess: response => {
          console.log('rresponse: ', response);
          fetchSubjectList();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  // delete subject by id
  const DeleteSubjectById = useCallback(async id => {
    try {
      fetcher({
        key: 'delete-subject',
        executer: () => deleteSubjectById(id),
        onSuccess: response => {
          console.log('rresponse: ', response);
          fetchSubjectList();
        },
      });
    } catch (err) {
      console.log('error while fetching notifications', err);
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      fetchSubjectList('');
    }
  }, [searchTerm]);

  return {
    subjectList,
    loading,
    setSearchTerm,
    onUpdate: EditSubject,
    onDelete: DeleteSubjectById,
    fetchSubjectList,
  };
};

export default useSubject;
