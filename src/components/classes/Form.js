import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: 'gb',
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <div>hello, {this.state.count}</div>
        <button onClick={this.handleClick}>click</button>
        <p>Name: {this.props.name}</p>
        <input type="text" onChange={this.handleChange} value={this.state.name}/>
      </>
    );
  }
}
