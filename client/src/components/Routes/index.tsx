import { useRoutes } from "react-router-dom";
import MainRoutes from './MainRoutes';
import AuthRoute from './AuthRoute';

const Routes = () => {
    return useRoutes([MainRoutes, AuthRoute])
}

export default Routes;