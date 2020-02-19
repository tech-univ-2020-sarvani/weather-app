import React from 'react';
import PropTypes from 'prop-types';
// import * as styles from './index.css';
import './index.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Button = (props) => {
  const { children, testId, path } = props;
  return (
    <div className="buttonContainer">
      <Router>
        <Link to={path}>
          <button className="button" type="button" data-testid={testId}>{children}</button>
        </Link>
      </Router>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  testId: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
