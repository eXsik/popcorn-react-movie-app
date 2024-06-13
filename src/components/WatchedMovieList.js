import React from 'react'
import WatchedMovieItem from './WatchedMovieItem';

const WatchedMovieList = ({watched}) => {
    return (
        <ul className="list">
          {watched.map((movie) => (
            <WatchedMovieItem movie={movie} key={movie.imdbID}/>
          ))}
        </ul>
      );
}

export default WatchedMovieList