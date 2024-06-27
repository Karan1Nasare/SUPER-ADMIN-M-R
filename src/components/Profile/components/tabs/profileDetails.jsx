import React, { useState } from 'react';
import TabTitle from '../../../shared/TabTitle';
import ProfileDetailsForm from '../Forms/profileForm';
import UploadProfileImage from '../viewProfile/changeProfileImage';
import useProfile from '../../hooks/useProfile';

const ProfileDetails = ({ setValue, profileData, onUpdate }) => {
  const [isChangeProfile, setIsChangeProfile] = useState(false);
  return (
    <>
      <TabTitle title='Org & Personal Details' sx={{ marginTop: '20px' }} />
      {!isChangeProfile ? (
        <UploadProfileImage
          profileData={profileData}
          setIsChangeProfile={setIsChangeProfile}
        />
      ) : (
        <ProfileDetailsForm
          profileData={profileData}
          setValue={setValue}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
};

export default ProfileDetails;
