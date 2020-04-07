import { GET_RUNNER } from "../actions/types.js";
import { GET_CODE, DELETE_CODE } from "../actions/types.js";
import {ADD_CODE} from "../actions/types";

const initialState = {
    runner: [],
    code: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RUNNER:
            return {
                ...state,
                runner: action.payload
            };
        case GET_CODE:
            return {
                ...state,
                code: action.payload
            };
        case DELETE_CODE:
            return  {
                ...state,
                code: state.code.filter(c => c.id !== action.payload.id)
            };
        case ADD_CODE:
            return {
                ...state,
                code: [...state.code, action.payload]
            };
        default:
            return state;
    }
}