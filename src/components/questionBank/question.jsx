import React, { useEffect, useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { TiUserAdd } from 'react-icons/ti';
import { RiArrowDropDownLine, RiDeleteBin5Fill } from 'react-icons/ri';
import { FaEye } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Cards from './cards';
import AddQuestionTab from './addQuestionTab';
import useFetcher from '../../hooks/useFetcher';
import Dropdown from '../shared/DropDown';
import URLS from '../../constants/api';
import {
  getgetallcoursedata,
  getquestionbanks,
} from '../../service/questionbank';
import { FormProvider, RHFSelect } from '../../hooks/hook-form';

const Question = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(null);
  const [topiccardlist, settopiccardlist] = useState([]);
  const [isAddQuestionClicked, setisAddQuestionClicked] = useState(false);
  const { fetcher } = useFetcher();
  const navigate = useNavigate();
  const [standardlist, setstandardlist] = useState([]);
  const standardoption = standardlist.map(item => {
    return {
      label: item?.name,
      value: item?.id,
    };
  });
  const handleAddQuestionBankClick = () => {
    console.log('Select Standard');
  };
  const standardOptions = [
    'Standard 1',
    'Standard 1',
    'Standard 1',
    'Standard 1',
  ];
  const [selectStandardOption, setSelectStandardOption] = useState('');
  const subjectOptions = ['Subject 1', 'Subject ', 'Subject ', 'Subject '];
  const [selectSubjectOption, setSelectSubjectOption] =
    useState('Select Subject');
  const chapterOptions = ['Chapter 1', 'Chapter 1', 'Chapter 1', 'Chapter 1'];
  const [selectChapterOption, setSelectChapterOption] =
    useState('Select Chapter');
  const topicOptions = ['Topic 1', 'Topic 1', 'Topic 1', 'Topic 1'];
  const [selectTopicOption, setSelectTopicOption] = useState('Select Topic');
  const cards = [
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
    {
      name: 'Topic Name',
      count: '50',
      icon1: <FaEye style={{ fontSize: '1.2em' }} />,
      icon2: <FiEdit style={{ fontSize: '1.4em' }} />,
      icon3: <RiDeleteBin5Fill style={{ fontSize: '1.5em' }} />,
    },
  ];

  const method = useForm();
  const { watch, setValue } = method;
  const handleSearchClick = () => {
    const filtered = topiccardlist.filter(card =>
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

  useEffect(() => {
    fetcher({
      key: 'getallcoursedata',
      executer: () => getgetallcoursedata(),
      onSuccess: res => {
        setstandardlist(res?.data?.data);
        // setValue('standard', parseInt(res?.data?.data[0]?.id, 10));
      },
      showSuccessToast: false,
    });
    fetcher({
      key: 'getquestionbanks',
      executer: () => getquestionbanks(),
      onSuccess: res => {
        settopiccardlist(res?.data?.data?.data || []);
        setSelectStandardOption(res?.data?.data[0]?.name);
      },
      showSuccessToast: false,
    });
  }, []);
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (
        name === 'standard' &&
        value[name] !== undefined &&
        value[name] !== ''
      ) {
        fetcher({
          key: 'getsubject',
          executer: () => getgetallcoursedata({ course_id: value.standard }),
          showSuccessToast: false,
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormProvider methods={method}>
      {!isAddQuestionClicked ? (
        <div className='mt-4 overflow-x-hidden'>
          <h1 className='text-3xl text-white text-left'>Question Bank</h1>
          <div className='mt-3 w-full max-w-screen mx-auto overflow-y-scroll'>
            <div className=' bg-secondary__fill border p-8 w-full 2xl:h-6.5 xl: flex max-w-screen mx-auto border-gray-700 rounded-xl'>
              <div className='flex 2xl:pl-2'>
                <input
                  key={7}
                  onChange={handleInputChange}
                  value={inputValue}
                  className='p-2 w-64 h-11 mr-3 bg-secondary__fill__dark rounded-md text-white text-sm'
                  type='text'
                  placeholder=' Search Name, Innrollment, Standard'
                />
                <span
                  onClick={handleSearchClick}
                  className='p-3 bg-secondary__fill__dark mr-3 rounded-md text-white h-11 w-11'
                >
                  <Icon
                    icon={'octicon:filter-16'}
                    className='text-white'
                    width={20}
                  />
                </span>
              </div>
              <div className='2xl:grid 2xl:grid-cols-4 2xl:gap-2 2xl:w-2/3 xl:grid xl:grid-cols-2 xl:gap-2 lg:grid lg:grid-cols-1 lg:gap-2 md:grid md:grid-cols-1 md:gap-2'>
                <div className=' w-40 rounded-md h-11 '>
                  {/* <Dropdown
                    options={standardoption}
                    selectedOption={selectStandardOption}
                    setSelectedOption={setSelectStandardOption}
                  /> */}
                  <RHFSelect
                    name='standard'
                    options={standardoption}
                    defaultValue={standardoption[0]?.value}
                  />
                </div>
                <div className='w-40 rounded-md h-11 '>
                  <RHFSelect name='standard' options={standardoption} />

                  {/* <Dropdown
                    options={subjectOptions}
                    selectedOption={selectSubjectOption}
                    setSelectedOption={setSelectSubjectOption}
                  /> */}
                </div>
                <div className='text-white w-40 rounded-md h-11'>
                  <RHFSelect name='standard' options={standardoption} />
                </div>
                <div className='text-white w-40 rounded-md  h-11 '>
                  <RHFSelect name='standard' options={standardoption} />
                </div>
              </div>
              <div className='flex '>
                <div className='flex w-44 ml-3 bg-white h-11 text-sm rounded-md'>
                  <span className='pt-[8%] pl-3 pr-1'>
                    <TiUserAdd />
                  </span>
                  <button
                    onClick={() => navigate('/questionBank/addQuestions')}
                  >
                    Add Question Bank
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Cards cards={filteredCards || topiccardlist} />
        </div>
      ) : (
        <AddQuestionTab />
      )}
    </FormProvider>
  );
};
export default Question;
