import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../stylesheet/Tutorial.css";
import {HashLink as HLink} from "react-router-hash-link";

export class TutorialIntro extends Component {
    render() {
        return (
            <div className="row">
                <div className="column left">
                    <div>
                        <h1>Python Overview</h1>
                        <h2>Why Learn Python?</h2>
                        <p>
                            Python is a general-purpose, versatile and popular programming language.
                            It’s great as a first language because it is concise and easy to read,
                            and it is also a good language to have in any programmer’s stack as it
                            can be used for everything from web development to software development
                            and scientific applications.
                        </p>
                        <h2>Take-Away Skills:</h2>
                        <p>
                            This course is a great introduction to both fundamental programming
                            concepts and the Python programming language. By the end, you’ll be
                            comfortable programming in Python and taking your skills off this
                            online compiler platform and onto your own computer.
                        </p>
                    </div>
                    <div>
                        <h2>WHAT YOU'LL LEARN</h2>
                        <ol>
                            <li>
                                <h3><Link to="/tutorial-syntax" className="nav-link">Python Syntax</Link></h3>
                                <p>In this course, learn about the syntax of the Python programming language!</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="column right fixed">
                    <h2>Tutorials</h2>
                    <ul>
                        <li><HLink to="/tutorial-home">Python Overview</HLink></li>
                        <li><HLink to="/tutorial-syntax">Python Syntax</HLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TutorialIntro;