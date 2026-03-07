import { ThemeProvider } from 'styled-components';

import darkTheme from "../themes/default";
import lightTheme from "../themes/light";
import GlobalStyles from './globals';
import { useThemeContext } from '../contexts/ThemeContext';

const Theme = ({ children }) => {
  const { isDark } = useThemeContext();
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;