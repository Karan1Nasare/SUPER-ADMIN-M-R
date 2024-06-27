import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

const EditDeleteQuestion = props => {
  const navigate = useNavigate();
  const { questionListForm, setCurrentIndex, setEditQuestion, remove, fields } =
    props;
  const { getValues, reset } = questionListForm;
  const questionValues = getValues()?.questions;
  const questionList = questionValues?.slice(0, questionValues.length - 1);

  const handleOnClick = () => {
    questionValues.pop();
    navigate('/questionBank/review', {
      state: { questions: questionValues },
    });
  };

  return (
    <div className='ml-8 p-8 h-39.3 border border-gray-700 rounded-md bg-secondary__fill '>
      <h3 className='text-left text-lg'>Edit/Delete Questions</h3>
      {Array.isArray(questionList) &&
        questionList?.map((question, index) => {
          return (
            <div className='mt-6' key={index}>
              <div className='text-sm text-left text-primary'>
                {question?.marks}
              </div>
              <div className='flex mb-4 justify-between mt-6'>
                <div className='xl:text-base text-left lg:text-xs text-zinc-300'>
                  {question?.question}
                </div>
                <div className='flex gap-1.5'>
                  <span
                    onClick={() => {
                      // reset(getValues());
                      setCurrentIndex(index);
                      // remove(fields.length - 1);
                      setEditQuestion(true);
                    }}
                  >
                    <FaRegEdit style={{ fontSize: '1.2em' }} />
                  </span>
                  <span
                    className='text-red-600'
                    onClick={() => {
                      remove(index);
                    }}
                  >
                    <RiDeleteBin6Fill style={{ fontSize: '1.2em' }} />
                  </span>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      <button
        onClick={handleOnClick}
        className='w-20 h-8 mt-[21%] bg-slate-700 bg-opacity-70 text-sm text-gray-200 rounded-md'
      >
        Review
      </button>
    </div>
  );
};
export default EditDeleteQuestion;
