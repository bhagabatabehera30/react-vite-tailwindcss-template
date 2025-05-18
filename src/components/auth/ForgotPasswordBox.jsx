import React from 'react';
import AlertMessage from '../AlertMessage';
import { useTranslation } from 'react-i18next';
import TopLogo from '../../partials/TopLogo';
import DnotHaveAccount from './DnotHaveAccount';
import ActionButton from './ActionButton';
import ButtonClassArr from '../../utils/ButtonClassArr';
function ForgotPasswordBox() {
    const { t, i18n } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <TopLogo></TopLogo>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                        {t('message.auth.ForgotPassword')}
                    </h3>
                    <form className="space-y-4 md:space-y-6" action="#" method='post'>
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900
                                 dark:text-white">{t('inputs.Email')} </label>
                            </div>
                            <input type="email" name="email" id="email"
                                className="bg-white border border-gray-300 text-gray-900 rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500" placeholder="name@company.com"
                                required="" />
                        </div>
                        <span className="flex items-center justify-center space-x-2">
                                <span className="h-px bg-gray-400 w-14"></span>
                                <span className="font-normal text-gray-500">or</span>
                                <span className="h-px bg-gray-400 w-14"></span>
                            </span>

                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="mobile"
                                    className="block mb-2 text-sm font-medium text-gray-900
                                 dark:text-white">{t('inputs.Mobile Number')} </label>
                            </div>
                            <input type="text" name="mobile" id="mobile"
                                className="bg-white border border-gray-300 text-gray-900 rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500" placeholder=""
                                required="" />
                        </div>
                        
                       

                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                            </div>
                            <a href="/auth/login"
                                className="text-sm font-medium text-primary-600 hover:underline 
                            dark:text-primary-500">
                                {t('buttons.auth.Login')}
                            </a>
                        </div>
                        <ActionButton btn_type='button'
                            classAttr={ButtonClassArr.auth.login_btn}
                            ide='app_login'
                            btnName={t('buttons.auth.Send OTP')}
                        ></ActionButton>
                        <DnotHaveAccount></DnotHaveAccount>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordBox;
