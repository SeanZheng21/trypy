import { GET_RUNNER } from "../actions/types.js"

const initialState = {
    runner: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_RUNNER:
            return {
                ...state,
                runner: action.payload
            };
        default:
            return state;
    }
}