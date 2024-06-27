import { Pagination, PaginationItem, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/buttons/Button';
import colors from '../../theme/colors';
import AdminCard from '../../components/Admins/AdminCard';
import PATH_DASHBOARD from '../../routes/path';
import TextField from '../../components/shared/input/TextField';
import { APIClient } from '../../utilities/axios-client';
import useFetcher from '../../hooks/useFetcher';
import { getAllAdmins } from '../../service/admins';
import Loader from '../../components/shared/Loader';

const AdminsPage = () => {
  // TODO: useAdmin hooks
  const [adminData, setAdminData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const itemsPerPage = 6;
  const { API } = APIClient();
  const { fetcher, getExecutorState } = useFetcher();

  const fetchAdmins = useCallback(() => {
    fetcher({
      key: 'fetch_admins',
      executer: () =>
        getAllAdmins({
          search: searchTerm,
          page,
          page_size: itemsPerPage,
        }),
      onSuccess: response => {
        const responseData = response.data?.data;
        const totalRecords = responseData?.total;
        setTotalPage(Math.ceil(totalRecords / itemsPerPage));
        setAdminData(responseData?.data);
      },
      onFailureRoute: PATH_DASHBOARD.Admins.adminList,
      onFailure: err => {
        console.error('Error while fetching admins', err);
      },
      showSuccessToast: false,
    });
  }, [searchTerm, page]);

  useEffect(() => {
    fetchAdmins();
  }, [searchTerm, page]);

  const navigate = useNavigate();

  const handleSearchChange = event => {
    setPage(1);
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div
      className='w-full'
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'hidden',
      }}
    >
      <div className='w-max mb-6'>
        <h2 className="text-white text-[32px] font-normal font-['Helvetica'] text-left">
          Admins
        </h2>
      </div>
      <div className='text-sm w-full p-7 font-medium text-center bg-secondary__fill text-gray-500 border-gray-700 border rounded-md flex flex-row items-center justify-between'>
        <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <div className='bg-secondary__fill__dark'>
            <TextField
              sx={{
                minWidth: '300px',
                background: theme => theme.color.secondary__fill,
              }}
              onChange={handleSearchChange}
              placeholder='Search Name, Inrollment, Standerd'
            />
          </div>
          <div className='bg-secondary__fill__dark border border-gray-700 border-opacity-20 rounded w-11 p-2 h-11'>
            <Icon
              icon={'octicon:filter-16'}
              className='text-white'
              width={25}
            />
          </div>
        </Stack>

        <Button
          sx={{ padding: '8px 16px', background: colors.white }}
          startIcon={<Icon icon={'gala:add'} />}
          onClick={() => navigate(PATH_DASHBOARD.Admins.addAdmin)}
        >
          Add Admin
        </Button>
      </div>
      <Stack
        sx={{ width: '100%', marginTop: '20px', paddingBottom: '150px' }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        {adminData && adminData.length > 0 ? (
          <div className='xl:grid  xl:grid-cols-3 xl:gap-7 lg:grid lg:grid-cols-2 lg:gap-7 md:grid md:grid-cols-1 md:gap-7 w-full max-w-screen mx-auto'>
            {adminData.map((admin, index) => (
              <div
                className='bg-secondary__fill rounded-md h-44 p-7  mb-2 border border-gray-700'
                key={admin.id}
              >
                <AdminCard key={index} admin={admin} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {!getExecutorState('fetch_admins').isLoading && (
              <div role='alert'>
                <span className='block sm:inline'>No data found.</span>
              </div>
            )}
          </>
        )}

        {getExecutorState('fetch_admins').isLoading && <Loader />}
        {!getExecutorState('fetch_admins').isLoading &&
          adminData &&
          adminData.length > 0 && (
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
          )}
      </Stack>
    </div>
  );
};

export default AdminsPage;
