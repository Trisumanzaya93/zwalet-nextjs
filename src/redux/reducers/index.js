import { combineReducers } from "redux";

import authReducer from "./auth";
import authSignUpReducer from "./authSignUp";
import authForgotPasswordReducer from "./authForgotPassword";
import getUserByIdReducer from "./getuser";
import searchReciverReducer from "./searchreciver";
import userTranferReducer from "./usertransfer";
import topUpReducer from "./topup";
import getHistoryReducer from "./gethistory";


const reducers = combineReducers({
  auth: authReducer,
  signUp : authSignUpReducer,
  forgotPassword: authForgotPasswordReducer,
  userById:getUserByIdReducer,
  serchReciver:searchReciverReducer,
  userTransfer :userTranferReducer,
  topUp:topUpReducer,
  getHistory:getHistoryReducer,

});

export default reducers;