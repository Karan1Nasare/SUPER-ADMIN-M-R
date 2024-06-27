import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, CircularProgress } from '@mui/material';
import totalOrganizationsIcon from '../../assets/icon/totalOrganizationsIcon.svg';
import totalContentsIcon from '../../assets/icon/totalContentsIcon.svg';
import totalQuestionBank from '../../assets/icon/totalQuestionBank.svg';
import URLS from '../../constants/api';
import { APIClient } from '../../utilities/axios-client';

const DashboardCards = () => {
  // TODO: will update global loader component instead of mui loader
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { API } = APIClient();
  useEffect(() => {
    const fetchData = async () => {
      // TODO: use useFetcher api hook for handling api calls
      try {
        const response = await API('GET', URLS.DASHBOARD(), {}, true);
        if (response.status !== 200) {
          throw response;
        }
        setData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cardDetails = [
    {
      icon: totalOrganizationsIcon,
      title: 'Total Students',
      count: data?.admin_count,
      color_from: 'rgba(31, 64, 238, 0.15)',
      color_to: 'rgba(31, 64, 238, 0.035)',
    },
    {
      icon: totalContentsIcon,
      title: 'Total Exam',
      count: data?.contents,
      color_from: 'rgba(248, 194, 9, 0.15)',
      color_to: 'rgba(248, 194, 9, 0.035)',
    },
    {
      icon: totalQuestionBank,
      title: 'Total Question Bank',
      count: data?.question_bank_count,
      color_from: 'rgba(22, 205, 199, 0.15)',
      color_to: 'rgba(22, 205, 199, 0.035)',
    },
  ];

  if (loading) {
    return (
      <div className='flex justify-center items-center h-full'>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-8 mx-4'>
      {cardDetails.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-xl text-white h-44 flex flex-col justify-center items-center overflow-hidden`}
          style={{
            background: `linear-gradient(to bottom, ${item.color_from}, ${item.color_to})`,
          }}
        >
          <div className='absolute'>
            <div className='flex items-center justify-center'>
              <img className='p-2' src={item.icon} alt={`${item.title} icon`} />
            </div>
            <div className='text-center mt-2'>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography variant='body1'>{item.count}</Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DashboardCards;
