import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import AddQuestionsInfo from './addQuestionsInfo';
import BlankAddQuestions from './blankAddQuestions';
import combinedSchema from './schema/validationSchema';
import { FormProvider } from '../../hooks/hook-form';

const AddQuestionTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  const basicDetailSchema = yup.object().shape({
    examTitle: yup.string().required('Exam title is required'),
    description: yup.string(),
    standard: yup.string().required('Standard is required'),
    subject: yup.string().required('Subject is required'),
    chapter: yup.string().required('Chapter is required'),
    topic: yup.string().required('Topic is required'),
  });
  const questionSchema = yup.object().shape({
    question_type: yup.string().required().oneOf(['mcq', 'TF', 'question']),
    marks: yup
      .number()
      .required('Mark is required')
      .typeError('Marks should be a number'),
    question: yup.string().required('Question is required'),
    question_right_ans: yup.string().when('question_type', {
      is: val => val === 'mcq' || val === 'TF',
      then: schema => schema.required('Question answer is required'),
    }),
    question_ans_option_1: yup
      .string()
      .nullable()
      .when('question_type', {
        is: val => val === 'mcq' || val === 'TF',
        then: schema => schema.required('question option no 1 is required'),
      }),
    question_ans_option_2: yup.string().when('question_type', {
      is: val => val === 'mcq' || val === 'TF',
      then: schema => schema.required('question option no 2 is required'),
    }),
    question_ans_option_3: yup.string().when('question_type', {
      is: val => val === 'mcq' || val === 'TF',
      then: schema => schema.required('question option no 3 is required'),
    }),
    question_ans_option_4: yup.string().when('question_type', {
      is: val => val === 'mcq' || val === 'TF',
      then: schema => schema.required('question option no 4 is required'),
    }),
  });

  const questionListSchema = yup.object().shape({
    questions: yup.array().of(questionSchema),
  });
  const defaultAddQuestion = {
    marks: '',
    question_type: '',
    question: '',
    question_right_ans: '',
    question_ans_option_1: '',
    question_ans_option_2: '',
    question_ans_option_3: '',
    question_ans_option_4: '',
  };

  const questionFormSubmit = useRef();

  const handlePreviousTab = () => {
    console.log('handlePreviousTab');
    setActiveTab(prevTab => (prevTab > 0 ? prevTab - 1 : 0));
  };
  const questionForm = useForm({ resolver: yupResolver(basicDetailSchema) });
  const questionListForm = useForm({
    resolver: yupResolver(questionListSchema),
    defaultValues: { questions: [] },
  });

  const { isValid: isValidQuestionForm } = questionForm;

  const {
    formState: { errors: questionListEror },
  } = questionListForm;

  const handleTabClick = index => {
    if (index === 1) {
      questionFormSubmit?.current?.click();
    }
    if (isValidQuestionForm) setActiveTab(index);
  };

  console.log('questionListEror', questionListEror);
  const tabs = [
    {
      title: 'Basic Info',
      icon: <FaRegUserCircle />,
      component: (
        <AddQuestionsInfo
          questionForm={questionForm}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          questionFormSubmit={questionFormSubmit}
          handlePreviousTab={handlePreviousTab}
        />
      ),
    },
    {
      title: 'Add Questions',
      icon: <IoMdAddCircleOutline />,
      component: (
        <BlankAddQuestions
          questionListForm={questionListForm}
          questionForm={questionForm}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handlePreviousTab={handlePreviousTab}
        />
      ),
    },
  ];
  const handleNextTab = () => {
    setActiveTab(prevTab =>
      prevTab < tabs.length - 1 ? prevTab + 1 : prevTab,
    );
  };
  const onSubmit = () => {
    handleNextTab();
  };

  const {
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
    watch,
  } = questionForm;

  return (
    <div className=''>
      <div className='tabs'>
        <div className='flex'>
          {tabs.map((tab, index) => (
            <button
              type='button'
              key={index}
              onClick={() => handleTabClick(index)}
              className={`${
                index === activeTab
                  ? 'border-primary text-white'
                  : 'border-transparent text-white hover:text-white hover:border-white'
              } relative inline-flex items-center px-4 py-2 border-b-2 font-medium text-sm focus:outline-none`}
            >
              <div className='flex items-center'>
                <span
                  className={`mt-1 mr-2 ${
                    index === activeTab ? 'text-primary' : 'text-white'
                  }`}
                >
                  {tab.icon}
                </span>
                <h1
                  className={`${
                    index === activeTab ? 'text-primary' : 'text-white'
                  }`}
                >
                  {tab.title}
                </h1>
              </div>
            </button>
          ))}
        </div>
        <div className='mt-4 w-[100%]'>{tabs[activeTab].component}</div>
      </div>
    </div>
  );
};

export default AddQuestionTab;
