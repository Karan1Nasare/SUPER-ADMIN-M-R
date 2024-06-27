import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import AddMaterialForm from '../../components/ui/AddMaterialForm';
import back from '../../components/Icon/back.svg';

import useAddMaterial from '../../components/Material/hooks/useAddMaterial';
import GetdefaultOption from './GetdefaultOption';

const AddMaterialPage = () => {
  const { params } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();

  // Custom hooks
  const { AddCourseStd, AddChapter, AddSubject, AddContent } = useAddMaterial();

  if (!['chapter', 'subject', 'course', 'content'].includes(params)) {
    navigate('/');
    return null;
  }

  let placeholder = '';
  let inputLabel = '';
  let pageTitle = '';
  let submitHandler;

  switch (params) {
    case 'chapter':
      placeholder = 'Enter Chapter Name';
      inputLabel = 'Chapter';
      pageTitle = 'Chapter';
      submitHandler = AddChapter;
      break;
    case 'subject':
      placeholder = 'Enter Subject Name';
      inputLabel = 'Subject';
      pageTitle = 'Subject';
      submitHandler = AddSubject;
      break;
    case 'course':
      placeholder = 'Enter Course Name';
      inputLabel = 'Course Name [STD]';
      pageTitle = 'Course';
      submitHandler = AddCourseStd;
      break;
    case 'content':
      placeholder = 'Content Name';
      inputLabel = 'Content Name';
      pageTitle = 'Content';
      submitHandler = AddContent;
      break;
    default:
      navigate('/');
      return null;
  }
  const [file, setFile] = useState();
  const [selectedoptions, setselectedoptions] = useState(0);

  const handleFormSubmit = data => {
    const formdata = new FormData();

    Object.keys(data).forEach(key => {
      formdata.append(key, data[key]);
    });
    formdata.append('image', file);
    if (selectedoptions) {
      if (pageTitle === 'subject') {
        formdata.append('course_id', selectedoptions);
      }
    }
    submitHandler(formdata);
  };
  const handleBackClick = () => {
    navigate('/material');
  };

  return (
    <div>
      <div className='flex justify-between'>
        <h1 className='text-left text-white text-4xl mb-8'>{pageTitle}</h1>
        <div className='flex '>
          <div className='w-[250px] flex justify-center items-center mr-3'>
            <GetdefaultOption
              pageTitle={pageTitle}
              setselectedoptions={setselectedoptions}
            />
          </div>
          <div onClick={handleBackClick} className='flex mr-1 '>
            <img src={back} alt='' className='text-white mt-5 w-8 h-8 mr-1' />
            <button className='text-white text-2xl'>Back</button>
          </div>
        </div>
      </div>
      <AddMaterialForm
        pageTitle={pageTitle}
        inputLabel={inputLabel}
        placeholder={placeholder}
        onSubmit={handleFormSubmit}
        formRef={formRef}
        setFile={setFile}
      />
      <div className='text-right w-full flex justify-end mt-2'>
        <button
          className='flex items-center gap-2.5 px-4 py-2.5 text-base text-center bg-white rounded-lg text-slate-900'
          onClick={() => formRef.current.requestSubmit()}
        >
          <Icon
            icon={'simple-line-icons:plus'}
            className='shrink-0 w-6 aspect-square text-black'
            fontSize={'1.2rem'}
          />
          <span className='my-auto'>Add {pageTitle}</span>
        </button>
      </div>
    </div>
  );
};

export default AddMaterialPage;
