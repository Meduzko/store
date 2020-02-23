import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import PopupContainer from './components/common/popup/poppupContainer';
import store from './store';
import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/content" component={Content} />
                        <Route exact path="/not-found" component={Home} />
                        <PopupContainer />
                    </div>
                </Router>
        );
    }
}

export default App;
