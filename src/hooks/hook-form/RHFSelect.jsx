import { useFormContext, Controller } from 'react-hook-form';
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Select,
} from '@mui/material';
import React from 'react';
import CustomTextField from '../../components/ui/Form/CustomTextField';
import colors from '../../theme/colors';
import TextField from '../../components/shared/input/TextField';
import MenuItem from '../../components/shared/menuitem/MenuItem';
// RHFSelect component
export function RHFSelect({
  name,
  label,
  native,
  placeholder,
  maxHeight = 220,
  options,
  helperText,
  ...other
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl fullWidth>
          {label && (
            <InputLabel id={name} size='small'>
              {label}
            </InputLabel>
          )}

          <TextField
            select
            {...field}
            labelId={name}
            input={
              <OutlinedInput
                label={label}
                error={!!error}
                sx={{
                  textAlign: 'left',
                  color: 'white',
                  border: `1px solid ${colors.blue__gray} !important`,
                }}
              />
            }
            native={native}
            {...other}
          >
            {placeholder && (
              <MenuItem value=''>
                <em>{placeholder}</em>
              </MenuItem>
            )}
            {options &&
              options.map((option, index) => {
                return (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    selected={
                      // Check if field value matches option value or if it's the first option
                      field.value === option.value ||
                      (index === 0 && !field.value)
                    }
                  >
                    {option.label}
                  </MenuItem>
                );
              })}
          </TextField>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}

// RHFMultiSelect component
export function RHFMultiSelect({
  name,
  chip,
  label,
  options,
  checkbox,
  placeholder,
  helperText,
  sx,
  ...other
}) {
  const { control } = useFormContext();

  const renderValues = selectedIds => {
    const selectedItems = options.filter(item =>
      selectedIds?.includes(item.value),
    );

    if (!selectedItems.length && placeholder) {
      return (
        <Box component='em' sx={{ color: 'text.disabled' }}>
          {placeholder}
        </Box>
      );
    }

    if (chip) {
      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedItems.map(item => (
            <Chip key={item.value} size='small' label={item.label} />
          ))}
        </Box>
      );
    }

    return selectedItems.map(item => item.label).join(', ');
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={sx}>
          {label && (
            <InputLabel id={name} size='small'>
              {label}
            </InputLabel>
          )}

          <Select
            {...field}
            multiple
            displayEmpty={!!placeholder}
            labelId={name}
            input={<OutlinedInput fullWidth label={label} error={!!error} />}
            renderValue={renderValues}
            MenuProps={{
              PaperProps: {
                sx: { px: 1, maxHeight: 280 },
              },
            }}
            {...other}
          >
            {placeholder && (
              <MenuItem
                disabled
                value=''
                sx={{
                  py: 1,
                  px: 2,
                  borderRadius: 0.75,
                  typography: 'body2',
                }}
              >
                <em>{placeholder}</em>
              </MenuItem>
            )}

            {options.map(option => {
              const selected = field?.value?.includes(option.value);

              return (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  sx={{
                    py: 1,
                    px: 2,
                    borderRadius: 0.75,
                    typography: 'body2',
                    ...(selected && {
                      fontWeight: 'fontWeightMedium',
                    }),
                    ...(checkbox && {
                      p: 0.25,
                    }),
                    background: 'red',
                  }}
                >
                  {checkbox && (
                    <Checkbox disableRipple size='small' checked={selected} />
                  )}
                  {option.label}
                </MenuItem>
              );
            })}
          </Select>

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
// Replace 'path/to/CustomTextField' with the actual path

export function RHFCustomSelect({
  name,
  native,
  maxHeight = 220,
  helperText,
  children,
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
          select
          fullWidth
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    px: 1,
                    maxHeight:
                      typeof maxHeight === 'number' ? maxHeight : 'unset',
                    '& .MuiMenuItem-root': {
                      px: 1,
                      borderRadius: 0.75,
                      typography: 'body2',
                      textTransform: 'capitalize',
                    },
                  }),
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          error={!!error}
          helperText={error ? error.message : helperText}
          {...other}
        >
          {children}
        </CustomTextField>
      )}
    />
  );
}
