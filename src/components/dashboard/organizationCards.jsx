import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

import totalStudentIcon from '../../assets/icon/totalStudentIcon.svg';
import totalStaffIcon from '../../assets/icon/totalStaffIcon.svg';
import studentStaffReportIcon from '../../assets/icon/studentStaffReportIcon.svg';
import AreaChartLayout from '../shared/Chart/areaChartLayout';

const card = [
  {
    gradientColor: '#635BFF',
    title: 'Total Students',
    value: '16,689',
    icon: totalStudentIcon,
  },
  {
    gradientColor: '#16CDC7',
    title: 'Total Staff',
    value: '800',
    icon: totalStaffIcon,
  },
];

const OrganizationCard = () => {
  return (
    <>
      <div className=' text-white'>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-1 flex flex-col space-y-8'>
            {card.map((item, index) => (
              <div className='flex-1' key={index}>
                <Card
                  className=' h-full'
                  style={{
                    background: `linear-gradient(to bottom, ${item.gradientColor}, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CardContent className='text-center flex flex-col justify-centers'>
                    <Box className='mb-4'>
                      <img
                        className='mx-auto'
                        src={item.icon} // Assuming totalStudentIcon is defined elsewhere
                        alt=''
                      />
                    </Box>
                    <Typography variant='h6' sx={{ color: 'white' }}>
                      {item.title}
                    </Typography>
                    <Typography variant='h7'>{item.value}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className='lg:col-span-2'>
            <Card
              className='bg-gradient-to-r from-blue-900 to-purple-900'
              style={{
                backgroundColor: '#0B1739',
              }}
            >
              <CardContent>
                <Box className='flex mb-4 items-center'>
                  <img className='mr-4' src={studentStaffReportIcon} alt='' />
                  <Box>
                    <Typography variant='graphh1'>
                      Student & Staff Report
                    </Typography>
                    <Typography className='text-start text-white'>
                      Overview of Reports
                    </Typography>
                  </Box>
                </Box>
                <AreaChartLayout />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <Card
          className='bg-gradient-to-r from-purple-900 to-blue-900'
          style={{ backgroundColor: '#0B1739' }}
        >
          <CardContent className='text-center'>
            <div className='flex '>
              <div className='bg-red-800 ml-4 opacity-30 h-12 text-white w-56 rounded-full p-2 pt-3 m-2'>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'white',
                  }}
                >
                  Plan Expires in 56 Days
                </Typography>
              </div>
              <h5 className='text-green m-2 mt-6'>Pre Upgrade</h5>
            </div>
            <div className=' text-white w-[80%] md:w-[85%] m-2 ml-4 lg:text-xl md:mt-4 text-sm text-left'>
              <Typography variant='cardDescription' className='mt-4 text-start'>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OrganizationCard;
