import URLS from '../../constants/api';
import axiosInstance from '../../utilities/axios-client';

export const getfeatures = async pops => {
  if (pops !== undefined && pops !== null && pops !== '') {
    const { page } = pops;
    return axiosInstance.get(URLS.GET_FEATURES_LIST, {
      params: { page, page_size: 10 },
    });
  }
  return axiosInstance.get(URLS.GET_FEATURES());
};
export const ADD = 'TEST';
