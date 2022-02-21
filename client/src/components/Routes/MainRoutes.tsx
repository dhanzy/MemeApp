import Home from "../../pages/Home";
import MainLayout from '../MainLayout';

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        }
    ]
}

export default MainRoutes;