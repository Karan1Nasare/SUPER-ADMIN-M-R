import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import SummaryType from './summaryType';
import TrueFalseType from './trueFalseType';
import McqType from './mcqType';
import { RHFTextField } from '../../../hooks/hook-form';
import { useStore } from '../../../store/context-store';

const AddQuestionOption = props => {
  const [Store, StoreDispatch] = useStore();
  const { questionListForm } = props;
  const { setValue, watch } = questionListForm;
  const { index, field } = props;
  const selectedQuestionType = watch(`questions.${index}.question_type`);

  const handleQuestionType = option => {
    setValue(`questions.${index}.question_type`, option);
  };

  useEffect(() => {
    if (!selectedQuestionType) {
      handleQuestionType('question'); // Set a default question type if not set
    }
  }, []);

  return (
    <div className='mt-4'>
      <div className='flex ml-[10%] mt-6'>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary  hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'summary' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('question')}
          type='button'
        >
          Summary
        </button>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary  hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'mcq' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('mcq')}
          type='button'
        >
          MCQ
        </button>
        <button
          className={`w-36 h-9 text-xs mr-5 rounded-sm bg-primary text-orange__primary  hover:text-success hover:bg-success hover:bg-opacity-15 ${selectedQuestionType === 'TF' ? 'bg-success bg-opacity-15 text-success' : 'text-orange bg-orange bg-opacity-15'}`}
          onClick={() => handleQuestionType('TF')}
          type='button'
        >
          T/F
        </button>
      </div>
      <div className='h-10 ml-[10%] mt-5 rounded-sm w-40'>
        <RHFTextField
          className='text-white bg-blue w-full pl-2'
          type='number'
          id='marks'
          name={`questions.${index}.marks`}
          min='0'
          max='100'
          step='1'
          placeholder='Marks'
        />
      </div>
      {selectedQuestionType === 'question' && (
        <SummaryType questionListForm={questionListForm} index={index} />
      )}
      {selectedQuestionType === 'mcq' && (
        <McqType questionListForm={questionListForm} index={index} />
      )}
      {selectedQuestionType === 'TF' && (
        <TrueFalseType questionListForm={questionListForm} index={index} />
      )}
      <hr className='m-8 w-[100%] text-grey__primary__light' />
    </div>
  );
};

export default AddQuestionOption;
