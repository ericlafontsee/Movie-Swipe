import MovieCard from "../components/card/card";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
let results;
// const queryGenre =
//   "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

export default function LandingPage() {
  const [movieState, setmovieState] = useState({
  title: "",
  posterPath: "",
  overview: "",
  rating: "",
  release: "",
  genre: ""
  });
  
  useEffect(() => {
    loadMovies("");
  }, []);

  function loadMovies() {
    API.getMovie()
      .then((response) => {
        results = response.data;
        setmovieState({ results });
        console.log(movieState);
      })
      .catch((err) => console.log(err));
  }

  return (
    <MovieCard
    movies={movieState}
      // title={movieState.title}
      // overview={movieState.overview}
      // poster={movieState.posterPath}
    />
  );
}
