import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import Basket from './components/basket/basket';
import ModalContainer from './components/containers/ModalContainer';
import Order from './components/forms/order-from/order-form';
import LoginPopup from './components/login/login-popup';
import PrivateRoute from './components/common/privateRoute/privatRoute';
import Dashboard from './admin/dashboard/dashboard';
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
                        <Basket />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/content" component={Content} />
                        <Route exact path="/login" component={LoginPopup} />
                        <Switch>
                            <PrivateRoute exact path="/dashboard" component={Dashboard} />
                        </Switch>
                        <Route exact path="/order-form" component={Order} />
                        <Route exact path="/not-found" component={Home} />
                        <ModalContainer />
                    </div>
                </Router>
        );
    }
}

export default App;
