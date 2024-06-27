import React, { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import * as yup from 'yup';
import { LuPlusCircle } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import objectIcon from '../../assets/icon/objectIcon.svg';
import EditDeleteQuestion from './editDeleteQuestion';
import AddQuestions from './addQuestion';
import AddQuestionOption from './addQuestion/addQuestionOption';
import { FormProvider } from '../../hooks/hook-form';

const BlankAddQuestions = props => {
  const { addQuestionForm, questionListForm, questionForm, handlePreviousTab } =
    props;
  const [addQuestion, setAddQuestion] = useState(false);
  const [isEditQuestion, setEditQuestion] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    reset,
    getValues,
    clearErrors,
    formState: { errors, isValid },
  } = questionListForm;

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

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });

  const { getValues: questionFormValue } = questionForm;

  const [currentIndex, setCurrentIndex] = useState(fields.length - 1);

  const addQuestionHandler = () => {
    append(defaultAddQuestion);
    setCurrentIndex(fields.length - 1);
    clearErrors();
    // reset(getValues());
    setEditQuestion(false);
  };

  useEffect(() => {
    setCurrentIndex(fields.length - 1);
  }, [fields]);

  console.log('getValues', getValues());
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate('/questionBank');
    console.log('questionFormValue', questionFormValue());
    console.log('getValues', getValues());
  };

  return (
    <div className='text-white'>
      <FormProvider
        methods={questionListForm}
        onSubmit={handleSubmit(onSubmit)}
        onError={console.log('on errors', errors)}
      >
        <div className='flex mb-7 w-full max-w-screen mx-auto mt-4'>
          {fields.length ? (
            fields.map((field, index) =>
              index === currentIndex ? (
                <div className='w-1/2' key={index}>
                  <div className='bg-secondary__fill px-6 pr-16 rounded border border-gray-700'>
                    <AddQuestionOption
                      questionListForm={questionListForm}
                      index={index}
                      field={field}
                    />
                  </div>
                  <div className='flex justify-end'>
                    <Button
                      onClick={() => {
                        if (isEditQuestion) {
                          reset(getValues());
                          setEditQuestion(false);
                          // addQuestionHandler();
                          return;
                        }
                        if (isValid) {
                          addQuestionHandler();
                        }
                        // const { questions } = getValues();
                        // console.log('questions123', questions);
                        // questions.splice(questions.length - 1, 1);
                        // console.log('questions', questions);
                        // setValue('questions', questions);
                      }}
                      // type='submit'
                    >
                      <span className='mr-1'>
                        <LuPlusCircle />
                      </span>
                      <h2>Add Question</h2>
                    </Button>
                  </div>
                </div>
              ) : null,
            )
          ) : (
            <div className='w-1/2 h-39.3 rounded-md border border-gray-700 pb-24 bg-secondary__fill'>
              <div className='flex justify-center items-center'>
                <img
                  className='w-84 2xl:w-96 mt-48 mb-3 center'
                  src={objectIcon}
                  alt=''
                />
              </div>
              <h3 className='mt-[%]'>
                <span
                  className='text-primary underline text-base mr-1'
                  onClick={addQuestionHandler}
                >
                  Click Here
                </span>
                to Add Questions
              </h3>
            </div>
          )}
          <div className='w-1/2'>
            <EditDeleteQuestion
              questionListForm={questionListForm}
              setCurrentIndex={setCurrentIndex}
              setEditQuestion={setEditQuestion}
              remove={remove}
              fields={fields}
            />
          </div>
        </div>
        <div className='flex w-full max-w-screen mx-auto justify-between'>
          <button
            className='flex justify-center rounded-md bg-white w-24 h-8 text-black hover:bg-primary hover:text-white'
            onClick={handlePreviousTab}
            type='button'
          >
            <img className='mt-[7%] mr-1 rotate-180' src={ArrowRight} alt='' />
            <h3 className='mt-1'>Previous</h3>
          </button>
          <button
            className='rounded-md bg-white justify-center flex w-24 h-8 text-black ml-auto hover:bg-primary hover:text-white'
            type='button'
            onClick={onSubmit}
          >
            <h3 className='mt-1 mr-1'> Submit</h3>
            <img className='mt-[7%]' src={ArrowRight} alt='' />
          </button>
        </div>
      </FormProvider>
    </div>
  );
};

export default BlankAddQuestions;
