import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  userData: {},
  transaction:{
    receiverId: '',
    amount: 0,
    notes:'',
  },
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const userTranferReducer = (prevState = initialState, action) => {
  const { userTranfer, setTransferParam } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case userTranfer.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case userTranfer.concat("_", Fulfilled):
      const data = action.payload.data;
      console.log('full',data);
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData: data.data,
      };

    // case authLogin + rejected:
    case userTranfer.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

      // case setTransferParam + fulfilled:
      case setTransferParam:
      console.log("full", prevState);
      const transaction = {
        ...prevState.transaction,
        ...action.payload
      };
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        transaction,
      };

    default:
      return prevState;
  }
};



export default userTranferReducer;