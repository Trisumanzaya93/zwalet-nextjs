import axios from "axios";

export const topUp = (body,token) => {
  const URL = process.env.NEXT_PUBLIC_HEROKU + "/transaction/top-up";
    console.log('hehe', URL);
  return axios.post(URL, body,{ headers: { Authorization: "Bearer " + token } });
};

export const downloadPdf = (id,token) => {
  console.log("muncull",id);
  const URL = process.env.NEXT_PUBLIC_HEROKU + `/export/transaction/${id}`;
    console.log('hehe', URL);
  return axios.get(URL, { headers: { Authorization: "Bearer " + token } });
};