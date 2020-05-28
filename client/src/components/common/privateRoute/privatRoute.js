import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, App, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            App.isAuthenticated === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);


const mapStateToProps = state => ({
    App: state.appState
});

export default connect(mapStateToProps)(PrivateRoute);
