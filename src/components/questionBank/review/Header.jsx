import React, { useState } from 'react';
import Dropdown from '../../shared/DropDown/index';
import back from '../../Icon/back.svg';

const Header = ({ questions }) => {
  const [inputValue, setInputValue] = useState('');
  const markOptions = ['1', '2', '3'];
  const [selectMarkOption, setSelectMarkOption] = useState('Mark');
  const questionTypeOptions = ['MCQ', 'T/F', 'Summary'];
  const [selectQuestionTypeOption, setSelectQuestionTypeOption] =
    useState('Question Type');
  const marks = questions.reduce((acc, obj) => Number(obj.marks) + acc, 0);
  return (
    <div>
      <div className='flex items-center'>
        <div className='border-r border-primary h-5' />
        <div className='flex items-center justify-between w-full'>
          <h1 className='ml-2 text-white text-lg text-left'>Preview</h1>
          {/* <div onClick={() => {}} className='flex mr-1'>
            <img
              src={back}
              alt=''
              className='text-white mt-[4%] w-8 h-8 mr-1'
            />
            <button className='text-white text-2xl'>Back</button>
          </div> */}
        </div>
      </div>
      <div className='bg-secondary__fill border border-gray-700 overflow-x-hidden w-full max-w-screen mx-auto rounded-xl p-4 mt-4 h-28 flex mr-2 '>
        <div className='pl-4 flex'>
          <input
            className='p-2 w-20.7 mr-2 h-2.6 mt-5 bg-secondary__fill__dark rounded-md text-white text-sm '
            type='text'
            placeholder='Search Name, Enrollment, Standard'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
        </div>
        <div className='flex mr-2 text-white mt-5 bg-secondary__fill__dark justify-between text-sm h-11 rounded-md'>
          <Dropdown
            options={markOptions}
            selectedOption={selectMarkOption}
            setSelectedOption={setSelectMarkOption}
          />
        </div>
        <div className='flex mr-2 text-white mt-5 bg-secondary__fill__dark justify-between text-sm h-11 rounded-md'>
          <Dropdown
            options={questionTypeOptions}
            selectedOption={selectQuestionTypeOption}
            setSelectedOption={setSelectQuestionTypeOption}
          />
        </div>
        <div className='flex ml-[12%] mt-2'>
          <div className='flex lg:w-36 mr-4 mt-1'>
            <h3 className='text-white text-base mt-4'>
              Total Questions: {questions.length}
            </h3>
          </div>
          <div className='flex w-28 mt-1 mr-3 '>
            <h3 className='text-white text-base mt-4'>Total Marks: {marks}</h3>
          </div>
          <div className='bg-white h-11 w-20 mt-2 text-sm rounded-md'>
            <button className='pt-3'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
