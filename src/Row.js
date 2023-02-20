import React from 'react';
import useFetchingQuery from './hooks/useFetchingQuery';
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies] = useFetchingQuery(fetchUrl);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie?.poster_path) ||
              (!isLargeRow && movie?.backdrop_path)) && (
              <img
                src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
                className={`row__poster ${
                  isLargeRow ? 'row__posterLarge' : ''
                }`}
                key={movie.id}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
