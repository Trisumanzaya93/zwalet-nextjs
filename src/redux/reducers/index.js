import { combineReducers } from "redux";

import authReducer from "./auth";
import authSignUpReducer from "./authSignUp";
import authForgotPasswordReducer from "./authForgotPassword";
import getUserByIdReducer from "./getuser";
import searchReciverReducer from "./searchreciver";
import userTranferReducer from "./usertransfer";
import topUpReducer from "./topup";
import getHistoryReducer from "./gethistory";
import updatePinReducer from "./updatepin";
import getHistoryByIdReducer from "./gethistorybyid";
import getDashboardReducer from "./getDasbhoard";


const reducers = combineReducers({
  auth: authReducer,
  signUp : authSignUpReducer,
  forgotPassword: authForgotPasswordReducer,
  userById:getUserByIdReducer,
  serchReciver:searchReciverReducer,
  userTransfer :userTranferReducer,
  topUp:topUpReducer,
  getHistory:getHistoryReducer,
  updatePin:updatePinReducer,
  getHistoryById: getHistoryByIdReducer,
  getDashboard:getDashboardReducer,

});

export default reducers;