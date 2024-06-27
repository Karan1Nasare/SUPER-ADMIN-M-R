import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import React from 'react';
import CustomTextField from '../../components/ui/Form/CustomTextField';

// ----------------------------------------------------------------------

export default function RHFCustomTextField({
  name,
  helperText,
  placeholder,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <CustomTextField
          {...field}
          fullWidth
          value={
            typeof field.value === 'number' && field.value === 0
              ? ''
              : field.value
          }
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
          placeholder={placeholder || ''}
        />
      )}
    />
  );
}
