import React, { Component } from 'react';
import { Child } from './Child';

export class Form extends Component {
  state = {
    name: 'gb',
    count: 0,
    show: true,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    console.log('Parent did mount');
  }

  componentDidUpdate() {
    console.log('Parent did update');

    // use if
    // this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <>
        <p>Parent component</p>
        <div>hello, {this.state.count}</div>
        <button onClick={this.handleClick}>click</button>
        <br />
        <button onClick={this.handleShow}>show</button>
        <hr />
        {this.state.show && (
          <Child name={this.state.name} count={this.state.count} />
        )}
      </>
    );
  }
}
