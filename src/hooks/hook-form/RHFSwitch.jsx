import { useFormContext, Controller } from 'react-hook-form';
import { Switch, FormControlLabel, FormHelperText } from '@mui/material';
import React from 'react';

function RHFSwitch({ name, label, helperText, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={<Switch {...field} checked={field.value} />}
            label={label} // Adding the label prop here
            {...other}
          />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

export default RHFSwitch;
