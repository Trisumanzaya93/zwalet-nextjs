import axios from "axios";

export const gethistory = (param,token) => {
  const URL = `${process.env.NEXT_PUBLIC_HEROKU}/transaction/history?page=${param.page}&limit=${param.per_page}&filter=${param.filter}`;
    console.log('hehe', URL);
  return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
};

export const getHistoryById = (id,token) => {
  console.log("util",id);
  const URL = `${process.env.NEXT_PUBLIC_HEROKU}/transaction/history/${id}`;
    console.log('hehe', URL);
  return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
};

