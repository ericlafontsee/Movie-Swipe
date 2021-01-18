import MovieCard from "../components/card/card";
import React from "react";
export default function MatchingPage() {

  // const [movieState, setmovieState] = useState({
  // title: "",
  // posterPath: "",
  // overview: "",
  // rating: "",
  // release: "",
  // genre: ""
  // });
  
  // useEffect(() => {
  //   loadMovies("");
  // }, []);

  // function loadMovies() {
  //   API.getMovie()
  //     .then((response) => {
  //       results = response.data;
  //       setmovieState({ results });
  //       console.log(movieState);
  //     })
  //     .catch((err) => console.log(err));
  // }

  return (
    <MovieCard
    // movies={movieState}
      // title={movieState.title}
      // overview={movieState.overview}
      // poster={movieState.posterPath}
    />

  );
}
