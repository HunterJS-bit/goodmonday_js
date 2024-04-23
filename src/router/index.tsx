import { Outlet, createBrowserRouter } from "react-router-dom";
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
                path: "/",
                element: <ProtectedRoute element={HomePage} />
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />
            }
        ]
    }
]);


export default router;