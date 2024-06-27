import React, { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { TextField as MUITextField } from '@mui/material';
import colors from '../../../theme/colors';

const TextFieldStyled = styled(MUITextField)(({ theme, bgcolor }) => ({
  '& .MuiInputLabel-root': {
    transform: 'none',
    position: 'relative',
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.body2.fontSize,
    color: `${colors.white} !important`,
    textAlign: 'left',
  },
  '& .MuiInputBase-root': {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main, // Set secondary color as background color
    border: `0.6px solid ${colors.blue__gray}`,
    transition: theme.transitions.create(['border-color', 'box-shadow'], {
      duration: theme.transitions.duration.shorter,
    }),

    '&:before, &:after': {
      display: 'none',
    },
    '&.MuiInputBase-sizeSmall': {
      borderRadius: 6,
    },

    '&.Mui-disabled': {
      backgroundColor: `${theme.palette.action.selected} !important`,
    },
    '& .MuiInputAdornment-root': {
      marginTop: '0 !important',
    },
  },
  '& .MuiInputBase-input': {
    color: colors.white,
    textAlign: 'left',

    // backgroundColor: colors.secondary__fill,

    '&:not(textarea)': {
      padding: '15.5px 13px',
    },
    '&:not(textarea).MuiInputBase-inputSizeSmall': {
      padding: '7.5px 13px',
    },
    '&:not(.MuiInputBase-readOnly):not([readonly])::placeholder': {
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shorter,
      }),
    },
  },
  '& .MuiFormHelperText-root': {
    lineHeight: 1.154,
    margin: theme.spacing(1, 0, 0),
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    '&.Mui-error': {
      color: theme.palette.error.main,
    },
  },
  '&:focus-within': {
    border: colors.blue__gray,
  },
}));

const TextField = forwardRef((props, ref) => {
  const { size = 'small', bgcolor, ...rest } = props;

  return (
    <TextFieldStyled
      size={size}
      bgcolor={bgcolor}
      inputRef={ref}
      {...rest}
      variant='filled'
      InputLabelProps={{ ...props, shrink: true }}
      SelectProps={{
        MenuProps: {
          PaperProps: {
            sx: {
              backgroundColor: colors.secondary__fill__dark,
              color: colors.white,
            },
          },
        },
      }}
    />
  );
});
TextField.displayName = 'CustomTextField';
export default TextField;
