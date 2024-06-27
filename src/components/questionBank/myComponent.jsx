import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import 'swiper/css';
import 'swiper/css/navigation';
import 'tailwindcss/tailwind.css';

const MyComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordionStyle = {
    backgroundColor: '#0B1739',
    color: 'white',
  };
  const detailsStyle = {
    backgroundColor: '#343B4F',
    borderBottom: '1px solid gray', // Bottom border when expanded
  };
  const summaryStyle = isExpanded => ({
    backgroundColor: '#0B1739',
    borderBottom: isExpanded ? 'none' : '1px solid gray', // Conditional bottom border
  });
  return (
    <div
      className='absolute border p-4'
      style={{
        width: '673px',
        height: '616.11px',
        top: '153px',
        left: '40%',
        padding: '27px 30px',
        gap: '30px',
        borderRadius: '20px 20px 20px 20px',
        border: '1px solid #343B4F',
        backgroundColor: '#0B1739',
      }}
    >
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl text-white'>Preview</h2>
        <IconButton>
          <CloseIcon className='text-white cursor-pointer' />
        </IconButton>
      </div>
      <div className='border-b-2 border-gray-700 mb-4'></div>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        style={accordionStyle}
        className='mb-4 rounded-lg'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-yellow-500' />}
          style={summaryStyle(expanded === 'panel1')}
        >
          <div className='border-r border-yellow-600 mr-2 h-5' />
          Basic Details
        </AccordionSummary>
        <AccordionDetails style={detailsStyle}>
          <p>Basic details content goes here...</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        style={accordionStyle}
        className='mb-4 rounded-lg'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-yellow-500' />}
          style={summaryStyle(expanded === 'panel2')}
        >
          <div className='border-r border-yellow-600 mr-2 h-5' />
          Video
        </AccordionSummary>
        <AccordionDetails style={detailsStyle}>
          <div className='flex space-x-4'>
            <div className='w-1/2'>
              <img
                src='video_thumbnail1.jpg'
                alt='Video 1'
                className='rounded-lg w-full'
              />
            </div>
            <div className='w-1/2'>
              <img
                src='video_thumbnail2.jpg'
                alt='Video 2'
                className='rounded-lg w-full'
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        style={accordionStyle}
        className='mb-4 rounded-lg'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-yellow-500' />}
          style={summaryStyle(expanded === 'panel3')}
        >
          <div className='border-r border-yellow-600 mr-2 h-5' />
          Course
        </AccordionSummary>
        <AccordionDetails style={detailsStyle}>
          <p>Course content goes here...</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        style={accordionStyle}
        className='mb-4 rounded-lg'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-yellow-500' />}
          style={summaryStyle(expanded === 'panel4')}
        >
          <div className='border-r border-yellow-600 mr-2 h-5' />
          Question Bank
        </AccordionSummary>
        <AccordionDetails style={detailsStyle}>
          <p>Question Bank content goes here...</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        style={accordionStyle}
        className='mb-4 rounded-lg'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-yellow-500' />}
          style={summaryStyle(expanded === 'panel5')}
        >
          <div className='border-r border-yellow-600 mr-2 h-5' />
          3D Model
        </AccordionSummary>
        <AccordionDetails style={detailsStyle}>
          <p>3D Model content goes here...</p>
        </AccordionDetails>
      </Accordion>
      <Button
        variant='contained'
        color='primary'
        className='bg-blue-500 mx-auto mt-4'
      >
        Publish
      </Button>
    </div>
  );
};
export default MyComponent;
