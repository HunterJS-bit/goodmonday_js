import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/common";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/register",
                element: <RegisterPage />
            }
        ]
    }
]);


export default router;