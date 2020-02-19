import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';

describe('The button component', () => {
  it('shouls render correctly', () => {
    const { asFragment } = render(<Button testId="test-btn" path="/">Test-text</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
