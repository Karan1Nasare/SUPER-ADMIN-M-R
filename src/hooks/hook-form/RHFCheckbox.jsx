/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
// form
import { useFormContext, Controller } from 'react-hook-form';
import {
  Checkbox,
  FormLabel,
  FormGroup,
  FormControl,
  FormHelperText,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material';
import React from 'react';

export function RHFCheckbox({
  name,
  onChange,
  checked,
  value,
  helperText,
  ...other
}) {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <FormControlLabel
            control={
              <Checkbox
                // eslint-disable-next-line no-param-reassign
                {...(field.onChange = onChange)}
                {...field}
                checked={field.value === value}
              />
            }
            {...other}
          />
          {(!!error || helperText) && (
            <FormHelperText error={!!error} className='custom_label'>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}

export function RHFMultiCheckbox({
  grid,
  gridColumn,
  row,
  name,
  label,
  options,
  spacing,
  helperText,
  icon,
  checkedIcon,
  defaultSelected,
  ...other
}) {
  const { control } = useFormContext();

  const getSelected = (selectedItems, item) =>
    selectedItems?.includes(item)
      ? selectedItems?.filter(value => value !== item)
      : [...selectedItems, item];

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl component='fieldset'>
          {label && (
            <FormLabel component='legend' sx={{ typography: 'body2' }}>
              {label}
            </FormLabel>
          )}

          <FormGroup
            sx={{
              ...(grid && {
                display: 'grid',
                gridTemplateColumns: `repeat(${gridColumn}, 1fr)`, // Set grid template columns to display 4 checkboxes in one row
                gridGap: '8px', // Add grid gap for spacing between checkboxes
              }),
              ...(row && {
                flexDirection: 'row',
              }),
              '& .MuiFormControlLabel-root': {
                '&:not(:last-of-type)': {
                  mb: spacing || 0,
                },
                ...(row && {
                  mr: 0,
                  '&:not(:last-of-type)': {
                    mr: spacing || 2,
                  },
                }),
              },
            }}
          >
            {options.map(option => (
              <FormControlLabel
                key={option.value}
                control={
                  <Checkbox
                    checked={
                      field?.value?.includes(option.value) ||
                      (defaultSelected &&
                        defaultSelected.includes(option.value)) // Set default selected option
                    }
                    onChange={() =>
                      field.onChange(getSelected(field.value, option.value))
                    }
                    icon={icon}
                    checkedIcon={checkedIcon}
                  />
                }
                label={option.label}
                {...other}
              />
            ))}
          </FormGroup>

          {(!!error || helperText) && (
            <FormHelperText error={!!error} sx={{ mx: 0 }}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
