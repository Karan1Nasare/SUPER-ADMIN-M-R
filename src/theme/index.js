/* eslint-disable import/no-named-as-default */
import { createTheme } from '@mui/material/styles';
import variants from './variants';
import typography from './typography';
import overrides from './overrides';
import breakpoints from './breakpoints';
import props from './props';
import shadows from './shadows';
import shape from './shape';
import components from './components';
import colors from './colors';

const theme = variant => {
  return createTheme(
    {
      spacing: 4,
      breakpoints,
      overrides,
      props,
      typography,
      shadows,
      shape,
      components,
      palette: variant.palette,
      color: colors,
    },
    variant.name,
  );
};
const themes = variants.map(variant => theme(variant));

export default themes;
