import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>movie app</h1>
        <div>{this.state.count}</div>
        <button onClick={this.state.count +1}>add</button>
        <button>minus</button>
      </div>
    )
  }
}

export default App;
