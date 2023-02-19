import axios from './axios';
import requests from './Requests';
import { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  const truncate = (string, numberOfCharsFromCut) => {
    return string?.length > numberOfCharsFromCut
      ? string.substring(0, numberOfCharsFromCut - 1) + '...'
      : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        // backgroundImage: 'url(./netflix-banner.png)',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
