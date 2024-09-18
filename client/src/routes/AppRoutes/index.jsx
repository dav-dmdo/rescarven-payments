import { useRoutes } from "react-router-dom";
import Home from "../../pages/Home/";
import Payments from "../../pages/Payments";
import Error from "../../pages/Error";
import MainLayout from "../../layout/MainLayout";
import GridPruebasPage from "../../pages/GridPruebasPage";
import BootstrapPruebasPage from "../../pages/BootstrapPruebasPage";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/payments", element: <Payments /> },
        { path: "*", element: <Error /> },
        { path: "/grid-test", element: <GridPruebasPage /> },
        { path: "/bst-test", element: <BootstrapPruebasPage /> },
      ],
    },
  ]);
  return routes;
};

export default AppRoutes;
