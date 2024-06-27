import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { TiUserAdd } from 'react-icons/ti';
import { RiArrowDropDownLine, RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import Cards from './cards';
import AddQuestionTab from './addQuestionTab';
import Dropdown from '../../shared/DropDown';

const Question = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(null);
  const [isAddQuestionClicked, setisAddQuestionClicked] = useState(false);

  const handleAddQuestionBankClick = () => {
    console.log('Select Standard');
  };
  const planValidityOptions = ['Yearly', 'Half Quarter', 'Monthly', 'Weekly'];
  const [selectPlanValidityOption, setSelectPlanValidityOption] =
    useState('Select Standard');

  const cards = [
    {
      name: 'Namya',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit style={{ fontSize: '1.2em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.3em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye />,
      icon2: <FiEdit />,
      icon3: <RiDeleteBin5Fill />,
    },
  ];

  const handleSearchClick = () => {
    const filtered = cards.filter(card =>
      card.name.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredCards(filtered);
    if (filtered.length === 0) {
      setFilteredCards([]);
    }
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {!isAddQuestionClicked ? (
        <div className='mt-4 overflow-x-hidden '>
          <h1 className='text-2xl text-white text-left'>Question Bank</h1>
          <div className='mt-3 w-screen overflow-y-scroll'>
            <div className=' bg-secondary__fill border border-gray-700 rounded-xl p-4 mt-4 lg:h-20 2xl:h-28 flex mr-2 2xl:w-[80.5%] lg:w-[78%]'>
              <div className='flex 2xl:pl-2'>
                <input
                  key={7}
                  onChange={handleInputChange}
                  value={inputValue}
                  className='p-2 2xl:w-64 2xl:h-10 2xl:mt-5 bg-secondary__fill__dark rounded-md text-white text-sm lg:w-40 mt-2 lg:h-8'
                  type='text'
                  placeholder=' Search Name, Innrollment, Standard'
                />
                <span
                  onClick={handleSearchClick}
                  className='p-2 2xl:mt-5 mt-2 bg-secondary__fill__dark rounded-md text-white m-2 2xl:h-10 2xl:w-10 lg:h-8 lg:w-8'
                >
                  <Icon
                    icon={'octicon:filter-16'}
                    className='text-white'
                    width={20}
                  />
                </span>
              </div>
              <div className=' mr-2 flex 2xl:mt-5 mt-2'>
                <div className='text-white z-40 2xl:w-40 2xl:h-10  '>
                  <Dropdown
                    options={planValidityOptions}
                    selectedOption={selectPlanValidityOption}
                    setSelectedOption={setSelectPlanValidityOption}
                  />
                  {/* <span className='pr-1'>
                    <Icon
                      icon={'teenyicons:down-outline'}
                      className='text-white'
                      width={20}
                    />
                  </span> */}
                </div>
              </div>
              <div className=' mr-2 flex 2xl:mt-5 mt-2'>
                <div className='text-white z-40 2xl:w-11.06 2xl:h-10  '>
                  <Dropdown
                    options={planValidityOptions}
                    selectedOption={selectPlanValidityOption}
                    setSelectedOption={setSelectPlanValidityOption}
                  />
                  {/* <span className='pr-1'>
                    <Icon
                      icon={'teenyicons:down-outline'}
                      className='text-white'
                      width={20}
                    />
                  </span> */}
                </div>
              </div>
              <div className=' mr-2 flex 2xl:mt-5 mt-2'>
                <div className='text-white z-40 2xl:w-11.06 2xl:h-10  '>
                  <Dropdown
                    options={planValidityOptions}
                    selectedOption={selectPlanValidityOption}
                    setSelectedOption={setSelectPlanValidityOption}
                  />
                  {/* <span className='pr-1'>
                    <Icon
                      icon={'teenyicons:down-outline'}
                      className='text-white'
                      width={20}
                    />
                  </span> */}
                </div>
              </div>
              <div className='  flex 2xl:mt-5 mt-2'>
                <div className='text-white z-40 2xl:w-11.06 2xl:h-10  '>
                  <Dropdown
                    options={planValidityOptions}
                    selectedOption={selectPlanValidityOption}
                    setSelectedOption={setSelectPlanValidityOption}
                  />
                  {/* <span className='pr-1'>
                    <Icon
                      icon={'teenyicons:down-outline'}
                      className='text-white'
                      width={20}
                    />
                  </span> */}
                </div>
              </div>
              <div className='flex ml-7 2xl:mt-5 lg:mt-2'>
                <div className='flex 2xl:w-44 bg-white lg:h-8 2xl:h-11 lg:w-40 text-sm rounded-md'>
                  <span className='lg:pt-[8%] 2xl:pt-[7%]  2xl:pl-3 pl-1  pr-1'>
                    <TiUserAdd />
                  </span>
                  <button onClick={() => setisAddQuestionClicked(true)}>
                    Add Question Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Cards cards={filteredCards || cards} />
        </div>
      ) : (
        <AddQuestionTab />
      )}
    </>
  );
};

export default Question;
