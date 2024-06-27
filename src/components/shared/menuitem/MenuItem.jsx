import { MenuItem as MuiMenuItem } from '@mui/material';
import { styled } from '@mui/system';
import React, { forwardRef } from 'react';
import colors from '../../../theme/colors';

const CustomMenuItemStyled = styled(MuiMenuItem)(({ theme }) => ({
  color: colors.white,
  backgroundColor: colors.secondary__fill__dark,
  '&.Mui-selected': {
    backgroundColor: colors.secondary__fill__dark,
    color: colors.white,
  },
  '&.Mui-selected:hover': {
    backgroundColor: colors.blue__gray,
  },
  '&:hover': {
    backgroundColor: colors.blue__gray,
  },
}));
const MenuItem = forwardRef((props, ref) => {
  const { size = 'small', ...rest } = props;

  return <CustomMenuItemStyled size={size} ref={ref} {...rest} />;
});
MenuItem.displayName = 'CustomMenuItem';
export default MenuItem;
