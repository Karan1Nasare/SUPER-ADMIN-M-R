/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import TabTitle from '../../shared/TabTitle';
import AdminDetailsForm from '../Form/AdminDetailsForm';

const AdminDetailsTab = ({ setValue, setImageFile, values }) => {
  return (
    <div>
      <TabTitle title='Admin Personal Details' sx={{ marginTop: '20px' }} />
      <AdminDetailsForm
        setValue={setValue}
        setImageFile={setImageFile}
        values={values}
      />
    </div>
  );
};

export default AdminDetailsTab;
