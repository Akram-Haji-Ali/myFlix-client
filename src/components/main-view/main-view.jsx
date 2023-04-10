import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export function MainView() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get('https://myflix-bjxg.onrender.com/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onMovieClick = (movie) => {
    setSelectedMovie(movie);
  }

  const onBackClick = () => {
    setSelectedMovie(null);
  }

  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBackClick={onBackClick} />;
  } else if (movies.length === 0) {
    return <div className="main-view">The list is empty!</div>;
  } else {
    return (
      <div className="main-view">
        {movies.map(movie => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onMovieClick={onMovieClick}
          />
        ))}
      </div>
    );
  }
}

MainView.propTypes = {
  movies: PropTypes.array.isRequired,
  selectedMovie: PropTypes.object,
  onMovieClick: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired
};

