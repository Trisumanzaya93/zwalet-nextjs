import { ACTION_STRING } from "./actionString";
import { login, signUp,forgotPassword,checkPin } from "../../utils/auth";

export const loginAction = (body) => {
  return {
    type: ACTION_STRING.authLogin,
    payload: login(body),
  };
};
export const signUpAction = (body) => {
    return {
      type: ACTION_STRING.authSignUp,
      payload: signUp(body),
    };
  };

  export const forgotPasswordAction = (body) => {
    return {
      type: ACTION_STRING.authForgot,
      payload: forgotPassword(body),
    };
  };

  export const checkPinAction = (pin,token) => {
    return {
      type: ACTION_STRING.checkPin,
      payload: checkPin(pin,token),
    };
  };