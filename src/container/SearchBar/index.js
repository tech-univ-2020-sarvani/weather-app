import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import InputBox from '../../components/InputBox';
import './index.module.css';

const SearchBar = (props) => {
  const [text, setText] = useState('');
  const { testId } = props;
  console.log(text);
  return (
    <div className="searchbar" data-testid={testId}>
      <InputBox setText={setText} />
      <Button path={`/weather?cityname=${text}`}>Predict Weather</Button>
    </div>
  );
};

SearchBar.propTypes = {
  testId: PropTypes.string,
};

export default SearchBar;
