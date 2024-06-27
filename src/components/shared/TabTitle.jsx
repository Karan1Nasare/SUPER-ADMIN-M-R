import { Typography } from '@mui/material';
import React from 'react';
import colors from '../../theme/colors';

const TabTitle = ({ title, sx }) => {
  return (
    <Typography
      sx={{
        textAlign: 'left',
        paddingLeft: '15px',
        fontSize: '20px',
        position: 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '5px',
          height: 1,
          backgroundColor: colors.primary,
          borderRadius: '3px',
        },
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};

export default TabTitle;
