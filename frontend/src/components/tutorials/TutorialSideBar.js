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
                    <li><HLink to="/tutorial-syntax">Basic Syntax</HLink></li>
                    <li><HLink to="/tutorial-string">String</HLink></li>
                    <li><HLink to="/tutorial-control">Control Flow</HLink></li>
                    <li><HLink to="/tutorial-function">Function</HLink></li>
                    <li><HLink to="/tutorial-list">List and Dictionary</HLink></li>
                    <li><HLink to="/tutorial-loop">Loops</HLink></li>
                    <li><HLink to="/tutorial-advanced">Advanced Topics</HLink></li>
                </ul>
            </div>
        );
    }
}

export default TutorialSideBar;