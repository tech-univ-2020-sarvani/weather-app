import axios from 'axios';
import { renderHook, act } from '@testing-library/react-hooks';
import useInput from './useInput';
import url from '../constants/weatherapp.json';

describe('the useInput hook', () => {
  it('should make an api call to fetch defaut text and set it in state', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { name: 'bengaluru' } });
    const { result, waitForNextUpdate } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(mockAxios).toHaveBeenCalledWith(url.url);
    expect(result.current[0]).toEqual({ name: 'bengaluru' });
  });
  it('should update the params when the setParams function is called', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { name: 'bengaluru' } });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(result.current[0]).toEqual({ name: 'bengaluru' });
    act(() => {
      result.current[1]({ name: 'hyderabad' });
    });
    expect(result.current[0]).toEqual({ name: 'hyderabad' });
  });
  it('should update the listLoadComplete to true when the api call is done', async () => {
    const mockAxios = jest.spyOn(axios, 'get');
    mockAxios.mockResolvedValue({ data: { name: 'bengaluru' } });
    const {
      result,
      waitForNextUpdate,
    } = renderHook(() => useInput({}, url.url));
    await waitForNextUpdate();
    expect(result.current[2]).toBe(true);
  });
});
