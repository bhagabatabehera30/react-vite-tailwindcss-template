import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
//import Customers from  '../pages/Customers';
import Dashboard  from '../pages/Dashboard';
import Customers from  '../pages/Customers';
import Login from  '../pages/auth/Login';
import LoginWithMobile from  '../pages/auth/LoginWithMobile';
import ForgotPassword from  '../pages/auth/ForgotPassword';

//const routes = [ 
  //  { path: '/ecommerce/customers', exact:true, name: 'Customers', element: Customers },
//];
function AdminRoutes() {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/login-with-otp" element={<LoginWithMobile />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/ecommerce/customers" element={<Customers />} />
      </Routes>
      </>
    );
}

export default AdminRoutes;
