import React, { useEffect, useState } from 'react';
import { GrLinkPrevious } from 'react-icons/gr';
import { IoMdAddCircleOutline } from 'react-icons/io';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';

import AddQuestionOption from './addQuestionOption';
import { FormProvider } from '../../../hooks/hook-form';

const AddQuestions = props => {
  // const schema = yup.object().shape({
  //   type: yup.string().oneOf(['MCQ', 'T/F', 'Summary']),
  //   marks: yup.number().min(1).required(),
  // });

  // const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
  //   {
  //     rules: {
  //       questionbankdetails: yup.array().of(questionSchema),
  //       control: questionListForm.control, // Pass control from useForm
  //     },
  //   },
  // );

  const { questionListForm } = props;
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = questionListForm;

  const [questionOptions, setQuestionOptions] = useState([
    <AddQuestionOption key={0} questionListForm={questionListForm} />,
  ]);
  const submitHandler = () => {};

  console.log('errors', errors);

  const addQuestion = () => {
    // append({ marks: undefined });
    setQuestionOptions([
      ...questionOptions,
      <AddQuestionOption
        key={questionOptions.length}
        questionListForm={questionListForm}
      />,
    ]);
  };
  useEffect(() => {
    if (!questionOptions.length) {
      addQuestion();
    }
  }, []);

  console.log('on watch', watch(), errors);
  const onSubmit = (data, event) => {
    event.preventDefault(); // Prevent default form submission behavior

    console.log('onSubmit called');
  };

  return (
    // <div className='w-44.1 h-39.3 '>
    //   <FormProvider methods={questionListForm}>
    //     <div className='w-44.1 h-[100%] rounded-md border border-gray-700 bg-secondary__fill flex flex-col'>
    //       <div className='flex mt-6'>
    //         <span className='ml-8 mr-3 mt-1'>
    //           <GrLinkPrevious />
    //         </span>
    //         <h3>Questions</h3>
    //       </div>
    //       <div className='flex-1 overflow-y-auto'>
    //         <div>
    //           {questionOptions.map((option, index) => (
    //             <div key={index}>{option}</div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className='lg:w-32 2xl:ml-[83%] lg:ml-[78%] mr-6 mb-6 text-sm h-8 text-primary flex items-center'
    //       type='button'
    //       onClick={() => handleSubmit(handleSubmit(submitHandler))}
    //     >
    //       <span className='mt-2 mr-2 ml-2'>
    //         <IoMdAddCircleOutline />
    //       </span>
    //       <h1 className='mt-1'>Add Questions</h1>
    //     </button>
    //   </FormProvider>
    // </div>
    <div className='w-44.1 h-39.3 '>
      <div className='w-44.1 h-[100%] rounded-md border border-gray-700 bg-secondary__fill flex flex-col'>
        <div className='flex mt-6'>
          <span className='ml-8 mr-3 mt-1'>
            <GrLinkPrevious />
          </span>
          <h3>Questions</h3>
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div>
            {questionOptions.map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </div>
        </div>
      </div>
      <button
        className='lg:w-32 2xl:ml-[83%] lg:ml-[78%] mr-6 mb-6 text-sm h-8 text-primary flex items-center'
        type='button'
      >
        <span className='mt-2 mr-2 ml-2'>
          <IoMdAddCircleOutline />
        </span>
        <h1 className='mt-1'>Add Questions</h1>
      </button>
    </div>
  );
};

export default AddQuestions;
