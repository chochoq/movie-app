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
        <button>add</button>
        <button>minus</button>
      </div>
    )
  }
}

export default App;
