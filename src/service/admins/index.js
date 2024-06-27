import axios from 'axios';
import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const addNewAdmin = async (data, image) => {
  if (!data || typeof data !== 'object' || !Object.keys(data).length) {
    throw new Error('Invalid data: Data is required and cannot be empty');
  }

  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, data[key]);
  });

  return axiosInstance.post(URLS.ADD_ADMIN(), formData);
};

export const updateAdminStudentCount = async data => {
  return axiosInstance.post(URLS.UPDATE_STUDENT_COUNT(data.id), data);
};

export const addAdminPlan = async data => {
  return axiosInstance.post(URLS.ADD_ADMIN_PLAN(data.id), data);
};

export const addAdminFeature = async data => {
  return axiosInstance.post(URLS.ADD_ADMIN_FEATURES(data.id), data);
};

export const getStates = async () => {
  return axiosInstance.get(URLS.GET_STATES);
};

export const makePayments = async data => {
  return axiosInstance.post(URLS.MAKE_PAYMENT(), data);
};

export const getAllAdmins = async params => {
  return axiosInstance.get(URLS.GET_ADMINS(), { params });
};

export const getAllCities = async params => {
  return axiosInstance.get(URLS.GET_CITIES, { params });
};

export const deleteAdminData = async id => {
  return axiosInstance.delete(URLS.DELETE_ADMIN(id));
};
