import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import AuthProvider from '../../context/AuthContext';
import Page from '../page/PageLayout';

function MainLayout() {
  return (
    <AuthProvider>
      <Navbar />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </AuthProvider>
  );
}

export default MainLayout;
