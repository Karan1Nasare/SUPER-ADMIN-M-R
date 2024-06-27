import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const services = () => {
  // profile service function
  const updateProfile = async data => {
    return axiosInstance.post(URLS.UPDATE_PROFILE(), data);
  };

  const addCourseStd = async data => {
    console.log('🚀 ~ addCourseStd1234 ~ data:', data);
    return axiosInstance.post(URLS.ADD_COURSE(), data);
  };

  const deleteCourseStdById = async (id, data) => {
    return axiosInstance.delete(URLS.DELETE_COURSE(id));
  };

  const getProfile = async () => {
    return axiosInstance.get(URLS.GET_PROFILE);
  };

  return {
    getProfile,
    updateProfile,
  };
};

export default services;
