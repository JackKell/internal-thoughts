import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </div>
        );
    }
}
