import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme";
import Header from './components/header/header';
import MatchingPage from './pages/matching';
import MyMatches from './pages/mymatches';
import LikedMovies from './pages/likedmovies';
import LoginPage from './pages/login';
import React from "react";

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/matching"
            component={MatchingPage}
          />
          <Route
            exact
            path="/mymatches"
            component={MyMatches}
          />
          <Route
            exact
            path="/"
            component={LoginPage}
          />
          <Route
            exact
            path="/liked"
            component={LikedMovies}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
