import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme";
import Header from './components/header/header';
import LandingPage from './pages/landing';
import React, { useState, useEffect } from "react";
import axios from "axios";
let searchResults = [];
const queryGenre =
  "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";


function App() {
 
  // const [movieState, setmovieState] = useState({
  //   title: results.title,
  //   image: "matrix",
  //   description: results.overview,
  //   rating: "R",
  //   release: results.release,
  //   genre: "SciFi"
  // });

  useEffect(() => {
    axios.get(queryGenre).then((response) => {
      console.log(response);
      let results = response.data.results;
      searchResults = results;
      console.log(searchResults);
      // setmovieState.title = results.title;
  }, [])});

  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={LandingPage}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
