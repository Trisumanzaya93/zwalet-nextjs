import axios from "axios";

export const getDashBoard = (id,token) => {
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/dashboard/${id}`;
      console.log('hehe', URL);
    return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
  };