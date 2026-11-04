import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { fireEvent, render, screen } from '@testing-library/react';
import axios from 'axios';
import Root from './js/components/root';
import reducers from './js/reducers';

vi.mock('axios', () => ({ default: { get: vi.fn() } }));
beforeEach(() => vi.clearAllMocks());

function showApp() {
  render(<Provider store={createStore(reducers, applyMiddleware(ReduxPromise))}><Root /></Provider>);
}

it('searches a breed and displays its image while clearing the input', async () => {
  axios.get.mockResolvedValue({ data: { message: 'https://example.com/dog.jpg' } });
  showApp();
  expect(screen.getByText('Waiting for you to search....')).toBeInTheDocument();
  expect(screen.getByAltText('Dog you love').src).toContain('default.jpg');
  fireEvent.change(screen.getByPlaceholderText('Search by dog breed'), { target: { value: 'HUSKY' } });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(await screen.findByText('Image of husky')).toBeInTheDocument();
  expect(axios.get).toHaveBeenCalledWith('https://dog.ceo/api/breed/husky/images/random');
  expect(screen.getByAltText('Dog you love')).toHaveAttribute('src', 'https://example.com/dog.jpg');
  expect(screen.getByPlaceholderText('Search by dog breed')).toHaveValue('');
});

it('preserves the missing-breed illustration and message', async () => {
  axios.get.mockResolvedValue({ data: { message: 'Breed not found' } });
  showApp();
  fireEvent.change(screen.getByPlaceholderText('Search by dog breed'), { target: { value: 'unknown' } });
  fireEvent.click(screen.getByRole('button', { name: 'Search' }));
  expect(await screen.findByText("Sorry..... Couldn't find unknown breed dog")).toBeInTheDocument();
  expect(screen.getByAltText('Dog you love').src).toContain('dog_error.jpg');
});
