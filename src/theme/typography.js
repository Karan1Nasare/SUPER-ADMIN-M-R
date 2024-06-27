import {
  fontSize,
  fontWeight,
  height,
  lineHeight,
  textAlign,
} from '@mui/system';
import colors from './colors';

const typography = {
  useNextVariants: true,
  fontFamily: ['Helvetica'].join(','),
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  display1: { fontSize: '4.875rem', fontWeight: 400, lineHeight: 6.5 },
  display2: { fontSize: '3.75rem', fontWeight: 400, lineHeight: 5 },
  display3: { fontSize: '3rem', fontWeight: 400, lineHeight: 4 },
  h1: {
    fontSize: '2.5rem',
    fontWeight: 400,
    lineHeight: 2.75,
    color: 'purple',
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 2.25,
  },
  h3: {
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: 1.75,
  },
  h4: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.5,
    marginLeft: '0.5rem',
  },
  h5: {
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.2,
    color: colors.white,
  },
  h6: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.2,
  },
  title: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 2,
  },
  subTitle: {
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: 2,
  },
  h7: {
    fontSize: '1.375rem',
    fontWeight: 700,
    lineHeight: 1.5,
    marginLeft: '0.5rem',
    color: colors.white,
  },

  ui02: {
    fontSize: '1.2rem',
    fontWeight: 400,
    lineHeight: 4,
    color: colors.grey__light,
  },

  description: {
    fontSize: '0.85rem',
    fontWeight: 400,
    color: colors.white,
    marginBottom: '1rem',
  },

  cardDescription: {
    fontSize: '1rem',
    fontWeight: 400,
    color: colors.white,
  },

  sidebar: {
    fontSize: 16,
  },
  button: {
    textTransform: 'none',
  },
  graphh1: {
    fontFamily: 'Manrope',
    fontSize: '1.25rem',
    fontWeight: 600,
    color: colors.white,
  },

  graphh2: {
    fontFamily: 'Manrope',
    fontSize: '0.938rem',
    fontWeight: 400,
  },
  mainLayoutTitle: {
    fontSize: '2rem',
    fontWeight: 400,
    lineHeight: 2,
    color: colors.white,
  },
  sidebar_menu_h: {
    fontSize: '0.625rem',
    fontWeight: 700,
    lineHeight: '1.25rem',
  },
  addCourseSubtitle: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 2,
    color: colors.dropdown__placeholder,
  },
  auth_h1: {
    fontSize: '2.25remrem',
    fontWeight: 700,
  },
  thumbnailContentPlaceholder: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: colors.thumbnain_title__text,
  },
  materialAddContentPlaceholder: {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: colors.primary,
  },
};

export default typography;
