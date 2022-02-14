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

  export const checkPin = (pin,token) => {
    const URL = process.env.NEXT_PUBLIC_HEROKU + "/user/pin?pin="+pin;
      console.log('hehe', URL);
    return axios.get(URL,{ headers: { Authorization: "Bearer " + token } });
  };

  export const changePassword = (id,body,token) => {
    const URL = process.env.NEXT_PUBLIC_HEROKU + `/user/password/${id}`;
      console.log('hehe', body);
    return axios.patch(URL, body ,{ headers: { Authorization: "Bearer " + token } });
  };

  export const changePasswordemail = (body) => {
    const URL = process.env.NEXT_PUBLIC_HEROKU + `/auth/reset-password`;
      console.log('hehe', body);
    return axios.patch(URL,body);
  };