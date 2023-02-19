const requests = {
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  fetchActionMovies: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
};

export default requests;