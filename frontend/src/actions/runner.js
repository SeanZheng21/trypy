import axios from 'axios'

import {GET_RUNNER} from "./types";

// GET_RUNNER
export const getRunner = codeTxt => dispatch => {
    axios.post('/api/process', {"python_code": codeTxt})
        .then( res => {
            dispatch({
                type: GET_RUNNER,
                payload: res.data
            })
        }).catch((err => console.log(err)));
};