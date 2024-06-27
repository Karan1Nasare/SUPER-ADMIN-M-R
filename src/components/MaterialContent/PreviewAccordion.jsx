import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';

import cImg from '../../assets/course.png';

const accordionStyle = {
  backgroundColor: '#0A1931',
  color: 'white',
  borderRadius: '10px',
  '& .MuiAccordionSummary-root': {
    borderBottom: '1px solid white',
  },
  '& .MuiAccordionDetails-root': {
    borderTop: '1px solid white',
  },
};

function stripHtmlTags(html) {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || '';
}

function isValidFile(file) {
  return file && file instanceof File;
}

function openPDFInNewWindow(file) {
  const fileURL = URL.createObjectURL(file);
  window.open(fileURL, '_blank');
}

export default function PreviewAccordion({
  videoFile,
  imageFile,
  questionBankFile,
  documentFile,
  threeDModel,
  thumbnailImage,
  thumbnailVideo,
  title,
  description,
}) {
  const navigate = useNavigate();
  const thumbnailImageUrl = isValidFile(thumbnailImage?.file)
    ? URL.createObjectURL(thumbnailImage.file)
    : cImg;
  const thumbnailVideoUrl = thumbnailVideo?.file
    ? URL.createObjectURL(thumbnailVideo.file)
    : null;

  const onPublish = () => {
    navigate('/material');
  };

  return (
    <div>
      <Accordion sx={accordionStyle} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel1-content'
          id='panel1-header'
        >
          <div className='relative flex flex-col items-start w-full'>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Basic Details</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='relative flex flex-row items-start justify-between w-full'>
            <img
              src={thumbnailImageUrl}
              alt='img-1'
              height={'150px'}
              width={'250px'}
            />
            {thumbnailVideoUrl && (
              <video width='250px' controls>
                <source
                  src={thumbnailVideoUrl}
                  type={thumbnailVideo?.file?.type}
                />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <h6 className='mt-1'>{title || 'STD - 101 Bharat No Varsho'}</h6>
          <p className='mt-1'>{stripHtmlTags(description)}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel2-content'
          id='panel2-header'
        >
          <div className='relative flex flex-col items-start w-full'>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Video</p>
          </div>
        </AccordionSummary>
        <AccordionDetails className='overflow-x-auto'>
          <div className='flex space-x-4'>
            {videoFile?.map((videoItem, idx) => (
              <div key={idx} className='flex-shrink-0'>
                {isValidFile(videoItem.file) ? (
                  <video height='150px' width='250px' controls>
                    <source
                      src={URL.createObjectURL(videoItem.file)}
                      type={videoItem.file.type}
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>Invalid video file</p>
                )}
              </div>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel4-content'
          id='panel4-header'
        >
          <div className='relative flex flex-col items-start w-full'>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Courses</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {documentFile?.map((documentItem, idx) => {
            console.log(
              '🚀 ~ {documentFile?.map ~ documentItem:',
              documentItem,
              documentItem?.file,
            );
            if (isValidFile(documentItem?.files)) {
              return (
                <div
                  key={idx}
                  className='mb-4 flex justify-between items-center'
                >
                  <p>{documentItem?.files?.name}</p>
                  {documentItem?.files?.type === 'application/pdf' ? (
                    <>
                      <VisibilityIcon
                        className='cursor-pointer'
                        onClick={() => openPDFInNewWindow(documentItem.files)}
                      />
                    </>
                  ) : (
                    <p>Unsupported file type</p>
                  )}
                </div>
              );
            }
            return <p key={idx}>Invalid document file</p>;
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel5-content'
          id='panel5-header'
        >
          <div className='relative flex flex-col items-start w-full'>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>Question Bank</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {questionBankFile?.map((questionItem, idx) => {
            console.log(
              '🚀 ~ {documentFile?.map ~ questionItem:',
              questionItem,
              questionItem.file,
            );
            if (isValidFile(questionItem.files)) {
              return (
                <div
                  key={idx}
                  className='mb-4 flex justify-between items-center'
                >
                  <p>{questionItem?.files?.name}</p>
                  {questionItem?.files?.type === 'application/pdf' ? (
                    <>
                      <VisibilityIcon
                        className='cursor-pointer'
                        onClick={() => openPDFInNewWindow(questionItem.files)}
                      />
                    </>
                  ) : (
                    <p>Unsupported file type</p>
                  )}
                </div>
              );
            }
            return <p key={idx}>Invalid document file</p>;
          })}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
          aria-controls='panel5-content'
          id='panel5-header'
        >
          <div className='relative flex flex-col items-start w-full'>
            <div className='absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full'></div>
            <p className='dark:text-orange ml-2'>3D Models</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {threeDModel?.map((modelItem, idx) => {
            console.log(
              '🚀 ~ {documentFile?.map ~ modelItem:',
              modelItem,
              modelItem?.file,
            );
            if (isValidFile(modelItem?.files)) {
              return (
                <div
                  key={idx}
                  className='mb-4 flex justify-between items-center'
                >
                  <p>{modelItem?.files?.name}</p>
                  {modelItem?.files?.type === 'application/pdf' ? (
                    <>
                      <VisibilityIcon
                        className='cursor-pointer'
                        onClick={() => openPDFInNewWindow(modelItem.files)}
                      />
                    </>
                  ) : (
                    <p>Unsupported file type</p>
                  )}
                </div>
              );
            }
            return <p key={idx}>Invalid document file</p>;
          })}
        </AccordionDetails>
      </Accordion>
      {/* Publish Button */}
      <div className='flex justify-center mt-4'>
        <button
          className='bg-white text-black py-2 px-4 rounded-md shadow-md'
          onClick={onPublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
}
