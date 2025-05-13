import React from 'react';
import {
    Routes,
    Route,
    useLocation
} from 'react-router-dom';
import Login from '../pages/auth/Login';
import LoginWithMobile from '../pages/auth/LoginWithMobile';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Register from '../pages/auth/Register';
import NotFound from '../pages/error/NotFound';
import CMSPage from '../pages/frontend/CMSPage';

function FrontedRoutes() {
    
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/auth">
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="login-with-otp" element={<LoginWithMobile />} />
                    <Route exact path="forgot-password" element={<ForgotPassword />} />
                    <Route exact path="register" element={<Register />} />
                </Route>
                {/* Dynamic CMS slug route */}
                <Route path=":slug" element={<CMSPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default FrontedRoutes;
