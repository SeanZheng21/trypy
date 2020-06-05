import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import '../stylesheet/template-style.css';
import {getRequireSource} from "@babel/preset-env/lib/utils";
import backgroundheader from '../../../static/images/header.jpg';

export class Home extends React.Component {
    render() {
    return (
        <div>
            <header className='home-header'>
                <div className="overlay">
                    <h1 className="text-white margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1">Trypy
                        Online Python Environment</h1>
                    <h3 className='home-h3'>Learn, Practice, Master Python</h3>
                    <p className="home-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum quis, odio veniam itaque
                        ullam
                        debitis qui magnam consequatur ab. Vero nostrum quis, odio veniam itaque ullam debitis qui
                        magnam
                        consequatur ab.</p>
                    <button className='home-button'><Link to="/playground" className="nav-link">Playground</Link></button>
                    <button className='home-button'><Link to="/workspace" className="nav-link">Workspace</Link></button>
                    <button className='home-button'><Link to="/tutorial-home" className="nav-link">Tutorials</Link></button>
                </div>
                {/*<div className="s-12">*/}
                {/*    <img src={ backgroundheader }/>*/}
                {/*</div>*/}
            </header>
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
