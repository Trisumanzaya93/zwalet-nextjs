import axios from "axios";

export const login = (body) => {
  const URL = process.env.NEXT_PUBLIC_HEROKU + "/auth/login";
    console.log('hehe', URL);
  return axios.post(URL, body);
};

export const signUp = (body) => {
    const URL = process.env.NEXT_PUBLIC_HEROKU + "/auth/register";
      console.log('hehe', body);
    return axios.post(URL, body);
  };

  export const forgotPassword = (body) => {
    const URL = process.env.NEXT_PUBLIC_HEROKU + "/auth/forgot-password";
      console.log('hehe', body);
    return axios.post(URL, body);
  };