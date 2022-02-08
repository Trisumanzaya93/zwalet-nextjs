import { ACTION_STRING } from "./actionString";
import { getuserid } from "../../utils/users";

export const userTransferAction = (id,token) => {
  return {
    type: ACTION_STRING.userTranfer,
    payload: getuserid(id,token),
  };
};

export const setTransferParam = (param) => {
  return {
    type: ACTION_STRING.setTransferParam,
    payload: param,
  };
};