import { combineReducers } from "redux";
import runner from  './runner';
import errors from './errors';
import messages from "./messages";
import auth from "./auth";

export default combineReducers({
    runner,
    errors,
    messages,
    auth
});
