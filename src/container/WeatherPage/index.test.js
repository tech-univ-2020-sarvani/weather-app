import React from 'react';
import { render } from '@testing-library/react';
import WeatherPage from './index';

describe('The WeatherPage component', () => {
  it('shouls render correctly', () => {
    const { asFragment } = render(<WeatherPage isGeolocationAvailable isGeolocationEnabled coords />);
    expect(asFragment()).toMatchSnapshot();
  });
});
