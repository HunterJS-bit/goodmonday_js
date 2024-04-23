import { Outlet, createBrowserRouter, Routes } from "react-router-dom";
import MainLayout from "../layout/common";
import ProtectedRoute from "../pages/auth/PrivateRoute";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/",
                element: <ProtectedRoute element={<HomePage />} />
            },
        ]
    },
]);


export default router;