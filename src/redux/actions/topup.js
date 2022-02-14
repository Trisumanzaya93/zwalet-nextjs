import { ACTION_STRING } from "./actionString";
import { topUp,downloadPdf } from "../../utils/topup";

export const topUpAction = (id,token) => {
  return {
    type: ACTION_STRING.topUp,
    payload: topUp(id,token),
  };
};
export const downloadPdfAction = (id,token) => {
  return {
    type: ACTION_STRING.downloadPdf,
    payload: downloadPdf(id,token),
  };
};