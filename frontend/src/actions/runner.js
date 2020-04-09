import axios from 'axios'
import { createMessage} from "./messages";

import {GET_RUNNER, GET_CODE, DELETE_CODE, ADD_CODE, GET_ERRORS} from "./types";

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

// GET_CODE
export const getCode = () => dispatch => {
    axios.get('/api/code')
        .then( res => {
            dispatch({
                type: GET_CODE,
                payload: res.data
            })
        }).catch((err => console.log(err)));
};

// DELETE_CODE
export const deleteCode = (id) => dispatch => {
    axios.delete(`/api/code_detail/${id}`)
        .then( res => {
            dispatch(createMessage( {deleteCode: 'Code Deleted'}));
            dispatch({
                type: DELETE_CODE,
                payload: res.data
            })
        }).catch((err => console.log(err)));
};

// ADD_CODE
export const addCode = (code) => dispatch => {
    axios.post('/api/code', code)
        .then( res => {
            dispatch(createMessage( {addCode: 'Code Added'}));
            dispatch({
                type: ADD_CODE,
                payload: res.data
            });
        }).catch(err => {
            // console.log('Catching add code error');
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
    });
};