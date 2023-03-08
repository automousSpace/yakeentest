import {MD3LightTheme} from 'react-native-paper';

const Theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#3865FF',
    lightGray: '#A8ACB4',
    lightGreen: 'rgba(218, 255, 206, 0.7)',
    green: '#75cb69',
    secondary: 'transparent',
    blackText: '#323C5F',
    borderGray: '#ECF1FF',
    yellow: '#FFDE33',
    secondaryContainer: 'transparent',
    gray: '#797B89',
    error: 'rgba(231, 58, 64, 0.25)',
    errorText: '#e94a50',
  },
};

export default Theme;
