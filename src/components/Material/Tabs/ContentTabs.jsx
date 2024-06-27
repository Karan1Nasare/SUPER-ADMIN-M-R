/* eslint-disable import/no-cycle */
import React from 'react';
import Accordion from './Accordion';
import Loader from '../../shared/Loader';
import useContent from '../hooks/useContent';
import Pagination from '../../shared/Pagination';

const ContentTabs = () => {
  const {
    contentList,
    loading,
    lockedContent,
    DeleteContentById,
    currentPage,
    setCurrentPage,
    setSearchTerm,
    searchTerm,
    totalShowItems,
    itemsPerPage,
  } = useContent();

  let content;

  if (loading) {
    content = <Loader />;
  } else if (totalShowItems > 0) {
    content = (
      <>
        <div className='space-y-4'>
          {contentList.map((item, index) => (
            <Accordion
              key={index}
              chapter={item.chapter}
              subtopics={item.subtopics}
              locked={item.locked}
              data={item}
              count={item?.id}
              isLocked={lockedContent}
              onDelete={DeleteContentById}
            />
          ))}
        </div>
        <div>
          <Pagination
            totalCards={searchTerm ? contentList?.length : totalShowItems}
            cardsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </>
    );
  } else {
    content = <p className='text-white'>No records found.</p>;
  }

  return <div className='min-h-screen text-white p-6'>{content}</div>;
};

export default ContentTabs;
