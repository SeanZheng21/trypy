import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "../stylesheet/Tutorial.css";
import {HashLink as HLink} from "react-router-hash-link";
import TutorialSideBar from "./TutorialSideBar";

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
                            <li>
                                <h3><Link to="/tutorial-string" className="nav-link">Python String</Link></h3>
                                <p>This course will introduce you to strings and console output in Python.</p>
                            </li>
                            <li>
                                <h3><Link to="/tutorial-control" className="nav-link">Python Control Flow</Link></h3>
                                <p>Learn how to use conditionals and control flow to create programs that generate
                                    different outcomes.</p>
                            </li>
                            <li>
                                <h3><Link to="/tutorial-function" className="nav-link">Python Function</Link></h3>
                                <p>Learn how to create and use functions in Python!</p>
                            </li>
                            <li>
                                <h3><Link to="/tutorial-list" className="nav-link">Python List and Dictionary</Link></h3>
                                <p>In this course, you will learn about the data structures lists and dictionaries.</p>
                            </li>
                            <li>
                                <h3><Link to="/tutorial-loop" className="nav-link">Python Loops</Link></h3>
                                <p>Learn about ‘while’ and ‘for’ loops in Python.</p>
                            </li>
                            <li>
                                <h3><Link to="/tutorial-advanced" className="nav-link">Advanced Topics</Link></h3>
                                <p>
                                    Learn some of the more complex aspects of Python, including data structures, list
                                    comprehensions, list slicing, and lambda expressions.</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <TutorialSideBar />
            </div>
        );
    }
}

export default TutorialIntro;