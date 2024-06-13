import React from 'react'
import WatchedMovieItem from './WatchedMovieItem';

const WatchedMovieList = ({watched, onDeleteWatched}) => {
    return (
        <ul className="list">
          {watched.map((movie) => (
            <WatchedMovieItem movie={movie} key={movie.imdbID} onDeleteWatched={onDeleteWatched} />
          ))}
        </ul>
      );
}

export default WatchedMovieList