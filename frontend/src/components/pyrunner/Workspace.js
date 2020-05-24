import React, { Fragment } from 'react'
import PyCode from "./PyCode";
import Form from "./Form";
import '../stylesheet/Bar.css'

export default function Workspace() {
    return (
        <Fragment>
            <div className="row"  style={{marginRight: "10px"}}>
                <div className="column-bar left-bar" >
                    <p>The files go here!</p>
                </div>
                <div className="column-bar right-bar" >
                    <PyCode />
                    <Form />
                </div>
            </div>

        </Fragment>
    )
}