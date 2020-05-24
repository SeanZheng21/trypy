import React, { Fragment } from 'react'
import PyCode from "./PyCode";
import Form from "./Form";
import ProjFiles from "./ProjFiles";
import '../stylesheet/Bar.css'

export default function Workspace() {
    return (
        <Fragment>
            <div className="row"  style={{marginRight: "10px"}}>
                <div className="column-bar left-bar" >
                    <ProjFiles />
                </div>
                <div className="column-bar right-bar" >
                    {/*<PyCode />*/}
                    {/*<Form />*/}
                </div>
            </div>

        </Fragment>
    )
}