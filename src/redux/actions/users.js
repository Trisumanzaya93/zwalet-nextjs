import { ACTION_STRING } from "./actionString";
import { getuserid,searchReciver,updatePin,updatePhone,updateImage,updateName } from "../../utils/users";

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

export const updatePinAction = (id,body,token) => {
  return {
    type: ACTION_STRING.updatePin,
    payload: updatePin(id,body,token),
  };
};
export const updatePhoneAction = (id,body,token) => {
  return {
    type: ACTION_STRING.updatePhone,
    payload: updatePhone(id,body,token),
  };
};
export const updateImageAction = (id,body,token) => {
  return {
    type: ACTION_STRING.updateImage,
    payload: updateImage(id,body,token),
  };
};

export const updateNameAction = (id,body,token) => {
  return {
    type: ACTION_STRING.updateImage,
    payload: updateName(id,body,token),
  };
};