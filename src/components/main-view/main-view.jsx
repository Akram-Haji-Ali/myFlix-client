import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view"; 
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

import {Button, Card, Row, Col,} from "react-bootstrap";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // useEffect hook allows React to perform side effects in component e.g fetching data
  useEffect(() => {
    if (!token) {
      return;
    }
    // set loading before sending API request
    setLoading(true);
    fetch("https://myflix-bjxg.onrender.com/movies", "http://localhost:8080/movies", {
      headers: {Authorization: `Bearer ${token}`}
    })
      .then((response) => response.json())
      .then((data) => {
        // stops loading after response received
        setLoading(false);
        console.log('data', data);
        const moviesFromApi = data.map((movie) => {
          return {
          // value names match to API database
          id: movie._id,
          title: movie.Title,
          image: movie.imageUrl,
          description: movie.Description,
          genre: movie.Genre.Name,
          director: movie.Director.Name,
          release: movie.Release
          }
        });
        setMovies(moviesFromApi);
      })
  }, [token])

  let getMovieView = (selectedMovie) => {
    let similarMovies = movies.filter((movie) => {
      return (
        movie.genre.name === selectedMovie.genre.name &&
        movie.title !== selectedMovie.title
      );
    });
    console.log(similarMovies);
    return (
      <>
        <Col>
          <MovieView
            movie={selectedMovie}
            onBackClick={() => setSelectedMovie(null)}
          />
        </Col>

        {/* <hr /> */}
        <h2 className='mt-0'>Similar movies</h2>
        <hr />
        {similarMovies.map((movie) => (
          <Col className='mb-5' key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ))}
      </>
    );
  };

  return (
    <Row className='justify-content-md-center'>
      {!user ? (
        <Col md={5}>
          <LoginView
            onLoggedIn={(user, token) => {
              setUser(user);
              setToken(token);
            }}
          />
          <div className='mx-4 mt-2 text-muted text-end'>
            Don't have an account? <br />
            Registrate now!
          </div>
          <SignupView />
        </Col>
      ) : selectedMovie ? (
        getMovieView(selectedMovie)
      ) : movies.length === 0 ? (
        <div>The list is empty!</div>
      ) : (
        <>
          <Row>
            <Col className='text-end mt-5'>
              <Button
                onClick={() => {
                  setUser(null);
                  setToken(null);
                  localStorage.clear();
                }}
                variant='primary'
                size='lg'
                className='mb-5'
              >
                Sign out
              </Button>
            </Col>
          </Row>
          {movies.map((movie) => (
            <Col className='mb-5' key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MovieCard
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};