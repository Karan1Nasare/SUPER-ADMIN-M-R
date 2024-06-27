import React from 'react';
import './pagination.css';

const Pagination = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Adjust this to show more or fewer pages

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i += 1) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage === 1) {
        startPage = 2;
        endPage = 4;
      } else if (currentPage === totalPages) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }

      pageNumbers.push(1);

      if (startPage > 2) {
        pageNumbers.push('...');
      }

      for (let i = startPage; i <= endPage; i += 1) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }

      pageNumbers.push(totalPages); // Always include the last page
    }

    return pageNumbers;
  };

  return (
    <div className='flex justify-center items-center mt-5'>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className='page-button bg-white text-black p-2 rounded-full mx-1'
      >
        &lt;
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && setCurrentPage(page)}
          className={`page-button mx-1 ${
            page === currentPage
              ? 'font-bold text-white bg-blue-500'
              : 'text-gray-500'
          }`}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className='page-button bg-white text-black p-2 rounded-full mx-1'
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
