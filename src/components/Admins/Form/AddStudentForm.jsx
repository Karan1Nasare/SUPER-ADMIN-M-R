import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import colors from '../../../theme/colors';
import TabTitle from '../../shared/TabTitle';
import TextField from '../../shared/input/TextField';
import { RHFTextField } from '../../../hooks/hook-form';

function AddStudentForm() {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        width: '100%',
        color: 'black',
        backgroundColor: colors.secondary__fill,
        padding: '25px',
      }}
    >
      <TabTitle title='Add Student' sx={{ marginBottom: '20px' }} />
      <Box mt={2}>
        <RHFTextField
          name={'student_count'}
          placeholder={'500'}
          fullWidth
          required
          label={'Add Student Count*'}
        />
      </Box>
    </Card>
  );
}

export default AddStudentForm;
