import axios from "axios";

export const createTransfer = (body,token) => {
  const URL = process.env.NEXT_PUBLIC_HEROKU + "/transaction/transfer";
    console.log('hehe', URL);
  return axios.post(URL, body,{ headers: { Authorization: "Bearer " + token } });
};