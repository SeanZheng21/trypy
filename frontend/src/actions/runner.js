import axios from 'axios'
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {GET_RUNNER, GET_CODE, DELETE_CODE, ADD_CODE, GET_ERRORS} from "./types";

// GET_RUNNER
export const getRunner = codeTxt => dispatch => {
    axios.post('/api/process', {"python_code": codeTxt})
        .then( res => {
            dispatch({
                type: GET_RUNNER,
                payload: res.data
            })
        }).catch((err => dispatch(returnErrors(err.response.data, err.response.status))));
};

// GET_CODE
export const getCode = () => (dispatch, getState) => {
    axios.get('/api/code', tokenConfig(getState))
        .then( res => {
            dispatch({
                type: GET_CODE,
                payload: res.data
            })
        }).catch((err => dispatch(returnErrors(err.response.data, err.response.status))));
};

// DELETE_CODE
export const deleteCode = (id) => (dispatch, getState) => {
    axios.delete(`/api/code_detail/${id}`, tokenConfig(getState))
        .then( res => {
            dispatch(createMessage( {deleteCode: 'Code Deleted'}));
            dispatch({
                type: DELETE_CODE,
                payload: res.data
            })
        }).catch((err => dispatch(returnErrors(err.response.data, err.response.status))));
};

// ADD_CODE
export const addCode = (code) => (dispatch, getState) => {
    axios.post('/api/code', code, tokenConfig(getState))
        .then( res => {
            dispatch(createMessage( {addCode: 'Code Added'}));
            dispatch({
                type: ADD_CODE,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};