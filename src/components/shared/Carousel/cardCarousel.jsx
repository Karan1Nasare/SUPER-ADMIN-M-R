import React, { useEffect, useState } from 'react';
import { IconButton, Card } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CarouselItem from './carouselItem';

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
    { imageUrl: 'https://via.placeholder.com/300x150' },
  ];

  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className='relative mb-10 mt-8 w-full'>
      <div className='flex items-center justify-between mb-4'>
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: 'white',
            borderRadius: '50%',
            zIndex: 10,
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <div className='flex overflow-hidden w-full mx-4'>
          {' '}
          <div
            className='flex transition-transform duration-100'
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {items.map((item, index) => (
              <Card
                key={index}
                className='w-96  mx-2'
                sx={{ flex: '0 0 auto' }}
              >
                <div className='App bg-darkBlue flex items-center justify-center h-60'>
                  <CarouselItem
                    backgroundImage={item.imageUrl}
                    image={item.imageUrl}
                    active={index === currentIndex}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: 'white',
            borderRadius: '50%',
            zIndex: 10,
            '&:hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>

      <div className='carousel-indicators mt-4 flex gap-2 justify-center'>
        {Array.from({ length: items.length }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'bg-white' : 'bg-gray-400'} w-16 h-1 rounded-full transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
