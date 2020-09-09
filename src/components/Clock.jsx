import React from 'react'

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : new Date(),
            counter : 1
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({date : new Date()});
            this.setState((state, props) => ({
                counter: state.counter + props.increment
              }));
        }, 1000);        
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <h2>Counter = {this.state.counter}</h2>
        </div>
      );
    }
  }
