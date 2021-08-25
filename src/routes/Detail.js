import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location,history } = this.props;
        console.log(location.state);
        if (location.state === undefined) {
            history.push('/');
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
            <div className='movie'>
                <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                <div className="movie_data">
                    <h3 className="movie_title">{location.state.title}</h3>
                    <h5 className="movie_year">{location.state.year}</h5>
                    <p className="movie_genres">{location.state.genre}</p>
                    <h5 className="movie_summary">{location.state.summary}</h5>
                </div>
            </div>
        )
        } else {
            return null;
        }
        
    }
}

export default Detail;