import React from 'react';
import { FaEye } from 'react-icons/fa';

const Cards = ({ cards }) => {
  return (
    <div className='flex flex-wrap gap-4 w-screen mt-3'>
      {/* Render all cards if no search query is entered or filteredCards is null */}
      {!cards || cards.length === 0 ? (
        <p className='text-white'>No cards found.</p>
      ) : (
        cards.map((card, index) => (
          <div
            key={index}
            className='bg-secondary__fill lg:p-6 lg:h-52 lg:w-[25.6%] md:w-[25.5%] mt-2 h-36 md:h-36 w-[24.6%] p-2 mr-2 rounded-md'
          >
            <div className='flex text-white justify-between'>
              <div className='flex mx-2'>
                <img
                  className='h-12 lg:h-20 lg:w-20 mt-1 w-12 rounded-full'
                  src={card.image}
                  alt=''
                />
                <div className='text-xs lg:text-sm lg:pt-2 text-left mx-2 mt-1 '>
                  <h2>{card.name}</h2>
                  <h3>{card.email}</h3>
                  <h3>{card.number}</h3>
                </div>
              </div>
              <span className='mt-1 lg:mt-4 mr-2'>{card.icon}</span>
            </div>
            <div className='flex mt-2 px-2 justify-between'>
              <div>
                <h3 className=' text-grey__primary__light lg:text-xl text-sm'>
                  Standard
                </h3>
                <div className=' mt-1 lg:w-16 bg-tealGreen bg-opacity-20 w-12 rounded-full'>
                  <h3 className=' lg:text-xl text-tealGreen text-sm'>
                    {card.standard}
                  </h3>
                </div>
              </div>
              <div className=''>
                <h3 className=' lg:text-xl text-grey__primary__light text-sm'>
                  Enrollment
                </h3>
                <div className=' mt-1 lg:w-32 bg-success bg-opacity-20 w-20 pl-2 rounded-full'>
                  <h3 className=' lg:text-xl text-success mr-2 text-sm '>
                    {card.enrollment}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cards;
