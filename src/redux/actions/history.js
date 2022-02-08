import { ACTION_STRING } from "./actionString";
import { gethistory } from "../../utils/history";

export const getHistoryAction = (param,token) => {
  return {
    type: ACTION_STRING.getHistory,
    payload: gethistory(param,token),
  };
};
