import React from 'react';

class App extends React.Component {
  state = {
    is_loading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ is_loading: false });
    }, 6000);
  }

  render() {
    const { is_loading } = this.state;
    return (
      <div>
        {is_loading ? 'loading...': 'ready!'}
      </div>
    )
  }
}

export default App;
