import { createTheme } from '@mui/material/styles';
import React from 'react'


// const modeContext = React.createContext({ 
//     toggleColorMode: () => {},
//     createTheme: ()=> {},
// });

interface modeContextProps {
    updateModeContext: ()=> void;
    mode: 'light' | 'dark' | undefined;
}

const modeContext = React.createContext<modeContextProps>({ 
    updateModeContext: () => {},
    mode: undefined,
});

export const ModeProvider: React.FC = ({children}): JSX.Element => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light')
    const updateModeContext = React.useCallback(
        () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        },
        [],
    )


    return(
        <modeContext.Provider value={{updateModeContext, mode}}>
            {children}
        </modeContext.Provider>
    )
}


export const useModeContext = () => React.useContext(modeContext)