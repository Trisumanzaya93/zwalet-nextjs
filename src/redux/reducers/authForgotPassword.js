import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
//   userData: {
//     token: JSON.parse(localStorage["token"] || null),
//     photo: "",
//     role: 0,
//   },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const authForgotPasswordReducer = (prevState = initialState, action) => {
  const { authForgot } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case authForgot.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case authForgot.concat("_", Fulfilled):
      const data = action.payload.data;
      console.log('full',data);
      const userData = {
        ...prevState.userData,
        token: data.data.token,
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData,
      };

    // case authLogin + rejected:
    case authForgot.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};



export default authForgotPasswordReducer;