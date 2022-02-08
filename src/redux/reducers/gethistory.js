import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  data: [],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getHistoryReducer = (prevState = initialState, action) => {
  const { getHistory } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getHistory.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getHistory.concat("_", Fulfilled):
      const data = action.payload.data;
      console.log('full',data);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        data: data.data,
      };

    // case authLogin + rejected:
    case getHistory.concat("_", Rejected):
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



export default getHistoryReducer;