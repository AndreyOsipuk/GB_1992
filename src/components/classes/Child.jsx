import { Component, createRef } from 'react';

export class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
    this.myRef = createRef();
    this.interval = null;
  }

  componentDidMount() {
    console.log('Child did mount');
    // this.interval = setInterval(() => {
    //   console.log(1);
    // }, 1000);
    // this.myRef.current.addEventListener('click', () => {
    //   console.log('click');
    // });
  }

  componentDidUpdate() {
    console.log('Child did update', this.props);
  }

  componentWillUnmount() {
    console.log('Child will unmount');
    // clearInterval(this.interval);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count % 2 === 0) {
  //     return true;
  //   }

  //   if (nextProps.name === this.props.name) {
  //     return false;
  //   }
  // }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.count < 5) {
      return { count: nextProps.count };
    }

    return null;
  }

  getSnapshotBeforeUpdate() {
    return { value: 999 };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <p>Child component</p>
        <p ref={this.myRef}>{this.state.count}</p>
        <button onClick={this.handleClick}>click</button>
      </>
    );
  }
}
