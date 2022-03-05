import React from 'react';

import User from '../interface/User';
import { AuthApiData } from '../interface/AuthApiData';

interface IAuthContext {
    loggedInUser: User |null | undefined;
    updateLoginContext: (data: User) => void;
    logout: () => void;
}

const AuthContext = React.createContext<IAuthContext>({
    loggedInUser: undefined,
    updateLoginContext: () => null,
    logout: () => null,
})

export const AuthProvider: React.FC = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = React.useState<User |null | undefined>()
    const updateLoginContext = React.useCallback((data: User) => {
        setLoggedInUser(data)
        console.log(`LoggedIn User ${loggedInUser}`)
    }, [])
    const logout = React.useCallback(async () => {
        setLoggedInUser(null)
    }, [])
    return (
        <AuthContext.Provider value={{ loggedInUser, updateLoginContext, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => React.useContext(AuthContext);