import "./movie-view.scss";
import {Button, Card, Row, Col} from "react-bootstrap";

export const MovieView = ({ movie, onBackClick }) => {
  return (
    <Row className='d-flex flex-row-reverse p-3'>
      <Col md={5} className='text-center text-md-end'>
        <img
          src={movie.image}
          alt={`Poster for ${movie.title}`}
          className='img-fluid h-100 w-auto movie-view-img'
        />
      </Col>
      <Col md={7} className='d-flex flex-column'>
        <Row className='d-flex flex-row  justify-content-between'>
          <Col md={9} className='d-flex flex-column'>
            <h3 className='my-0'>
              <span>Title: </span>
              <span>{movie.title}</span>
            </h3>
            <h5 className='mt-1 text-left text-muted'>
              <span>Director: </span>
              <span>{movie.director.name}</span>
            </h5>
          </Col>

          <Col md={3} className='align-self-end mb-2 text-end'>
            <span>Genre: </span>
            <span className='fw-bolder'>{movie.genre.name}</span>
          </Col>
        </Row>
        <div className='mt-md-5 mb-4'>
          <div className='text-decoration-underline mb-2'>Description: </div>
          <span>{movie.description}</span>
        </div>
        <div className='mt-auto text-end mb-md-4'>
          <Button
            onClick={() => {
              onBackClick();
            }}
            variant='secondary'
            size='lg'
          >
            Back
          </Button>
        </div>
      </Col>
    </Row>
  );
};