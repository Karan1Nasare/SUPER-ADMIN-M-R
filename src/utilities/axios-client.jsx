/* eslint-disable no-case-declarations */
/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
import React, { useMemo } from 'react';
import axios from 'axios';
// import { PROD_HOST_URL, DEV_HOST_URL, TEST_HOST_URL } from '../constants/api';
import { useLocation } from 'react-router-dom';
import urls from '../constants/api';
import { useStore } from '../store/context-store';

const axiosInstance = axios.create({
  baseURL: urls.HOST_URL + urls.SUFFIX_URL,
});
axiosInstance.interceptors.request.use(
  async config => {
    if (!navigator.onLine) {
      const error = new Error('No internet connection');
      error.name = 'NetworkError';
      return Promise.reject(error);
    }
    const token =
      JSON.parse(window.localStorage.getItem('last_state'))?.user?.token || '';
    const newConfig = { ...config };
    if (token) {
      newConfig.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    newConfig.headers.Accept = 'application/json';
    return newConfig;
  },
  error => {
    return Promise.reject(error);
  },
);
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    console.log('error', error);
    const originalRequest = error?.config;
    if ([401, 403].includes(error?.response?.status)) {
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = '/login';
    }
    // if ( [401, 403].includes(error.response.status) && !originalRequest._retry) {
    //   originalRequest._retry = true;

    //   try {
    //     const refreshToken = getRefreshToken(usertype);
    //     const response = await axios.post(
    //       `${API_END_POINT}/auth/refresh-token`,
    //       {
    //         refresh_token: refreshToken,
    //       },
    //     );
    //     const { tokens } = response.data;
    //     setTokensInStorage(
    //       usertype,
    //       tokens.access_token,
    //       tokens.refresh_token,
    //     );
    //     originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`;
    //     return axios(originalRequest);
    //   } catch (error) {
    //     sessionStorage.clear();
    //     localStorage.clear();
    //     window.location.href = '/login';
    //   }
    // }

    return Promise.reject(error);
  },
);

export const APIClient2 = () => {
  const [Store, StoreDispatch] = useStore();

  axiosInstance.interceptors.request.use(
    async config => {
      if (!navigator.onLine) {
        const error = new Error('No internet connection');
        error.name = 'NetworkError';
        return Promise.reject(error);
      }
      const token =
        JSON.parse(window.localStorage.getItem('last_state'))?.user?.token ||
        '';
      const newConfig = { ...config };
      if (token) {
        newConfig.headers = {
          ...newConfig.headers,
          Authorization: `Bearer ${token}`,
        };
      }
      return newConfig;
    },
    error => {
      if (error?.response?.status === 401) {
        StoreDispatch({ type: 'RemoveState' });
      }
      return Promise.reject(error);
    },
  );
  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      // if ( [401, 403].includes(error.response.status) && !originalRequest._retry) {
      //   originalRequest._retry = true;

      //   try {
      //     const refreshToken = getRefreshToken(usertype);
      //     const response = await axios.post(
      //       `${API_END_POINT}/auth/refresh-token`,
      //       {
      //         refresh_token: refreshToken,
      //       },
      //     );
      //     const { tokens } = response.data;
      //     setTokensInStorage(
      //       usertype,
      //       tokens.access_token,
      //       tokens.refresh_token,
      //     );
      //     originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`;
      //     return axios(originalRequest);
      //   } catch (error) {
      //     sessionStorage.clear();
      //     localStorage.clear();
      //     window.location.href = '/login';
      //   }
      // }

      return Promise.reject(error);
    },
  );
  return { axiosInstance };
};
export const APIClient = () => {
  const [Store, StoreDispatch] = useStore();

  // Function to get bearer token
  const getToken = () => {
    return Store?.user?.token || '';
  };
  const getrefreshToken = () => {
    return Store?.user?.refreshToken || '';
  };
  const getNewAccessToken = async refreshToken => {
    try {
      const response = await axios.post(urls.REFRESH_TOKEN, { refreshToken });
      return response.data.token;
    } catch (error) {
      return null;
    }
  };

  const API = async (
    method,
    url,
    data = null,
    withAuth = true,
    responseType = {},
    token = '',
    setLoading = () => {},
  ) => {
    let config = {};
    if (withAuth) {
      config = {
        headers: {
          Authorization: `Bearer ${token || Store?.user?.token}`,
        },
        ...responseType,
      };
    }
    switch (method) {
      case 'GET':
        setLoading(true);
        const getResponse = axiosInstance
          .get(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return getResponse;
      case 'POST':
        setLoading(true);
        const postResponse = axiosInstance
          .post(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return postResponse;
      case 'PUT':
        const putResponse = axiosInstance
          .put(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return putResponse;
      case 'PATCH':
        const patchResponse = axiosInstance
          .patch(url, data, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return patchResponse;
      case 'DELETE':
        const deleteResponse = axiosInstance
          .delete(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return deleteResponse;
      default:
        const defaultResponse = axiosInstance
          .get(url, config)
          .then(response => {
            setLoading(false);
            return response;
          })
          .catch(err => {
            setLoading(false);
            return err;
          });
        return defaultResponse;
    }
  };

  return { API };
};
export const useQueryParams = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
export default axiosInstance;
