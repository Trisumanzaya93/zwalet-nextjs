import { ACTION_STRING } from "./actionString";
import { getuserid,searchReciver } from "../../utils/users";

export const getUserByIdAction = (id,token) => {
  return {
    type: ACTION_STRING.getUserId,
    payload: getuserid(id,token),
  };
};

export const searchReciverAction = (param,token) => {
  return {
    type: ACTION_STRING.searchReciver,
    payload: searchReciver(param,token),
  };
};

export const userTransferAction = (id,token) => {
  return {
    type: ACTION_STRING.userTranfer,
    payload: getuserid(id,token),
  };
};