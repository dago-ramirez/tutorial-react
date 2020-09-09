import React from 'react'

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    function UserGreeting(props) {
        return <h1>Welcome back!</h1>;
    }
      
    function GuestGreeting(props) {
        return <h1>Please sign up.</h1>;
    }

    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}
