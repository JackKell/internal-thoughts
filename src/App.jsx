import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import NoMatch from "./NoMatch";

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/home" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
        );
    }
}