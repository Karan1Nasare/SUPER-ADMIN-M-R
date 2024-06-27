import {
  fontSize,
  fontWeight,
  style,
  width,
  borderBottom,
  display,
  padding,
} from '@mui/system';
import colors from './colors';

const components = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'outline-primary' },
        style: {
          position: 'absolute',
          top: '8px',
          left: '2px',
          width: '88%',
          height: '100%',
          borderRadius: '29px',
          color: colors.black,
          backgroundColor: colors.white,
          borderColor: colors.white,
          '&:hover': {
            color: colors.white,
            backgroundColor: colors.primary,
            borderColor: colors.white,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.white,
            backgroundColor: colors.primary,
            borderColor: colors.white,
          },
          '&:disabled': {
            color: colors.white,
            backgroundColor: colors.primary,
            borderColor: colors.white,
            opacity: '0.35',
          },
        },
      },
      {
        props: { variant: 'outlined-secondary' },
        style: {
          color: colors.white,
          backgroundColor: colors.secondary__light,
          borderColor: colors.white,
          '&:hover': {
            color: colors.white,
            backgroundColor: colors.secondary__light,
            borderColor: colors.white,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.white,
            backgroundColor: colors.secondary__light,
            borderColor: colors.white,
          },
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          color: colors.black,
          backgroundColor: colors.white,
          border: '1px solid rgba(0, 0, 0, 0.25)',
          height: '2.75rem',
          width: '13.4rem',
          fontSize: '0.875rem',
          fontWeight: 300,
        },
      },
      {
        props: { variant: 'outline-add-button' },
        style: {
          height: '100%',
          borderRadius: '10px',
          color: colors.black,
          backgroundColor: colors.white,
          borderColor: colors.white,
          fontWeight: 400,
          padding: '10px 16px',
          '&:hover': {
            color: colors.black,
            backgroundColor: colors.white,
            borderColor: colors.white,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.black,
            backgroundColor: colors.white,
            borderColor: colors.white,
          },
          '&:disabled': {
            color: colors.white,
            backgroundColor: colors.primary,
            borderColor: colors.white,
            opacity: '0.35',
          },
        },
      },
      {
        props: { variant: 'outline-remove-button' },
        style: {
          height: '100%',
          borderRadius: '10px',
          color: colors.delete,
          backgroundColor: colors.delete__opacity,
          borderColor: colors.delete,
          padding: '10px 16px',
          '&:hover': {
            color: colors.black,
            backgroundColor: colors.delete,
            borderColor: colors.delete,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.black,
            backgroundColor: colors.delete__opacity,
            borderColor: colors.delete,
          },
          '&:disabled': {
            color: colors.delete,
            backgroundColor: colors.delete__opacity,
            borderColor: colors.delete,
            opacity: '0.35',
          },
        },
      },
    ],
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiInputBase-root': {
          '& fieldset': {
            borderColor: colors.grey__light,
            backgroundColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: colors.grey__light,
          },
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: colors.grey__light,
            backgroundColor: 'transparent',
          },
          '&:hover fieldset': {
            borderColor: colors.grey__light,
          },
        },
        '& .MuiInput-underline:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:hover:before': {
          borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'transparent',
        },
        '& .MuiInput-underline:hover:after': {
          borderBottomColor: 'transparent',
        },
        '& .MuiInputBase-formControl .Mui-focused': {
          borderBottomColor: 'transparent',
        },
        '& input': {
          color: colors.white,
          backgroundColor: 'transparent',
        },
        '& input::placeholder': {
          color: colors.white,
        },
      },
    },
    variants: [
      {
        props: { variant: 'card-input-field' },
        style: {
          backgroundColor: 'transparent', // Set background color to transparent
          border: '1px solid #ced4da', // Add border with desired color
          padding: '10px', // Adjust padding as needed
          borderRadius: '4px',
          '& .MuiInputBase-root': {
            backgroundColor: 'transparent', // Set background color to transparent
            border: '1px solid #ced4da', // Add border with desired color
            padding: '10px', // Adjust padding as needed
            borderRadius: '4px', // Add border radius if desired
          },
          '& .MuiInputBase-root:hover': {
            borderColor: '#707070', // Change border color on hover if needed
          },
        },
      },
    ],
  },
  MuiButtonGroup: {
    variants: [
      {
        props: { variant: 'text' },
        style: {
          color: colors.black,
          maxHeight: '34px',
          border: `1px solid ${colors.border_color}`,
          borderRadius: '2px',
          '& .MuiButtonGroup-grouped': {
            color: colors.black,
            borderColor: colors.border_color,
            minWidth: '54px',
            fontWeight: 550,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.btnText__dark,
            backgroundColor: colors.primary,
            borderColor: colors.white,
          },
          '& .Mui-disabled': {
            color: colors.btnText__dark,
            background: 'rgba(0, 0, 0, 0.05)',
          },
        },
      },
      {
        props: { variant: 'outline-button-group-primary' },
        style: {
          color: colors.black,
          maxHeight: '34px',
          border: `1px solid ${colors.border_color}`,
          borderRadius: '2px',
          '& .MuiButtonGroup-grouped': {
            color: colors.black,
            borderColor: colors.border_color,
            minWidth: '54px',
            fontWeight: 550,
          },
          '&:not(:disabled):not(.disabled).active': {
            color: colors.orange__dark,
            backgroundColor: colors.primary,
            borderColor: colors.white,
          },
          '& .Mui-disabled': {
            color: colors.btnText__dark,
            background: 'rgba(0, 0, 0, 0.05)',
          },
        },
      },
    ],
  },
  MuiDialog: {
    variants: [
      {
        props: {
          variant: 'input-dialog',
        },
        style: {},
        PaperProps: {
          style: {
            backgroundColor: colors.secondary__fill,
            width: '40%',
            height: 'auto',
            padding: '20px',

            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    ],
    styleOverrides: {
      paper: {
        // Your custom styles here
        backgroundColor: colors.secondary__fill,
        color: colors.white,
        borderRadius: '12px',
        padding: '16px',
        // Add other styles as needed
      },
    },
  },
  MuiDialogContentText: {
    styleOverrides: {
      root: {
        // Custom text color for DialogContentText
        color: colors.white, // Change this to your desired color
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        padding: 0,
        borderBottom: `1px solid #6B7A99`,
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      body1: {
        color: colors.white,
      },
      h2: {
        color: colors.white,
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        color: colors.white,
        backgroundColor: colors.secondary__fill__dark,
      },
      indicator: {},
      Tab: {
        color: colors.white,
        fontWeight: 550,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        color: colors.white,
        fontWeight: 550,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        '& input': {
          color: '#fff', // Text color
          background: colors.secondary__fill,
          border: `1px solid #343B4F`,
          borderRadius: '4px',
          padding: '10px 16px',
          fontSize: '14px',
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: '#ccc', // Label color
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        color: '#fff', // Text color
        backgroundColor: colors.secondary__fill__dark, // Background color
        borderRadius: '4px',
        paddingTop: '2px',
        paddingBottom: '2px',
      },
      icon: {
        color: '#fff', // Icon color
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      '&.outline-border': {
        textAlign: 'left',
        borderRadius: 2,
        color: colors.white,
        boxShadow: 'none',
        border: '100px solid red',
        '& .MuiOutlinedInput-notchedOutline': {
          border: `1px solid ${colors.white} !important`,
        },
        '& .MuiSelect-nativeInput': {
          color: colors.white,
        },
      },
      root: {
        color: '#fff', // Text color
        backgroundColor: colors.secondary__fill, // Background color
        borderRadius: '4px',
        '& .MuiList-root': {
          background: 'cyan',
        },
      },
      icon: {
        color: '#fff', // Icon color
      },
    },
    variants: [
      {
        props: {
          variant: 'input-dialog',
        },
        style: {},
        PaperProps: {
          style: {
            backgroundColor: colors.secondary__fill,
            width: '40%',
            height: 'auto',
            padding: '20px',

            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    ],
  },
};

export default components;
