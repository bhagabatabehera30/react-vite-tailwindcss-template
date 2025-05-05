import React from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';
import NotFound from '../pages/error/NotFound';

function AdminRoutes() {
  return (
    <>
    <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ecommerce/customers" element={<Customers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AdminRoutes;
