import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { grey } from '@mui/material/colors';

const toggleModeContext = React.createContext({ toggleColorMode: () => {} });


const ToggleModeProvider: React.FC = ({children}) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = React.useState<'light' | 'dark'>(preferDarkMode ? 'dark' : 'light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  React.useEffect(
    ()=> {
      setMode(preferDarkMode ? 'dark' : 'light')
    },
  [preferDarkMode])

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light' ? {
            primary: {
              main: '#fff',
            },
            text: {
              primary: grey[900],
              secondary: grey[800],
            }  
          }:
          {
            primary: {
              main: 'rgba(255, 255, 255, 0.12)',
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
        },
      }),
    [mode],
  );

  return (
    <toggleModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </toggleModeContext.Provider>
  );
}


export default ToggleModeProvider;


export const useToggleModeContext = () => React.useContext(toggleModeContext);