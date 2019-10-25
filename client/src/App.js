import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import PopupContainer from './components/common/popup/poppupContainer';
import store from './store';
import { Provider } from 'react-redux';
import './App.scss';


class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />
                        <Route exact path="/" component={Home} />
                        <div>
                            <div>
                                <button onClick={this.handleSubmit} className={"plusBtn"}>Plus</button>
                            </div>
                            <div>
                                <button data-value={this.props} className={"minusBtn"}>Minus</button>
                            </div>
                        </div>
                        <Route exact path="/content" component={Content} />
                        <Route exact path="/not-found" component={Home} />
                        <PopupContainer />
                    </div>
                </Router>
            </Provider>
        );
    }
}


export default App;
