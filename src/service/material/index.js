import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const AddMaterialContent = async data => {
  return axiosInstance.post(URLS.ADD_CONTENT(), data);
};

export const AddMaterialContent2 = async data => {
  return axiosInstance.post(URLS.ADD_CONTENT(), data);
};

export const getAllSubject = async params => {
  return axiosInstance.get(URLS.GET_SUBJECT_LIST, { params });
};
export const getAllCourse = async params => {
  return axiosInstance.get(URLS.GET_COURSE_LIST, { params });
};
export const getAllChapter = async params => {
  return axiosInstance.get(URLS.GET_CHAPTER_LIST, { params });
};

export const fetchMaterialData = async params => {
  return axiosInstance.get(URLS.CONTENT_BY_ID(params));
};

export const updateMaterialContent = async (formData, params) => {
  return axiosInstance.post(URLS.CONTENT_BY_ID(params), formData);
};

export const TEST = 'ee';
