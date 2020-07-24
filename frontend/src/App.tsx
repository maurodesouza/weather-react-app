import React, { useCallback } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import light from '@/styles/theme/light';
import dark from '@/styles/theme/dark';

import GlobalStyles from '@/styles/GlobalStyles';

import Layout from '@/components/Layout';
import usePersistedState from '@/hook/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  const toggleTheme = useCallback(() => {
    setTheme(theme.theme === 'dark' ? light : dark);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
