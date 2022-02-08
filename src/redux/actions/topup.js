import { ACTION_STRING } from "./actionString";
import { topUp } from "../../utils/topup";

export const topUpAction = (id,token) => {
  return {
    type: ACTION_STRING.topUp,
    payload: topUp(id,token),
  };
};