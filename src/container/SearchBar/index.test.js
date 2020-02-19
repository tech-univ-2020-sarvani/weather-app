import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './index';

describe('The SearchBar component', () => {
  it('shouls render correctly', () => {
    const { asFragment } = render(<SearchBar testId="test-searchbar" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
