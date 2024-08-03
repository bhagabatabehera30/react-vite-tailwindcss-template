import React, { useEffect } from 'react';
//import 'dotenv/config';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';
import './charts/ChartjsConfig';

// Routes
import AdminRoutes from './routes/AdminRoutes';
// Import pages
// import Dashboard  from './pages/Dashboard';
// import Customers from  './pages/Customers';
// import Login from  './pages/auth/Login';
// import ForgotPassword from  './pages/auth/ForgotPassword';

//console.log(import.meta.env.VITE_API_BASE_URL);

function App() {

  const location = useLocation();
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <AdminRoutes></AdminRoutes>
    </>
  );
}

export default App;
