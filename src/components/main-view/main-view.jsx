// imports react into the file
import React from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

// export makes the new component usable by others, the class indicates that the component is a class component and not a function while MainView is the new components name . extends React.component uses generic react component template and creates the MainView Component
export class MainView extends React.Component {
  constructor() {
    // React uses this constructor method to create the component
    super(); // it means call the constructor of the parent class i.e the class called after the extends keyword (React.Component)
    this.state = {
      // the MainView state is initialized
      movies: [
        {
          _id: "63bb8506fd5805dcd9b84909",
          Title: "Silence of the Lambs",
          Description:
            "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another terrible serial killer.",
          Genre: {
            Name: "Thriller",
            Description:
              "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience",
          },
          Director: {
            Name: "Jonathan Demme",
            Bio: "Robert Jonathan Demme was an American producer and screenwriter.",
            Birth: "1944",
            Death: "2017",
          },
          ImagePath:
          "https://64.media.tumblr.com/3fcb277e8c2d9b0850072ccc63db31cf/tumblr_inline_psxggjQLTL1rharm7_500.png",
          Featured: true,
        },
        {
          _id: "63bb88d1fd5805dcd9b8490d",
          Title: "The Interstellar",
          Description:
            "A team of explorers travel through a wormhole in space in an attempt to ensure humanit`s survival",
          Genre: {
            Name: "science fiction",
            Description:
              "science fiction is a genre of fiction in which the stories often tell about science and technology of the future",
          },
          Director: {
            Name: "Christopher Nolan",
            Bio: "Best known for his cerebral, often nonlinear, storytelling, acclaimed writer-director Christopher Nolan was born on July 30, 1970, in London, England. Over the course of 15 years of filmmaking, Nolan has gone from low-budget independent films to working on some of the biggest blockbusters ever made.",
            Birth: "1970",
          },
          ImagePath:
            "https://m.media-amazon.com/images/M/MV5BZDRhNjNlNDItNDAzNy00NjVmLWFiYTgtZGE5MGNjMWY2OGM5XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UX500_CR0,0,500,281_.jpg",
          Featured: true ,
        },
        {
          _id: "63bb89f9fd5805dcd9b8490e",
          Title: "Joker",
          Description:
            "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
          Genre: {
            Name: "Thriller",
            Description:
              "Films that evoke excitement and suspense in the audience. The suspense element found in most film`s plots is particularly exploited by the filmmaker in this genre. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.",
          },
          Director: {
            Name: "Todd Phillips",
            Bio: " is an American film director, producer, and screenwriter. He began his career in 1993 and directed films in the 2000s such as Road Trip, Old School, Starsky & Hutch, and School for Scoundrels.",
            Birth: "1993",
          },
          ImagePath:
            "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UX500_CR0,0,500,281_.jpg",
          Featured: true,
        },
      ],
    };
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    //if (selectedMovie) return <MovieView movie={selectedMovie} />;

    if (movies.length === 0)
      return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView
            movie={selectedMovie}
            onBackClick={(newSelectedMovie) => {
              this.setSelectedMovie(newSelectedMovie);
            }}
          />
        ) : (
          movies.map((movie) => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onMovieClick={(movie) => {
                this.setSelectedMovie(movie);
              }}
            />
          ))
        )}
      </div>
    );
  }
}