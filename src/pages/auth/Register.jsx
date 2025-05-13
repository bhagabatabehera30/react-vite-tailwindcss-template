import React, { useState, Suspense } from 'react';
import InnerPageLoaderBox from '../../partials/InnerPageLoaderBox';
import RegisterBox from '../../components/auth/RegisterBox';


function Register() {
  return (
    <div className="isolate bg-white px-6 max-xs:p-2 py-5 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <RegisterBox />
      </div>

    </div>
  );
}

export default Register;