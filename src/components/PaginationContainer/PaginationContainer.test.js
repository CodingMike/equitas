import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PaginationContainer from './PaginationContainer';

test('renders current page and total pages', () => {
  render(
    <PaginationContainer
      totalPages={10}
      currentPage={3}
      onPageChange={() => {}}
    />
  );

  const pageText = screen.getByText('Page 3 / 10');
  expect(pageText).toBeInTheDocument();
});

test('previous button is disabled on first page', () => {
  render(
    <PaginationContainer
      totalPages={5}
      currentPage={1}
      onPageChange={() => {}}
    />
  );

  const previousButton = screen.getByTestId('previous-button');
  expect(previousButton).toBeDisabled();
});

test('next button is disabled on last page', () => {
  render(
    <PaginationContainer
      totalPages={5}
      currentPage={5}
      onPageChange={() => {}}
    />
  );

  const nextButton = screen.getByTestId('next-button');
  expect(nextButton).toBeDisabled();
});

test('clicking previous button calls onPageChange with previous page', () => {
  const onPageChange = jest.fn();
  render(
    <PaginationContainer
      totalPages={5}
      currentPage={3}
      onPageChange={onPageChange}
    />
  );

  const previousButton = screen.getByTestId('previous-button');
  fireEvent.click(previousButton);

  expect(onPageChange).toHaveBeenCalledWith(2);
});

test('clicking next button calls onPageChange with next page', () => {
  const onPageChange = jest.fn();
  render(
    <PaginationContainer
      totalPages={5}
      currentPage={3}
      onPageChange={onPageChange}
    />
  );

  const nextButton = screen.getByTestId('next-button');
  fireEvent.click(nextButton);

  expect(onPageChange).toHaveBeenCalledWith(4);
});
