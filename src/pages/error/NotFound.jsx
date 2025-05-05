import React from 'react';
import TopLogo from '../../partials/TopLogo';
function NotFound() {
    return (
        <div className="isolate bg-white px-6 max-xs:p-2 py-5 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                   <TopLogo></TopLogo>
                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        404
                    </h1>
                    <p className="text-xl  text-gray-900 md:text-2xl dark:text-white">
                        Page Not Found
                    </p> 
                </div>
            </div>
        </div>
        </div>
      </div>
    );
}

export default NotFound;