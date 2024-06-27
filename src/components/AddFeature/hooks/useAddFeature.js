import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import URLS from '../../../constants/api';
import useFetcher from '../../../hooks/useFetcher';
import { APIClient, APIClient2 } from '../../../utilities/axios-client';

const useAddFeatures = () => {
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();
  const { axiosInstance } = APIClient2();

  const navigate = useNavigate();
  const [isOpenDeleteDialog, setIsOpenDeleteDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [newFeature, setNewFeature] = useState({
    name: '',
    gst: '',
    description: '',
    rate: '',
    totalAmount: '',
    image: selectedFile,
  });

  const addFeatures = async data => {
    return axiosInstance.post(URLS.ADD_FEATURE(), data);
  };

  useEffect(() => {
    setNewFeature(prevFeature => ({
      ...prevFeature,
      image: selectedFile,
    }));
  }, [selectedFile]);

  const AddFeature = useCallback(async feature => {
    console.log('feature', feature);
    try {
      // const response = await API('POST', URLS.ADD_FEATURE(), data);
      fetcher({
        key: 'features',
        executer: () => addFeatures(feature),
        onSuccess: response => {
          console.log('rresponse feature: ', response);
          navigate('/features');
        },
      });
    } catch (err) {
      console.error('Error while adding feature', err);
    }
  }, []);

  const onFeatureChange = (name, value) => {
    setNewFeature(prevFeature => ({
      ...prevFeature,
      [name]: value,
    }));
  };

  const handleAddFeature = () => {
    AddFeature(newFeature);
  };

  const handleOpenDeleteDialog = () => {
    setIsOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsOpenDeleteDialog(false);
  };

  return {
    newFeature,
    isOpenDeleteDialog,
    selectedFile,
    setSelectedFile,
    handleAddFeature,
    handleOpenDeleteDialog,
    handleCloseDeleteDialog,
    onFeatureChange,
    AddFeature,
  };
};

export default useAddFeatures;
