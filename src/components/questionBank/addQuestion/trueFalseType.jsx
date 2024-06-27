import React from 'react';
import { RHFTextField } from '../../../hooks/hook-form';
import { RHFCheckbox } from '../../../hooks/hook-form/RHFCheckbox';

const TrueFalseType = ({ questionListForm, index }) => {
  const { setValue } = questionListForm;
  const handleOptionChange = value => {
    setValue(`questions.${index}.option`, value);
  };

  return (
    <div>
      <div className='text-white flex mt-5 ml-6'>
        <h3 className='text-lg mt-2 mr-2'>1.</h3>
        <RHFTextField
          className='border border-gray-700 h-10 ml-4 w-3/4 text-xs p-2'
          type='text'
          name={`questions.${index}.question`}
          id={`questions.${index}.question`}
          placeholder='Enter question text'
        />
      </div>
      <div className='ml-7'>
        <h3 className='text-left text-base mt-5'>Options</h3>
        <div className='flex mt-4'>
          <RHFCheckbox
            name={`questions.${index}.option`}
            id={`questions.${index}.option_true`}
            value={true}
            onChange={() => handleOptionChange(true)}
          />
          <h3 className='mt-2 text-sm ml-3'>True</h3>
        </div>
        <div className='flex mt-4'>
          <RHFCheckbox
            name={`questions.${index}.option`}
            id={`questions.${index}.option_false`}
            value={false}
            onChange={() => handleOptionChange(false)}
          />
          <h3 className='mt-2 text-sm ml-3'>False</h3>
        </div>
      </div>
    </div>
  );
};

export default TrueFalseType;
