import { ACTION_STRING } from "./actionString";
import { getDashBoard } from "../../utils/dashboard";

export const getDashboardAction = (id,token) => {
  return {
    type: ACTION_STRING.getDashboard,
    payload: getDashBoard(id,token),
  };
};