import { Pagination, PaginationItem, Stack } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import ConfirmDelete from '../../ui/Dialog/ConfirmDelete';
import ContentDetailsDialog from '../dialog/ContentDetailsDialog';
import UpdateContentDialog from '../dialog/UpdateContentDialog';
import ContentCard from '../../ui/Card/ContentCard';
import Loader from '../../shared/Loader';
import useSubject from '../hooks/useSubject';
import useFetcher from '../../../hooks/useFetcher';
import { getAllSubject } from '../../../service/material';
import colors from '../../../theme/colors';

const SubjectTabs = () => {
  const { onUpdate, onDelete } = useSubject();
  const [openView, setOpenView] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const { fetcher, getExecutorState } = useFetcher();

  const [subjectData, setSubjectData] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const itemsPerPage = 6;

  const fetchSubject = useCallback(() => {
    fetcher({
      key: 'fetch_subject',
      executer: () =>
        getAllSubject({
          search: searchTerm,
          page,
          page_size: itemsPerPage,
        }),
      onSuccess: response => {
        const responseData = response.data?.data;
        const totalRecords = responseData?.total;
        setTotalPage(Math.ceil(totalRecords / itemsPerPage));
        setSubjectData(responseData?.data);
      },
      onFailure: err => {
        console.error('Error while fetching admins', err);
      },
      showSuccessToast: false,
    });
  }, [searchTerm, page]);

  useEffect(() => {
    fetchSubject();
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

  const updateHandler = data => {
    console.log('🚀 ~ updateHandler ~ data:', data);
    if (selectedData) {
      onUpdate(selectedData.id, data);
    }
    setOpenEdit(false);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  let content;

  if (getExecutorState('fetch_subject').isLoading) {
    content = <Loader />;
  } else if (subjectData?.length > 0) {
    content = (
      <div className='xl:grid xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto'>
        {subjectData?.map((row, index) => (
          <div
            className=' bg-secondary__fill rounded-md p-7 border border-gray-700'
            key={index}
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

      {!getExecutorState('fetch_subject').isLoading &&
        subjectData &&
        subjectData.length > 0 && (
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
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Course ?'}
        title={'Delete Course'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
    </>
  );
};

export default SubjectTabs;
