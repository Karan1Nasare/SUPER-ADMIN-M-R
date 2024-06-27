import React, { useState } from 'react';
import { Typography } from '@mui/material';

import LanguageHeader from './LanguageHeader/header';
import SearchBar from './LanguageHeader/searchBar';
import useLanguage from './hooks/useLanguage';
import LanguageCard from './LanguageCard/languageCard';
import Pagination from '../shared/Pagination';

const ITEMS_PER_PAGE = 12;

const LanguageView = () => {
  const { languageData } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const totalItems = languageData?.length || 0;

  const filteredItems = languageData.filter(language =>
    language.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const lastCardIndex = currentPage * ITEMS_PER_PAGE;
  const firstCardIndex = lastCardIndex - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(firstCardIndex, lastCardIndex);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className='h-full flex flex-col'>
        <Typography
          className='flex align-items-start'
          variant='mainLayoutTitle'
        >
          Language
        </Typography>
        <LanguageHeader />
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
        <div className='flex-1'>
          <div className='grid lg:grid-cols-3 gap-3 sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1'>
            {currentItems.map((language, index) => (
              <LanguageCard key={index} title={language.title} />
            ))}
          </div>
        </div>
        {totalItems > ITEMS_PER_PAGE && (
          <div>
            <Pagination
              totalCards={filteredItems.length}
              cardsPerPage={ITEMS_PER_PAGE}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageView;
