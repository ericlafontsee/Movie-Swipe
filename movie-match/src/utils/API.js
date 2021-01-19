import axios from "axios";

export default {
  // Gets all movies
  getMovies: function () {
    return axios.get(
      // Gets all movies
      "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
  },
  getMatches: function() {
    return axios.get("/api/movies")
  },
  // Gets movie with given id
  getMovie: function (id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes movie with given id
  deleteMovie: function (id) {
    return axios.delete("/api/movies/" + id);
  },
  saveMovie: function (movieData) {
    return axios.post("/api/movies", movieData);
  }
};
