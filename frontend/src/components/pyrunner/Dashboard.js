import React, { Fragment } from 'react'
import PyCode from "./PyCode";
import Form from "./Form";

export default function Dashboard() {
    return (
        <Fragment>
            <PyCode />
            <Form />
        </Fragment>
    )
}