import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

export class Home extends React.Component {
    render() {
    return (
        <div className="shopping-list">
        <h1> Trypy Online Python Runner</h1>
        <ul>
            <li>
                <Link to="/playground" className="nav-link">Go to Playground</Link>
            </li>
            <li>
                <Link to="/workspace" className="nav-link">Go to Workspace</Link>
            </li>
            <li>
                <Link to="/tutorial-home" className="nav-link">Go to Tutorials</Link>
            </li>
        </ul>
        </div>
    );
    }
}
