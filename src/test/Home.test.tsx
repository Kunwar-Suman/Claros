import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/usersSlice';
import Home from '../components/Home';

describe('Home Component', () => {
  it('renders welcome message', () => {
    const store = configureStore({
      reducer: {
        users: usersReducer,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Welcome to Claros Dashboard/i)).toBeDefined();
  });

  it('displays stats cards', () => {
    const store = configureStore({
      reducer: {
        users: usersReducer,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Total Users/i)).toBeDefined();
    expect(screen.getByText(/Active Now/i)).toBeDefined();
    expect(screen.getByText(/Data Sources/i)).toBeDefined();
  });
});

