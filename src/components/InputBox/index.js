import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './index.css';

const InputBox = (props) => {
  const { testId, setText } = props;
  return (
    <input className="input" type="text" data-testid={testId} onChange={(e) => setText(e.target.value)} />
  );
};

InputBox.propTypes = {
  testId: PropTypes.string,
  setText: PropTypes.func.isRequired,
};

export default InputBox;
