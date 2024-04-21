import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import AuthProvider from '../../context/AuthContext';



const MainLayout = () => {
    return (

        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
}

export default MainLayout;