import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';


import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/content" component={Content} />
                    <Route exact path="/not-found" component={Home} />
                </div>
            </Router>

        );
    }
}

export default App;
