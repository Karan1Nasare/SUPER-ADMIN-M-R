import React from 'react';

const Summary = ({ question, index }) => {
  return (
    <div
      className='p-7 text-base rounded-xl bg-secondary__fill border border-gray-700 h-auto'
      key={index}
    >
      <div className='flex text'>
        <h1 className='text-left mr-2 text-base text-primary'>
          {question.marks}
        </h1>
        <h1 className='text-primary'>Mark</h1>
      </div>
      <div className='flex text-white my-6'>
        <h3 className='text-xl mr-3 mt-2'>{index + 1}.</h3>
        <div className='w-29.6 h-2.6 px-3 rounded bg-blue justify-start items-center gap-4 inline-flex'>
          <h2 className='text-white text-sm font-normal'>
            {question.question}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;
