import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './container/HomePage';
import WeatherPage from './container/WeatherPage';
import SearchBar from './container/SearchBar';

function App(props) {
  const { testId } = props;
  return (
    <div className="App" data-testid={testId}>
      <Router>
        <Switch>
          <Route path="/weather">
            <HomePage />
          </Route>
          <Route path="/bycityname">
            <SearchBar />
          </Route>
          <Route path="/">
            <WeatherPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
App.propTypes = {
  testId: PropTypes.string,
};
export default App;
