import { useRoutes } from "react-router-dom";
import { useAuthContext } from "../../context/useAuthContext";
import MainRoutes from './MainRoutes';
import AuthRoute from './AuthRoute';

const Routes = () => {
    const { loggedInUser } = useAuthContext()
    return useRoutes([MainRoutes, AuthRoute(loggedInUser)])
}

export default Routes;