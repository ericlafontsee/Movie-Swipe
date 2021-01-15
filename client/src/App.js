import React from "react";
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";



var selectedGenre = 80;
  var genreID = parseInt(selectedGenre);
  // var APIKey = "1a0244fad68dbfa1e242e232ce4a493c"; //TMDB api
  queryGenre =
    "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=" +
    genreID +
    "&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"; //2020 most popular movies



function getMovies(){
  axios.get(queryGenre).then(response => {
      console.log(response);
  })
}


function App() {
  return (
    <Router>
        <Route exact path="/"/>
    </Router>
  );
}

export default App;
