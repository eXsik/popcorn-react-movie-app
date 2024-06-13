import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({ id, onCloseMovie, onAddWatched, watched }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(id);
  const watchedUserRating = watched.find((movie) => movie.imdbID === id)?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: id,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
      userRating,
    };

    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };


  useEffect(() => {
    const closeEvent = (event) => {
      if(event.code === 'Escape') onCloseMovie();
    }

    document.addEventListener('keydown', closeEvent)
  
    return () => {
      document.removeEventListener('keydown', closeEvent);
    }
  }, [onCloseMovie])
  

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
      );
      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [id]);

  useEffect(() => {
    if (!title) return;

    document.title = `Movie | ${title}`;

    return function () {(document.title = 'Popcorn Movie App')} 
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of the ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>star</span>
                {imdbRating} IMDb rating 
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  ></StarRating>

                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>You rated this movie already with {watchedUserRating} <span>⭐️</span>.</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
