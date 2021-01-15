
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme";
import Header from './components/header/header';
import LandingPage from './pages/landing';
import React, { useState } from "react";
import axios from "axios";

const queryGenre =
  "https://api.themoviedb.org/3/discover/movie?api_key=1a0244fad68dbfa1e242e232ce4a493c&language=en-US&primary_release_year=2020&with_genres=80&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";


function App() {
  function getUser() {
    axios.get(queryGenre).then((response) => {
      let results = response.data.results[0];
      setmovieState.title
    });
  }

  const [movieState, setmovieState] = useState({
    title: "The Matrix",
    image: "matrix",
    description: "The Matrix",
    rating: "R",
    release: "1998",
    genre: "SciFi"
  });

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

    <>
//       <Header />
//       {/* <Route path="/">
//         {this.state.matched ? <Redirect to="/matched" /> : <Redirect to="/" />}
//       </Route> */}

//       <div>
//         <div>Title: {movieState.title}</div>
//         <div>image: {movieState.image}</div>
//         <div>description: {movieState.description}</div>
//         <button onClick={() => setmovieState({ ...movieState, title: "yo" })}>
//           RIGHT
//         </button>
//       </div>
//     </>

  );
}

export default App;
