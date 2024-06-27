import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/system';
import { LoadingButton } from '@mui/lab';
import React, { forwardRef } from 'react';
import colors from '../../../theme/colors';

const CustomMuiButtonStyled = styled(LoadingButton)({
  color: colors.black,
  border: `1px solid ${colors.blue__gray}`,
  '&:hover': {
    backgroundColor: colors.secondary__fill,
    color: colors.white,
  },
});
const Button = forwardRef((props, ref) => {
  const { size = 'small', ...rest } = props;

  return <CustomMuiButtonStyled size={size} ref={ref} {...rest} />;
});
Button.displayName = 'CustomButton';
export default Button;
