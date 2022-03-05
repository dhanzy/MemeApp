import { Navigate } from 'react-router-dom';

import User from '../../interface/User';
import LoginRegister from "../../pages/LoginRegister";

const MainRoutes = (loggedInUser: User | undefined | null) =>  ({
    path: '/',
    element: loggedInUser && <Navigate to="/" />,
    children: [
        {
            path: '/login',
            element: <LoginRegister />
        }
    ]
})

export default MainRoutes;