import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class Home extends React.Component {
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
      <section className="container">
        {is_loading ?(
          <div className="loader">
            <h1 className="loader_text">Loading...</h1>
          </div>
        ) : (
            <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                poster={movie.medium_cover_image}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
              />
              ))
            }
          </div>
        )}
      </section>
    )
  };
}

export default Home;
