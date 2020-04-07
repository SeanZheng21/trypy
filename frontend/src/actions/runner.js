import axios from 'axios'

import {GET_RUNNER, GET_CODE, DELETE_CODE, ADD_CODE} from "./types";

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
            dispatch({
                type: ADD_CODE,
                payload: res.data
            })
        }).catch((err => console.log(err)));
};