import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const loginWithEmailPass = async (inputData) => {
   try {
        const response = await axios.post(import.meta.env.VITE_API_BASE_URL + 'auth/login/email',
        {
            email : inputData.email,
            password: inputData.password
        });
        return response.data;
    } catch (e) {
      console.log(`Axios request failed! : ${e}`);
      return e;
    }

}
