import React, { useEffect, useState } from 'react';
import TextField from '../../components/shared/input/TextField';
import MenuItem from '../../components/shared/menuitem/MenuItem';
import useFetcher from '../../hooks/useFetcher';
import axiosInstance from '../../utilities/axios-client';
import URLS from '../../constants/api';

function GetdefaultOption({ pageTitle, setselectedoptions }) {
  const { fetcher } = useFetcher();
  const [options, setOptions] = useState([]);
  const getsubjectOptions = async () => {
    return axiosInstance.get('/course/list');
  };
  const selectedoptions = e => setselectedoptions(e.target.value);
  useEffect(() => {
    if (pageTitle === 'Subject') {
      fetcher({
        key: 'get-subject-options',
        executer: () => getsubjectOptions(),
        showSuccessToast: false,
        onSuccess: response => {
          setOptions(response?.data?.data);
        },
      });
    }
  }, [pageTitle]);
  if (pageTitle === 'Subject') {
    return (
      <TextField
        select
        defaultValue={options[0]?.value || pageTitle}
        fullWidth
        onChange={selectedoptions}
      >
        {options.map(option => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </TextField>
    );
  }
  if (pageTitle === 'Chapter') {
    return (
      <TextField
        select
        defaultValue={options[0]?.value || pageTitle}
        fullWidth
        onChange={selectedoptions}
      >
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }
}

export default GetdefaultOption;
