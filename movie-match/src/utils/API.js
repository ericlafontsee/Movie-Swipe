import axios from "axios";

export default {
  getMovie: function () {
    return axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
  }
};
