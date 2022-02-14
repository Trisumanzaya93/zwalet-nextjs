import axios from "axios";

export const getuserid = (id,token) => {
  const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user/profile/${id}`;
    console.log('hehe', URL);
  return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
};

export const searchReciver = (param,token) => {
  const queryParam = {
    search: (param.search ?? '').replace('+', ' '),
    sort: '',
    per_page: param.per_page ?? '5',
    page: param.page ?? '1',
  }
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user?`+
    `page=${queryParam.page}&limit=${queryParam.per_page}&search=${queryParam.search}&sort=${queryParam.sort}`;
    return axios.get(URL,  { headers: { Authorization: "Bearer " + token } });
  };

  export const updatePin = (id,body,token) => {
    console.log('id',id);
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user/pin/${id}`;
      console.log('hehe', URL);
    return axios.patch(URL, body ,{ headers: { Authorization: "Bearer " + token } });
  };

  export const updatePhone = (id,body,token) => {
    console.log('id',id);
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user/profile/${id}`;
      console.log('hehe', URL);
    return axios.patch(URL, body ,{ headers: { Authorization: "Bearer " + token } });
  };

  export const updateImage = (id,body,token) => {
    console.log('id',id);
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user/image/${id}`;
      console.log('hehe', URL);
    return axios.patch(URL, body ,{ headers: { Authorization: "Bearer " + token } });
  };

  export const updateName = (id,body,token) => {
    console.log('id',id);
    const URL = `${process.env.NEXT_PUBLIC_HEROKU}/user/profile/${id}`;
      console.log('hehe', URL);
    return axios.patch(URL, body ,{ headers: { Authorization: "Bearer " + token } });
  };

  