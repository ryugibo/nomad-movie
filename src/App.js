import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello');
  }

  componentDidMount() {
    console.log('component rendered');
  }

  componentDidUpdate() {
    console.log('I just updated');
  }

  componentWillUnmount() {
    console.log('Goodbye, cruel world');
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState(current => ({
      count: current.count - 1,
    }));
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>숫자: { this.state.count }</h1>
        <button onClick={ this.add }>더하기</button>
        <button onClick={ this.minus }>빼기</button>
      </div>
    );
  }
}

export default App;
