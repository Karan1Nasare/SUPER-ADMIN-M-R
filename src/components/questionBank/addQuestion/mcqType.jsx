import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RichTextEditor from '../../shared/RichTextEditor';
import { RHFTextField } from '../../../hooks/hook-form';
import { RHFCheckbox } from '../../../hooks/hook-form/RHFCheckbox';

const McqType = props => {
  const optionsList = [
    { id: 1, text: '', checked: false },
    { id: 2, text: '', checked: false },
    { id: 3, text: '', checked: false },
    { id: 4, text: '', checked: false },
  ];
  const [selectedOptions, setSelectedOptions] = useState();
  const { questionListForm, index } = props;
  const { setValue, setError } = questionListForm;

  return (
    <div className=''>
      <div className='text-white ques flex mt-6 ml-[6%]'>
        <h3 className='text-lg mt-2 mr-2'>1.</h3>
        <RHFTextField
          className='bg-blue border border-gray-700 h-10 ml-4 w-[70%] text-xs p-2'
          type='text'
          name={`questions.${index}.question`}
          id={`questions.${index}.question`}
          // control={questionListForm.control}
          placeholder='Enter question text'
        />
      </div>
      <div className='ml-[6%]'>
        <h3 className='text-left my-6'>Options</h3>
        {optionsList.map((option, idx) => (
          <div className='flex mb-5' key={option.id}>
            <RHFCheckbox
              name={`questions.${index}.question_right_ans`}
              id={`questions.${index}.question_right_ans`}
              value={idx + 1}
              onChange={() => {
                setValue(`questions.${index}.question_right_ans`, idx + 1);
                setError(`questions.${index}.question_right_ans`, '');
              }}
            />
            <RHFTextField
              className='bg-blue border border-gray-700 h-10 ml-6 w-[68%] text-xs p-2'
              type='text'
              name={`questions.${index}.question_ans_option_${idx + 1}`}
              id={`questions.${index}.question_ans_option_${idx + 1}`}
              // onClick={handleInputClick}
              placeholder='Enter answer text'
            />
            {/* <RichTextEditor /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default McqType;
