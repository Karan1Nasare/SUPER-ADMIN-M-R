import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FormProvider, useForm } from 'react-hook-form';
import { Tab, Tabs } from '@mui/material';
import { Icon } from '@iconify/react';

import ProfileDetails from './profileDetails';
import OrgAccountInfo from './orgAccountInfo';
import PlanFeatures from './planFeatures';
import useProfile from '../../hooks/useProfile';

const ProfileTab = () => {
  const { profileData, UpdateProfile } = useProfile();
  const [Tabvalue, setTabValue] = useState('1');
  const [formcomplete, setformcomplete] = useState({});
  const [profilePicture, setProfilePicture] = useState();
  const [selectedCard, setselectedCard] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const onSubmit = async data => {
    // setformcomplete({ [Tabvalue]: true });
    // setTabValue(prv => `${parseInt(prv, 10) + 1}`);
    console.debug('onSubmit', data);
  };

  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  const ProfilerTabs = activeTab => {
    const TabsList = {
      1: (
        <ProfileDetails
          setValue={setValue}
          profileData={profileData}
          onUpdate={UpdateProfile}
        />
      ),
      2: <OrgAccountInfo profileData={profileData} />,
      3: <PlanFeatures />,
    };

    return TabsList[activeTab];
  };

  return (
    <div>
      <Tabs
        value={Tabvalue}
        onChange={handleChange}
        aria-label='icon position tabs example'
        variant='scrollable'
        scrollButtons
      >
        <Tab
          icon={<Icon icon='gg:profile' width={25} />}
          iconPosition='start'
          label='Profile Details'
          sx={{ gap: '15px' }}
          value={'1'}
        />
        <Tab
          icon={<Icon icon={'flowbite:user-add-solid'} width={25} />}
          iconPosition='start'
          label='Org Account Info'
          sx={{ gap: '15px' }}
          value={'2'}
        />
        <Tab
          icon={<Icon icon={'oui:page-select'} width={25} />}
          iconPosition='start'
          label='Plan & Features'
          sx={{ gap: '15px' }}
          value={'3'}
        />
      </Tabs>
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {ProfilerTabs(Tabvalue)}
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ProfileTab;
