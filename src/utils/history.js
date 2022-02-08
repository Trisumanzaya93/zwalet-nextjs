import axios from "axios";

export const gethistory = (param,token) => {
  const URL = `${process.env.NEXT_PUBLIC_HEROKU}/transaction/history?page=${param.page}&limit=${param.per_page}`;
    console.log('hehe', URL);
  return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
};