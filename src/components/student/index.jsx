import React, { useState } from 'react';
import { MdOutlineSegment } from 'react-icons/md';
import { IoIosAddCircle } from 'react-icons/io';
import { TiUserAdd } from 'react-icons/ti';
import { FaEye } from 'react-icons/fa';
import Cards from './components/cards'; // Make sure the path is correc

const Index = () => {
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState(null); // State to hold filtered cards

  const handleAddStudentsClick = () => {
    console.log('onAddStudentsClick');
  };

  const handleAddMultipleClick = () => {
    console.log('onMultipleClick');
  };

  const cards = [
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'namya Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
    {
      name: 'Chirag Gondaliya',
      email: 'abcorg@gmail.com',
      number: '+91 6353264115',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s',
      icon: <FaEye />,
      standardName: 'Standard',
      standard: '10th',
      enrollment: '45675467',
      enrollmentName: 'enrollment',
    },
  ];

  const handleSearchClick = () => {
    // Implement filtering logic based on card names, enrollment, or standard
    const filtered = cards.filter(
      card =>
        card.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.enrollment.toLowerCase().includes(inputValue.toLowerCase()) ||
        card.standard.toLowerCase().includes(inputValue.toLowerCase()),
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
      <div className='mt-3 w-screen overflow-y-scroll'>
        <h1 className='text-white text-2xl lg:text-3xl text-left'>Student</h1>
        <div className='bg-secondary__fill rounded-md lg:h-32 p-4 mt-4 lg:w-[79%] h-24 flex mr-2 md:w-[80%] w-[78%] justify-between'>
          <div className='flex'>
            <input
              key={7}
              onChange={handleInputChange}
              value={inputValue}
              className='p-2 lg:w-96 lg:h-12 lg:mt-6 rounded-sm text-white w-80 mt-4 opacity-45 h-8 bg-gray-600'
              type='text'
              placeholder=' Search Name, Innrollment, Standard'
            />
            <span
              onClick={handleSearchClick}
              className='p-2 lg:h-12 lg:w-12 lg:mt-6 lg:p-4 mt-4 bg-opacity-45 rounded-sm text-white m-2 h-8 w-8 bg-gray-600'
            >
              <MdOutlineSegment />
            </span>
          </div>
          <div className='flex mt-4'>
            <div
              onClick={handleAddStudentsClick}
              className='flex mx-2 lg:h-12 mr-4 lg:w-36 mt-2 bg-white h-8 w-32 rounded-md'
            >
              <span className=' lg:pt-4 pt-2 pl-1 pr-1'>
                <TiUserAdd />
              </span>
              <button>Add Students</button>
            </div>
            <div
              onClick={handleAddMultipleClick}
              className='flex lg:w-36 mt-2 lg:h-12 bg-white h-8 w-32 rounded-md'
            >
              <span className='pt-2 lg:pt-4 pl-1 pr-1'>
                <IoIosAddCircle />
              </span>
              <button>Add Multiple</button>
            </div>
          </div>
        </div>
      </div>
      <Cards cards={filteredCards || cards} />
    </>
  );
};

export default Index;
