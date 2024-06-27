import React, { useState } from 'react';
import ConfirmDelete from '../../../ui/Dialog/ConfirmDelete';

const DeleteStudent = ({ isOpen }) => {
  console.log('iso', isOpen);
  const [openDelete, setOpenDelete] = useState(isOpen);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const confirmDeleteHandler = () => {
    setOpenDelete(false);
  };

  return (
    <div>
      {/* Delete Dialog Confirmation */}
      {console.log('openDelete', openDelete)}
      <ConfirmDelete
        fullMessage={'Are you sure want to Delete Announcement ?'}
        title={'Delete Course Name [STD]'}
        handleClose={handleCloseDelete}
        deleteHandler={confirmDeleteHandler}
        open={openDelete}
      />
    </div>
  );
};

export default DeleteStudent;
