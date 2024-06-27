import React from 'react';

const TrueFalse = ({ question, index }) => {
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
      {[question.question_ans_option_1, question.question_ans_option_2].map(
        (option, idx) => (
          <div className='flex mb-4' key={idx}>
            <input
              className='mr-6 mt-3 appearance-none rounded h-5 w-5 border border-zinc-400'
              type='checkbox'
            />
            <div className='w-28.8 h-2.6 px-3 rounded bg-blue justify-start items-center gap-4 inline-flex'>
              <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
                <div className="text-white text-sm font-normal font-['Helvetica']">
                  True
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TrueFalse;
