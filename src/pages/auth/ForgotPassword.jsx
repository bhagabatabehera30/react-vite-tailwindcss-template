import React, { useState, Suspense } from 'react';
import InnerPageLoaderBox from '../../partials/InnerPageLoaderBox';


import ForgotPasswordBox from '../../components/auth/ForgotPasswordBox';


function ForgotPassword() {

  return (
<div className="isolate bg-white px-6 max-xs:p-2 py-5 sm:py-10 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <ForgotPasswordBox/>
  </div>
  
</div>
  );
}

export default ForgotPassword;