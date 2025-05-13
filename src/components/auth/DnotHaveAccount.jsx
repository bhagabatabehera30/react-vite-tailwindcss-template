import React from 'react';
import { useTranslation } from 'react-i18next';
function DnotHaveAccount() {
    const { t, i18n } = useTranslation();
    return (
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            { t('message.auth.donot_have_account') } <a href="/auth/register" 
            className="font-medium text-primary-600 
            hover:underline dark:text-primary-500">{ t('buttons.auth.Register') }</a>
        </p>
    );
}

export default DnotHaveAccount;