import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import '../stylesheet/Home.css';

export class Home extends React.Component {
    render() {
    return (
        <div>
            <section id="banner">
				<h1>Trypy<br/> Online Python Runner</h1>
				<p>Learn, Practice, Master Your Python Skills Now!</p>
                <button className="btn btn-default btn-info">
                    <Link to="/playground" className="nav-link start-link">Get Started</Link>
                </button>
			</section>
            <section className="section-small-padding background-white text-center">
                <div className="line">
                    <div>
                        <div className="column-left gaped">
                            <div className="padding-2x block-bordered">
                                <h2 className="text-thin">Python Playground</h2>
                                <p className="margin-bottom-30"> Familiarize with Python syntax, easy-to-use environment
                                    for practice, and run python scripts within one click</p>
                                <a className="button button-dark-stroke try-link text-size-12 padding-2x" href="#/playground">
                                    Try it out!</a>
                                <br/>
                            </div>
                        </div>
                        <div className="column-center gaped">
                            <div className="padding-2x block-bordered">
                                <h2 className="text-thin">Project Workspace</h2>
                                <p className="margin-bottom-30">Powerful online workspace with multi-file support and
                                    file storage, great place to build complex and cool stuff</p>
                                <a className="button button-dark-stroke try-link text-size-12 padding-2x" href="#/workspace">
                                     Try it out!</a>
                                <br/>
                            </div>
                        </div>
                        <div className="column-right gaped">
                            <div className="padding-2x block-bordered">
                                <h2 className="text-thin">Beginner Tutorial</h2>
                                <p className="margin-bottom-30">Beginner-friendly Python tutorial that get you started
                                    on a cool programming journey with the most popular language.</p>
                                <a className="button button-dark-stroke try-link text-size-12 padding-2x" href="#/tutorial-home">
                                    Try it out!</a>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        // <div className="shopping-list">
        //     <h1> Trypy Online Python Runner</h1>
        //     <ul>
        //         <li>
        //             <Link to="/playground" className="nav-link">Go to Playground</Link>
        //         </li>
        //         <li>
        //             <Link to="/workspace" className="nav-link">Go to Workspace</Link>
        //         </li>
        //         <li>
        //             <Link to="/tutorial-home" className="nav-link">Go to Tutorials</Link>
        //         </li>
        //     </ul>
        // </div>

    );
    }
}
