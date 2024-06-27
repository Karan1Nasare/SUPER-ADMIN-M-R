import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

export default function RHFAutocomplete({
  name,
  options,
  label,
  helperText,
  ...other
}) {
  const { control, setValue, watch } = useForm();

  // Watch the value of the field to ensure it's controlled
  const value = watch(name, null);
  console.debug('value watch', value);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={options.find(option => option.value === value) || null}
          getOptionLabel={option => option.label || ''}
          isOptionEqualToValue={option => option.value === value}
          onChange={(event, newValue) => {
            setValue(name, newValue ? newValue.value : null, {
              shouldValidate: true,
            });
          }}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              error={!!error}
              helperText={error ? error.message : helperText}
              sx={{ border: 'none !important' }}
              defaultValue={value}
              name={name}
            />
          )}
          {...other}
        />
      )}
    />
  );
}
