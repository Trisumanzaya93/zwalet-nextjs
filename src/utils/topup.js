import axios from "axios";

export const topUp = (body,token) => {
  const URL = process.env.NEXT_PUBLIC_HEROKU + "/transaction/top-up";
    console.log('hehe', URL);
  return axios.post(URL, body,{ headers: { Authorization: "Bearer " + token } });
};