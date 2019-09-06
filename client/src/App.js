import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';

import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import PopupContainer from './components/common/popup/poppupContainer';

import store from './store/index';
import { addArticle } from './actions/index';


window.store = store;
window.addArticle = addArticle;
store.subscribe(() => console.log('Look ma, Redux!!'))

class App extends React.Component {

    handleSubmit = ()=> {
        store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
    }

    render() {
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
                                <button className={"minusBtn"}>Minus</button>
                            </div>
                            <div>Value: {} </div>
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
