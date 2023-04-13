import React from "react";
import PropTypes from "prop-types";
import {Button, Card, Row, Col} from "react-bootstrap";
import {MainView}  from "../main-view/main-view";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card
      onClick={() => {
        onMovieClick(movie);
      }}
      className='h-100'
    >
      <Row className='h-50'>
        <Col className='h-100 text-center mt-3'>
          <Card.Img
            variant='top'
            src={movie.image}
            className='img-fluid h-100 w-auto movie-card-img'
          />
        </Col>
      </Row>

      <Card.Body className='d-flex flex-column'>
        <Card.Title className='mt-2'>{movie.title}</Card.Title>

        <Card.Text className='mt-3'>{movie.description}</Card.Text>
        <div className='mt-auto text-end'>
          <Button variant='secondary' size='sm' className='mt-auto'>
            Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
  
  MovieCard.propTypes = {
    movie: PropTypes.shape({
        
      director: PropTypes.shape({
          Name: PropTypes.string.isRequired,
        }),
      genre: PropTypes.shape({
        Name: PropTypes.string.isRequired
      }),
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired, onMovieClick: PropTypes.func.isRequired
  };