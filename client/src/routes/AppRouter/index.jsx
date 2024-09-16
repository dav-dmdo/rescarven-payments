import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../AppRoutes";

const AppRouter = ({children}) => {
    return (
        <BrowserRouter>
            <AppRoutes />
            {children}
        </BrowserRouter>
    );
}

export default AppRouter;