import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    is_loading: true,
    movies: [],
  };

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({ movies:movies, is_loading:false });
  };

  componentDidMount() {
    this.getMovies();
  };

  render() {
    const { is_loading, movies, } = this.state;
    return (
      <div>
        {is_loading ? 'loading...' : movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            year={movie.year}
            poster={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary} />)
        )}
      </div>
    )
  };
}

export default App;
