import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
    render() {
        return (
            <header className={'header'}>
                <ul className={'header__nav'}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/content">Content</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>
            </header>
        )
    }
}