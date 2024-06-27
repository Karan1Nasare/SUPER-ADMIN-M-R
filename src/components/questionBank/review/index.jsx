import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import MCQReview from './MCQReview';
import TrueFalse from './TrueFalse';
import Summary from './Summary';

const Review = () => {
  const location = useLocation();
  const { questions } = location.state || { questions: [] };

  return (
    <>
      <div className='overflow-x-hidden overflow-y-hidden ml-[2%] h-screen'>
        <Header questions={questions} />
        <div className='mt-8 overflow-x-scroll w-full max-w-screen mx-auto h-auto flex gap-7'>
          {questions.map((question, index) => {
            console.log('question', question);
            switch (question.question_type) {
              case 'mcq':
                return (
                  <MCQReview
                    question={question}
                    key={index}
                    index={index}
                    review
                  />
                );
              case 'TF':
                return (
                  <TrueFalse
                    question={question}
                    key={index}
                    index={index}
                    review
                  />
                );
              case 'question':
                return (
                  <Summary
                    question={question}
                    key={index}
                    index={index}
                    review
                  />
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Review;
