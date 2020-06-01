import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { loadUser } from "../actions/auth";
import Header from "./layout/Header";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import {Home} from "./pyrunner/Home"
import PrivateRoute from "./common/PrivateRoute";
import Playground from "./pyrunner/Playground";
import Workspace from "./pyrunner/Workspace";
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./layout/Alerts";

import { Provider } from 'react-redux'
import store from '../store'
import TutorialIntro from "./tutorials/TutorialIntro";
import TutorialSyntax from "./tutorials/TutorialSyntax";
import TutorialString from "./tutorials/TutorialString";

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};

class App extends Component{
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                               {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div className="container">
                                <Switch>
                                    <PrivateRoute exact path="/playground" component={Playground} />
                                    <PrivateRoute exact path="/workspace" component={Workspace} />
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/tutorial-home" component={TutorialIntro} />
                                    <Route exact path="/tutorial-syntax" component={TutorialSyntax} />
                                    <Route exact path="/tutorial-string" component={TutorialString} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));