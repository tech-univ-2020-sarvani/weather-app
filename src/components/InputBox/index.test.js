import React from 'react';
import { render } from '@testing-library/react';
import InputBox from './index';

describe('The InputBox component', () => {
  it('shouls render correctly', () => {
    const { asFragment } = render(<InputBox testId="test-input" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
