import React from 'react';

const MCQReview = ({ question, index, review }) => {
  console.log('question', question);
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
      <h2 className='text-white text-left mb-6 text-base'>Options</h2>
      {[
        question.question_ans_option_1,
        question.question_ans_option_2,
        question.question_ans_option_3,
        question.question_ans_option_4,
      ].map((option, idx) => (
        <div className='flex mb-4' key={idx}>
          <input
            className='mr-6 mt-3 rounded h-5 w-5 border border-zinc-400 text-green-600 bg-gray-100 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            type='checkbox'
            checked={idx === question.question_right_ans}
            value={idx + 1}
          />
          <div
            className={`w-28.8 h-2.6 px-3 rounded ${idx === question.question_right_ans ? 'bg-bright_green' : 'bg-blue'} justify-start items-center gap-4 inline-flex`}
          >
            <div className='grow shrink basis-0 h-4 justify-start items-center gap-2.5 flex'>
              <div className="text-white text-sm font-normal font-['Helvetica']">
                {option}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MCQReview;
