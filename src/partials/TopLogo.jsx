import React from 'react';
function TopLogo() {
    return (
        <div className="flex justify-center items-center">
            <a href="#" className="flex items-center text-2xl text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="/vite.svg" alt="logo" />
                React Vite App
            </a>
        </div>
    );
}

export default TopLogo;