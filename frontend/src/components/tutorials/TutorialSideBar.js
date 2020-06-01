import React, {Component} from 'react';
import {HashLink as HLink} from "react-router-hash-link";
import "../stylesheet/Tutorial.css";

export class TutorialSideBar extends Component {
    render() {
        return (
            <div className="column right fixed">
                <h2>Tutorials</h2>
                <ul>
                    <li><HLink to="/tutorial-home">Python Overview</HLink></li>
                    <li><HLink to="/tutorial-syntax">Python Syntax</HLink></li>
                    <li><HLink to="/tutorial-string">Python String</HLink></li>
                </ul>
            </div>
        );
    }
}

export default TutorialSideBar;