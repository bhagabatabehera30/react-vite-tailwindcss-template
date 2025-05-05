import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import FrontedRoutes from './FrontedRoutes';


function GlobalRoutes() {
    const location = useLocation();
    return (
        <>
            <Routes>
                <Route path="/app/*" element={<AdminRoutes />} />
                <Route path="/*" element={<FrontedRoutes />} />
            </Routes>
        </>
    );
}

export default GlobalRoutes;
