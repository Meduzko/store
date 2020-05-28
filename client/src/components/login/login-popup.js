import React, { Component } from 'react';
import { login, setAppState } from '../../actions';
import {connect} from 'react-redux';

class LoginPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: ''
        };
    };

    componentDidMount = () => {
        const loginForm = document.querySelector('.login-form');
        const submitButton = document.querySelector('.login-form [type="submit"]');

        console.log(this.props);


        submitButton.addEventListener('click', (e) => {
            e.preventDefault();

            this.login();
        })
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    };


    login = () => {
        const formData = this.state;

        let request = {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        fetch('http://localhost:5000/login', request)
            .then( res => res.json())
            .then(res => this.afterLogin(res));
    };

    afterLogin = (res) => {
        if (res.status === 'successful') {
            console.log(res);
            this.props.login(res.data);
            this.props.setAppState();
            this.props.history.push('/dashboard');
        } else {
            console.log('failed login');
        }
    };

    render() {
        return (
            <div className={'loginPopup common-popup'} data-popup-type={'login-popup'}>
                <div className={'loginPopup__form-container'}>
                    <h1 className={'form__title'}>Login</h1>
                    <form name={'login'} className={'login-form'}>
                        <fieldset>
                            <legend>Login Form</legend>
                            <input type="text" name={'userName'} onChange={this.handleChange} />
                            <input type="text" name={'password'} onChange={this.handleChange} />
                            <input type="submit" />
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userModel: state.userState,
    appState: state.appState,
});

function mapDispatchToProps(dispatch) {
    return {
        login: user => dispatch(login({ type: 'SET_CURRENT_USER', payload: user })),
        setAppState: () => dispatch(setAppState({ type: 'USER_AUTHENTICATED'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup);