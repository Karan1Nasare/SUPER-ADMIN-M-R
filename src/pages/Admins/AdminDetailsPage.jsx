import { Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { Icon } from '@iconify/react';

import { useNavigate, useParams } from 'react-router-dom';
import TabTitle from '../../components/shared/TabTitle';
import Button from '../../components/shared/buttons/Button';
import ArrowRight from '../../assets/icon/Arrow Right.svg';
import PATH_DASHBOARD from '../../routes/path';
import AdminImage from '../../assets/images/profile-image.png';
import AdminDetailInfo from '../../components/Admins/AdminDetails/AdminDetailInfo';
import AdminAccountInfo from '../../components/Admins/AdminDetails/AdminAccountInfo';
import { APIClient } from '../../utilities/axios-client';
import URLS from '../../constants/api';
import useAdmin from './hooks/useAdmin';

const AdminDetailsPage = () => {
  const [Tabvalue, setTabValue] = useState('1');
  const [adminDetails, setAdminDetails] = useState();
  const { id } = useParams('id');
  const navigate = useNavigate();
  const { API } = APIClient();
  const { deleteAdmin } = useAdmin();

  useEffect(() => {
    const fetchData = async () => {
      const response = await API('GET', URLS.EDIT_ADMIN(id), {}, true);
      if (response.status !== 200) {
        throw response;
      }
      const admin = response.data.data !== undefined ? response.data.data : [];

      const finalData = {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        phone: admin.phone_number,
        activeOrgCount: admin.active_org_count,
        website: admin.website,
        profileImage: admin?.image?.url || AdminImage, // Using a local image path
        address: admin.address,
        city: admin.city,
        state: admin.state,
        pincode: admin.pincode,
        gstNo: admin.gst_number,
        username: admin.username,
        password: '',
      };
      if (finalData) {
        setAdminDetails(finalData);
      } else {
        navigate(PATH_DASHBOARD.Admins.adminList);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const removeAdmin = () => {
    deleteAdmin(id);
  };

  const goToEdit = () => {
    navigate('/profile');
  };

  const AdminDetailsTabs = activeTab => {
    const TabsList = {
      1: <AdminDetailInfo admin={adminDetails} />,
      2: <AdminAccountInfo admin={adminDetails} />,
    };
    return TabsList[activeTab];
  };

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <TabTitle title={'Admin'} />
        <Stack direction={'row'} spacing={2} alignItems={'center'}>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            onClick={goToEdit}
          >
            Manage
          </Button>
          <Button
            sx={{ background: theme => theme.color.white, padding: '8px 16px' }}
            onClick={goToEdit}
          >
            Edit
          </Button>
          <Button
            sx={{
              background: 'rgba(255,102,146,0.2)',
              color: 'rgba(255, 102, 146, 1)',
              padding: '8px 16px',
            }}
            startIcon={
              <FiTrash2 className='text-[rgba(255, 102, 146, 1)] cursor-pointer' />
            }
            onClick={removeAdmin}
          >
            Delete
          </Button>

          <Button
            type='button'
            variant='contained'
            color='primary'
            sx={{ background: 'white', color: '#', padding: '8px 16px' }}
            startIcon={
              <img src={ArrowRight} alt='next' className='rotate-180' />
            }
            onClick={() => navigate(PATH_DASHBOARD.Admins.adminList)}
          >
            Pervious
          </Button>
        </Stack>
      </Stack>

      <Stack sx={{ width: '100%', marginTop: '20px', paddingBottom: '150px' }}>
        <Tabs
          value={Tabvalue}
          onChange={handleChange}
          aria-label='icon position tabs example'
          sx={{ width: 'max-content' }}
        >
          <Tab
            icon={<Icon icon='gg:profile' width={25} />}
            iconPosition='start'
            label='Admin Details'
            sx={{ gap: '15px' }}
            value={'1'}
          />
          <Tab
            icon={<Icon icon={'hugeicons:information-diamond'} width={25} />}
            iconPosition='start'
            label='Account Info'
            sx={{ gap: '15px' }}
            value={'2'}
          />
        </Tabs>

        {AdminDetailsTabs(Tabvalue)}
      </Stack>
    </>
  );
};

export default AdminDetailsPage;
