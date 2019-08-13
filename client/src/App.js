import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';


import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import PopupContainer from './components/common/popup/poppupContainer';


class App extends React.Component {
    render() {
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
