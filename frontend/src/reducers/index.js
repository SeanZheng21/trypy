import { combineReducers } from "redux";
import runner from  './runner';
import errors from './errors';
import messages from "./messages";

export default combineReducers({
    runner,
    errors,
    messages
});
