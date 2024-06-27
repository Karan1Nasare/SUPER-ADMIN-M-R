import React, { useCallback, useEffect, useState } from 'react';
import { Pagination, PaginationItem, Stack } from '@mui/material';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import UpdateContentDialog from '../dialog/UpdateContentDialog';
import ContentDetailsDialog from '../dialog/ContentDetailsDialog';
import ContentCard from '../../ui/Card/ContentCard';
import Loader from '../../shared/Loader';
import useCourseStd from '../hooks/useCourseStd';
// import Pagination from '../../shared/Pagination';
import useFetcher from '../../../hooks/useFetcher';
import { getAllCourse } from '../../../service/material';
import colors from '../../../theme/colors';

const CourseStdTab = () => {
  const {
    courseStdList,
    loading,
    onUpdate,
    onDelete,
    searchTerm,
    totalShowItems,
    currentPage,
    ITEMS_PER_PAGE,
    setCurrentPage,
    setSearchTerm,
  } = useCourseStd();
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const [corseData, setCourseData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1); // Initialize with 1 to avoid NaN warning
  const itemsPerPage = 9;
  const { fetcher, getExecutorState } = useFetcher();

  const fetchChapter = useCallback(() => {
    fetcher({
      key: 'fetch_course',
      executer: () =>
        getAllCourse({
          search: searchTerm,
          page,
          page_size: itemsPerPage,
        }),
      onSuccess: response => {
        const responseData = response.data?.data;
        const totalRecords = responseData?.total;
        setTotalPage(Math.ceil(totalRecords / itemsPerPage) || 1);
        setCourseData(responseData?.data);
      },
      onFailure: err => {
        console.error('Error while fetching course', err);
        setError(err); // Handle error state
      },
      showSuccessToast: false,
    });
  }, [searchTerm, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    fetchChapter();
  }, [searchTerm, page]);

  const editHandler = row => {
    setOpenEdit(true);
    setSelectedData(row);
  };

  const deleteHandler = row => {
    setOpenDelete(true);
    setSelectedData(row);
  };

  const viewHandler = row => {
    setOpenView(true);
    setSelectedData(row);
  };

  const handleCloseView = () => {
    setOpenView(false);
  };

  const confirmDeleteHandler = () => {
    if (selectedData) {
      onDelete(selectedData.id);
    }
    setOpenDelete(false);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleDataChange = updatedData => {
    setSelectedData(updatedData);
  };

  const updateHandler = data => {
    if (selectedData) {
      onUpdate(selectedData.id, data);
    }
    setOpenEdit(false);
  };

  let content;

  if (getExecutorState('fetch_course').isLoading) {
    content = <Loader />;
  } else if (corseData?.length > 0) {
    content = (
      <div className='xl:grid xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto'>
        {corseData?.map((row, index) => (
          <div
            key={index}
            className='bg-secondary__fill rounded-md p-7 border border-gray-700'
          >
            <ContentCard
              data={row}
              editHandler={editHandler}
              deleteHandler={deleteHandler}
              viewHandler={viewHandler}
            />
          </div>
        ))}
      </div>
    );
  } else {
    content = <p className='text-white'>No records found.</p>;
  }

  return (
    <>
      {content}

      {!getExecutorState('fetch_course').isLoading &&
        corseData &&
        corseData.length > 0 && (
          <Stack
            sx={{ width: '100%' }}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Pagination
              count={totalPage}
              page={page}
              onChange={handlePageChange}
              renderItem={item => <PaginationItem {...item} />}
              sx={{
                mt: '25px',
                '& .MuiPaginationItem-root': {
                  color: 'rgba(125, 143, 179, 1)',
                  '&.Mui-selected': {
                    color: colors.white,
                  },
                  '&:hover': {
                    backgroundColor: colors.secondary__fill__dark,
                    color: colors.white,
                  },
                },
                '& .MuiPaginationItem-previousNext': {
                  backgroundColor: colors.white,
                  color: colors.black,
                },
              }}
            />
          </Stack>
        )}

      {/* View Dialog */}
      {openView && selectedData && (
        <ContentDetailsDialog
          open={openView}
          handleClose={handleCloseView}
          data={selectedData}
          onChange={handleDataChange}
        />
      )}

      {/* Edit Dialog */}
      {openEdit && selectedData && (
        <UpdateContentDialog
          open={openEdit}
          handleClose={handleCloseEdit}
          data={selectedData}
          updateHandler={updateHandler}
        />
      )}

      {/* Delete Dialog Confirmation */}
      {openDelete && selectedData && (
        <ConfirmDelete
          fullMessage={'Are you sure you want to delete this content?'}
          title={'Delete Content'}
          handleClose={handleCloseDelete}
          deleteHandler={confirmDeleteHandler}
          open={openDelete}
        />
      )}
    </>
  );
};

export default CourseStdTab;
