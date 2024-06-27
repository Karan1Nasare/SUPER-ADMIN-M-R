import React from 'react';
import { RHFTextField } from '../../../hooks/hook-form';

const SummaryType = props => {
  const { questionListForm, index } = props;
  return (
    <div className='text-white flex mt-5 ml-[6%]'>
      <h3 className='text-lg mt-2 mr-2'>1.</h3>
      <RHFTextField
        className='bg-blue border border-gray-700 h-10 ml-4 w-[70%] text-xs'
        type='text'
        placeholder='Enter Your Question '
        id='question'
        name={`questions.${index}.question`}
        // control={questionListForm.control}
      />
    </div>
  );
};

export default SummaryType;
