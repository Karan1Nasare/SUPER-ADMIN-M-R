import colors from './colors';

const greyVariant = {
  name: 'Grey',
  palette: {
    primary: {
      main: colors.primary,
      contrastText: '#FFF',
    },
    secondary: {
      main: colors.secondary__fill,
      dark: colors.secondary__fill__dark,
      contrastText: '#FFF',
    },
    custome: {
      active: colors.active,
      active__opacity: colors.active__opacity,
      success: colors.success,
      success__opacity: colors.success__opacity,
      delete: colors.delete,
      delete__opacity: colors.delete__opacity,
      notification: colors.notification,
      danger: colors.danger,
      danger__opacity: colors.danger__opacity,
      contrastText: '#FFF',
      ...colors,
    },
  },
};

const variants = [greyVariant];

export default variants;
