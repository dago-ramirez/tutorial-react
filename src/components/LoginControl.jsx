import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButon';
import Greeting from './Greeting';

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }    

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
                <Greeting isLoggedIn={isLoggedIn} />
                <h1>You are <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h1>
                {button}
            </div>
        );
    }
}