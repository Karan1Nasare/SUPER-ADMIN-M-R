import URLS from '../../../constants/api';
import axiosInstance from '../../../utilities/axios-client';

const services = () => {
  // course service function
  const editCourseStdById = async (id, data) => {
    return axiosInstance.post(URLS.EDIT_COURSE(id), data);
  };

  const addCourseStd = async data => {
    console.log('🚀 ~ addCourseStd1234 ~ data:', data);
    return axiosInstance.post(URLS.ADD_COURSE(), data);
  };

  const deleteCourseStdById = async (id, data) => {
    return axiosInstance.delete(URLS.DELETE_COURSE(id));
  };

  const getCourseStd = async (searchInput, pageSize) => {
    return axiosInstance.get(URLS.GET_COURSE(searchInput, pageSize));
  };

  // subject service function
  const editSubjectById = async (id, data) => {
    return axiosInstance.post(URLS.SUBJECT_BY_ID(id), data);
  };

  const addSubject = async data => {
    return axiosInstance.post(URLS.ADD_SUBJECT(), data);
  };

  const deleteSubjectById = async id => {
    return axiosInstance.delete(URLS.SUBJECT_BY_ID(id));
  };

  const getSubject = async (searchInput, pageSize, courseId) => {
    return axiosInstance.get(URLS.GET_SUBJECT(searchInput, pageSize, courseId));
  };

  // chapter service function
  const editChapterById = async (id, data) => {
    return axiosInstance.post(URLS.CHAPTER_BY_ID(id), data);
  };

  const addChapter = async data => {
    return axiosInstance.post(URLS.ADD_CHAPTER(data));
  };

  const deleteChapterById = async id => {
    return axiosInstance.delete(URLS.CHAPTER_BY_ID(id));
  };

  const getChapter = async (searchInput, pageSize, courseId, subjectId) => {
    return axiosInstance.get(
      URLS.GET_CHAPTER(searchInput, pageSize, courseId, subjectId),
    );
  };

  // content service function

  const getContent = async (searchInput, page) => {
    return axiosInstance.get(URLS.GET_CONTENT(searchInput, page));
  };

  const isLockedContent = async id => {
    return axiosInstance.post(URLS.CONTENT_LOCKED(id));
  };

  const deleteContentById = async id => {
    return axiosInstance.delete(URLS.CONTENT_BY_ID(id));
  };

  return {
    editCourseStdById,
    getCourseStd,
    addCourseStd,
    deleteCourseStdById,
    editSubjectById,
    addSubject,
    getSubject,
    deleteSubjectById,
    editChapterById,
    addChapter,
    getChapter,
    deleteChapterById,
    getContent,
    isLockedContent,
    deleteContentById,
  };
};

export default services;

export const getCourseList = async params => {
  return axiosInstance.get(URLS.GET_COURSE_LIST, { params });
};

export const getSubjectList = async params => {
  return axiosInstance.get(URLS.GET_SUBJECT_LIST, { params });
};

export const getChapterList = async params => {
  return axiosInstance.get(URLS.GET_CHAPTER_LIST, { params });
};
