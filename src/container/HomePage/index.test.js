import React from 'react';
import { render } from '@testing-library/react';
import HomePage from './index';
import utils from '../../utils/useQuery';

describe('The HomePage container', () => {
  it('should render correctly', () => {
    const mockuseQuery = jest.spyOn(utils, 'useQuery');
    mockuseQuery.mockResolvedValue({ get: jest.fn() });
    const { asFragment } = render(<HomePage testId="test-homepage" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display Loading... when the api call is not complete', () => {

  });
});
