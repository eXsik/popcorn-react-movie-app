import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies &&
        movies?.map((movie) => (
          <MovieItem
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
          />
        ))}
    </ul>
  );
};

export default MovieList;
