import React, { useState, Suspense } from 'react';
import InnerPageLoaderBox from '../../partials/InnerPageLoaderBox';


import LoginWithMobileBox from '../../components/auth/LoginWithMobileBox';


function LoginWithMobile() {

  return (
<div className="isolate bg-white px-6 max-xs:p-2 py-5 sm:py-10 lg:px-8">
  <div className="mx-auto max-w-2xl text-center">
    <LoginWithMobileBox/>
  </div>
  
</div>
  );
}

export default LoginWithMobile;