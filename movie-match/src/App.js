import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import theme from "./components/theme";
import Header from './components/header/header';
import LandingPage from './pages/landing';

function App() {
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
