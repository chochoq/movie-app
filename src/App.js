import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    is_loading: true,
    movies: [],
  };

  getMovies = async() => {
    const movies = await axios.get('https://yts-proxy.now.sh//list_movies.json');
  }

  componentDidMount() {
    this.getMovies();
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
