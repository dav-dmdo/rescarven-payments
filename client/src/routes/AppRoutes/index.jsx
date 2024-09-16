import { useRoutes } from "react-router-dom";
import Home from "../../Pages/Home";
import Payments from "../../Pages/Payments";
import Error from "../../Pages/Error";


const AppRoutes = () => {

    const routes = useRoutes([
        { path: "/", element: <Home /> },
        { path: "/payments", element: <Payments /> },
        { path: "*", element: <Error /> },
    ]);
    return routes;
        
}

export default AppRoutes;