import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const getgetallcoursedata = async pops => {
  if (pops !== undefined) {
    const { course_id: courseId } = pops;
    return axiosInstance.get(URLS.GET_ALL_COURSESDATA(), {
      params: { course_id: courseId },
    });
  }
  return axiosInstance.get(URLS.GET_ALL_COURSESDATA());
};
export const getquestionbanks = async () => {
  return axiosInstance.get(URLS.GET_QUESTION_BANK());
};
