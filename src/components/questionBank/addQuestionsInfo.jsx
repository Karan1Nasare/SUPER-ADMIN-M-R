import React, { useEffect, useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { IoMdAddCircleOutline } from 'react-icons/io';
// import { RiArrowDropDownLine } from 'react-icons/ri';
import RichTextEditor from '../shared/RichTextEditor';
import { useStore } from '../../store/context-store';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import {
  FormProvider,
  RHFCustomSelect,
  RHFRichTextEditor,
  RHFSelect,
  RHFTextField,
} from '../../hooks/hook-form';

const AddQuestionsInfo = props => {
  const [Store, StoreDispatch] = useStore();
  const [textEditor, setEditor] = useState('');
  const standardOptions = [
    { value: 'standard1', label: 'Standard 1' },
    { value: 'standard2', label: 'Standard 2' },
    { value: 'standard3', label: 'Standard 3' },
    { value: 'standard4', label: 'Standard 4' },
  ];
  const {
    questionForm,
    activeTab,
    setActiveTab,
    questionFormSubmit,
    handlePreviousTab,
  } = props;
  const [selectStandardOption, setSelectStandardOption] =
    useState('Select Standard');

  const { handleSubmit } = questionForm;

  const subjectOptions = [
    { value: 'subject1', label: 'Subject 1' },
    { value: 'subject2', label: 'Subject 2' },
    { value: 'subject3', label: 'Subject 3' },
    { value: 'subject4', label: 'Subject 4' },
  ];
  const [selectSubjectOption, setSelectSubjectOption] =
    useState('Select Subject');

  const chapterOptions = [
    { value: 'chapter1', label: 'Chapter 1' },
    { value: 'chapter2', label: 'Chapter 2' },
    { value: 'chapter3', label: 'Chapter 3' },
    { value: 'chapter4', label: 'Chapter 4' },
  ];
  const [selectChapterOption, setSelectChapterOption] =
    useState('Select Chapter');

  const topicOptions = [
    { value: 'topic1', label: 'Topic 1' },
    { value: 'topic2', label: 'Topic 2' },
    { value: 'topic3', label: 'Topic 3' },
    { value: 'topic4', label: 'Topic 4' },
  ];
  const [selectTopicOption, setSelectTopicOption] = useState('Select Topic');

  const [questionBankData, setQuestionBankData] = useState(
    {
      title: '',
      description: '',
      standard: '',
      subject: '',
      chapter: '',
      topic: '',
    } || {},
  );
  const handleChange = e => {
    const { name, value } = e.target;
    setQuestionBankData({
      ...questionBankData,
      [name]: value,
    });
    if (questionBankData) {
      StoreDispatch({
        type: 'ADD_QUESTION_BANK',
        payload: questionBankData,
      });
    }
  };
  // useEffect(() => {
  //   const { title, description, standard, subject, chapter, topic } =
  //     questionBankData;
  //   StoreDispatch({
  //     type: 'ADD_QUESTION_BANK',
  //     payload: { title, description, standard, subject, chapter, topic },
  //   });
  // }, []);
  const onSubmit = () => {
    setActiveTab(activeTab + 1);
  };
  function handleTextEditChange(value) {
    setEditor(value);
  }
  return (
    <div className='w-full max-w-screen mx-auto text-white'>
      <FormProvider methods={questionForm} onSubmit={handleSubmit(onSubmit)}>
        <div className='p-8 rounded-md mt-6 border border-gray-700 h-[70%] w-full max-w-screen mx-auto bg-secondary__fill'>
          <h3 className='mb-2 text-left'>
            Exam Title&nbsp;<span className='text-danger'>*</span>
          </h3>
          <div className='flex'>
            <RHFTextField
              className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
              placeholder='Enter Exam Title'
              name='examTitle'
              defaultValue=''
              control={questionForm.control}
            />
          </div>
          <h3 className='mt-6 mb-2 text-left'>Description</h3>
          <div className=' border rounded-md w-full max-w-screen mx-auto border-gray-700'>
            <RichTextEditor
              name='description'
              placeholder={'Enter Description'}
              onChange={handleTextEditChange}
              value={textEditor}
            />
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Standard&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <RHFSelect
                  className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                  placeholder='Enter Exam Title'
                  name='standard'
                  defaultValue=''
                  options={standardOptions}
                />
              </div>
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Subject&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <RHFSelect
                  className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                  placeholder='Enter Exam Title'
                  name='subject'
                  defaultValue=''
                  options={subjectOptions}
                />
              </div>
            </div>
          </div>
          <div className='flex w-full max-w-screen mx-auto'>
            <div className='text-left w-full max-w-screen mx-auto 2xl:mr-8 mr-8'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Chapter&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <RHFSelect
                  className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                  placeholder='Enter Exam Title'
                  name='chapter'
                  defaultValue=''
                  options={chapterOptions}
                />
              </div>
            </div>
            <div className='text-left w-full max-w-screen mx-auto'>
              <h1 className='mt-6 mb-2 text-left'>
                Select Topic&nbsp;<span className='text-danger'>*</span>
              </h1>
              <div className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md'>
                <RHFSelect
                  className='h-11 border text-sm bg-secondary__fill border-gray-600 rounded-md w-full max-w-screen mx-auto'
                  placeholder='Enter Exam Title'
                  name='topic'
                  defaultValue=''
                  options={topicOptions}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex 2xl:w-[100%] mt-8 lg:w-[100%] justify-between'>
          <button
            className='rounded-md flex justify-center bg-white w-24 h-8 text-black hover:bg-primary hover:text-white'
            onClick={handlePreviousTab}
            // disabled={activeTab === 0}
            type='button'
          >
            <img className='mt-[7%] mr-1 rotate-180' src={ArrowRight} alt='' />
            <h3 className='mt-1'>Previous</h3>
          </button>
          <button
            className='rounded-md flex justify-center bg-white w-24 h-8 text-black ml-auto hover:bg-primary hover:text-white'
            type='submit'
            ref={questionFormSubmit}
          >
            <h3 className='mt-1 mr-1'> Next</h3>
            <img className='mt-[7%]' src={ArrowRight} alt='' />
          </button>
        </div>
      </FormProvider>
    </div>
  );
};
export default AddQuestionsInfo;
