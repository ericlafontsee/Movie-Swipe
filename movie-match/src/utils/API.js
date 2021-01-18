import axios from "axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies/");
  },
  // Gets movie with given id
  getMovie: function(id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes movie with given id
  deleteMovie: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  saveMovie: function(movieData) {
    return axios.post("/api/movies", movieData);
  }
};