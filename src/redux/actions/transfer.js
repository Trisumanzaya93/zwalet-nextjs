import { ACTION_STRING } from "./actionString";
import { getuserid } from "../../utils/users";

import { createTransfer } from "../../utils/transfer";

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

export const createTransferAction = (id,token) => {
    return {
      type: ACTION_STRING.createTransfer,
      payload: createTransfer(id,token),
    };
  };