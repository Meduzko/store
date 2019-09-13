import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Home from './components/home/home';
import Content from './components/content/content';
import PopupContainer from './components/common/popup/poppupContainer';

import store from './store/index';
import { addArticle } from './actions/index';

//store.subscribe(() => console.log('Look ma, Redux!! ' ));

class App extends Component {

    constructor(props) {
        super(props);
    }

    // handleSubmit = ()=> {
    //   //  store.dispatch( addArticle( {article: 'New article about...', id: 1}) );
    //     this.props.onAddArticle({ article: 'New article about...', id: 1 });
    //     console.log(store.getState());
    //
    // };

    render() {
        console.log(this.props);
        return (
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
        );
    }
}

// const mapStateToProps = state => ({
//     articles: state.articles,
//     users: state.users
// });
//
// const mapActionsToProps = {
//     onAddArticle: addArticle
// };

//export default connect(mapStateToProps, mapActionsToProps)(App);
export default App;
