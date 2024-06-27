import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const services = () => {
  // course service function
  const editPlanId = async (id, data) => {
    return axiosInstance.post(URLS.COURSE_BY_ID(id, data));
  };

  const addPlan = async data => {
    return axiosInstance.post(URLS.ADD_PLAN(data));
  };

  const deletePlanById = async (id, data) => {
    return axiosInstance.delete(URLS.DELETE_PLAN(id));
  };

  const getPlan = async (searchInput, pageSize) => {
    return axiosInstance.get(URLS.GET_PLAN(searchInput, pageSize));
  };

  return {
    editPlanId,
    getPlan,
    addPlan,
    deletePlanById,
  };
};

export default services;
