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
                        <h1 className="main-title">Python Overview</h1>
                        <h2>&#8226; Why Learn Python?</h2>
                        <p>
                            Python is a general-purpose, versatile and popular programming language.
                            It’s great as a first language because it is concise and easy to read,
                            and it is also a good language to have in any programmer’s stack as it
                            can be used for everything from web development to software development
                            and scientific applications.
                        </p>
                        <h2>&#8226; Take-Away Skills:</h2>
                        <p>
                            This course is a great introduction to both fundamental programming
                            concepts and the Python programming language. By the end, you’ll be
                            comfortable programming in Python and taking your skills off this
                            online compiler platform and onto your own computer.
                        </p>
                    </div>
                    <div>
                        <h2>&#8226; What You Will Learn</h2>
                        <div>
                            <div>
                                <h3><Link to="/tutorial-syntax" className="nav-link">1. Python Syntax</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;In this course, learn about the syntax of the Python programming language!</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-string" className="nav-link">2. Python String</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;This course will introduce you to strings and console output in Python.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-control" className="nav-link">3. Python Control Flow</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Learn how to use conditionals and control flow to create programs that generate
                                    different outcomes.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-function" className="nav-link">4. Python Function</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Learn how to create and use functions in Python!</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-list" className="nav-link">5. Python List and Dictionary</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;In this course, you will learn about the data structures lists and dictionaries.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-loop" className="nav-link">6. Python Loops</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Learn about ‘while’ and ‘for’ loops in Python.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-advanced" className="nav-link">7. Advanced Topics</Link></h3>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&bull;&nbsp;Learn some of the more complex aspects of Python, including data structures, list
                                    comprehensions, list slicing, and lambda expressions.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-class" className="nav-link">8. Introduction to Classes</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Learn what classes are, why they’re important, and how to use them effectively.</p>
                            </div>
                            <div>
                                <h3><Link to="/tutorial-file" className="nav-link">9. File Input/Output</Link></h3>
                                <p>&nbsp;&nbsp;&nbsp;&bull;&nbsp;Apply what you’ve learned about Python to a real-world application using files.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <TutorialSideBar />
            </div>
        );
    }
}

export default TutorialIntro;