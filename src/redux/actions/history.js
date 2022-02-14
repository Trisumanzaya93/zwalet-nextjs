import { ACTION_STRING } from "./actionString";
import { gethistory,getHistoryById } from "../../utils/history";

export const getHistoryAction = (param,token) => {
  return {
    type: ACTION_STRING.getHistory,
    payload: gethistory(param,token),
  };
};

export const getHistoryByIdAction = (id,token) => {
  console.log("action",id);
  return {
    type: ACTION_STRING.getHistoryById,
    payload: getHistoryById(id,token),
  };
};
