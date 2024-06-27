import URLS from '../../../../constants/api';
import axiosInstance from '../../../../utilities/axios-client';

const services = () => {
  const editfeatureDataById = async (id, data) => {
    return axiosInstance.post(URLS.FEATURE_BY_ID(id), data);
  };

  const deleteFeatureById = async id => {
    return axiosInstance.delete(URLS.DELETE_FEATURE(id));
  };

  const getFeatures = async (searchInput, pageSize) => {
    return axiosInstance.get(URLS.GET_FEATURES(searchInput, pageSize));
  };

  return {
    editfeatureDataById,
    getFeatures,
    deleteFeatureById,
  };
};

export default services;
