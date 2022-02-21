import LoginRegister from "../../pages/LoginRegister";
import Signup from "../../pages/Signup";

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/login',
            element: <LoginRegister />
        },
        {
            path: '/signup',
            element: <Signup />
        }
    ]
}

export default MainRoutes;