import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  userData: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getUserByIdReducer = (prevState = initialState, action) => {
  const { getUserId } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getUserId.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getUserId.concat("_", Fulfilled):
      const data = action.payload.data;
      console.log('full',data);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData: data.data,
      };

    // case authLogin + rejected:
    case getUserId.concat("_", Rejected):
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



export default getUserByIdReducer;