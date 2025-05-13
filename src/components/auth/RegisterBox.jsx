import React from 'react';
import AlertMessage from '../AlertMessage';
import { useTranslation } from 'react-i18next';
import TopLogo from '../../partials/TopLogo';
import ActionButton from './ActionButton';
import ButtonClassArr from '../../utils/ButtonClassArr';
function RegisterBox() {
    const { t, i18n } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <TopLogo></TopLogo>
                    <h3 className="text-xl font-semibold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                        {t('message.auth.register_account')}
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
                            <div className="flex items-start mr-3">
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="first_name"
                                            className="block mb-2 text-sm font-medium text-gray-900
                                 dark:text-white">{t('inputs.First Name')} </label>
                                    </div>
                                    <input type="text" name="first_name" id="first_name"
                                        className="bg-white border border-gray-300 text-gray-900 rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500" placeholder={t('inputs.First Name')}
                                        required="" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="last_name"
                                        className="block mb-2 text-sm font-medium text-gray-900
                                 dark:text-white">{t('inputs.Last Name')} </label>
                                </div>
                                <input type="text" name="last_name" id="last_name"
                                    className="bg-white border border-gray-300 text-gray-900 rounded-lg 
                            focus:ring-primary-600 focus:border-primary-600 
                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                            dark:focus:border-blue-500" placeholder={t('inputs.Last Name')}
                                    required="" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start mr-3">
                                <div className="flex flex-col space-y-1">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                            className="block mb-2 text-sm font-medium
                                 text-gray-900 dark:text-white">{t('inputs.Password')}</label>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        className="bg-white border border-gray-300 text-gray-900 rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="passwordc"
                                        className="block mb-2 text-sm font-medium
                                 text-gray-900 dark:text-white">{t('inputs.Password Confirm')}</label>
                                </div>
                                <input type="password" name="password" id="password_confirm" placeholder="••••••••"
                                    className="bg-white border border-gray-300 text-gray-900 rounded-lg
                                 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
                                  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                   dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required="" />
                            </div>
                        </div>


                        <ActionButton btn_type='button'
                            classAttr={ButtonClassArr.auth.login_btn}
                            ide='app_register'
                            btnName={t('buttons.auth.Register')}
                        ></ActionButton>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <a href="/auth/login"
                                    className="text-sm font-medium text-primary-600 hover:underline 
                            dark:text-primary-500">
                                    {t('buttons.auth.Login')}
                                </a>
                            </div>
                            <a href="/auth/forgot-password"
                                className="text-sm font-medium text-primary-600 hover:underline 
                            dark:text-primary-500">
                                {t('message.auth.Forgot password')}
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterBox;
