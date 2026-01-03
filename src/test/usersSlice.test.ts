import { describe, it, expect } from 'vitest';
import usersReducer, { setSearchQuery, setCurrentPage } from '../features/usersSlice';
import { UsersState } from '../types/user.types';

const initialState: UsersState = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      phone: '123-456-7890',
      website: 'john.com',
      company: { name: 'Acme Corp' },
      address: { city: 'New York' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      phone: '098-765-4321',
      website: 'jane.com',
      company: { name: 'Tech Inc' },
      address: { city: 'Los Angeles' },
    },
  ],
  filteredUsers: [],
  loading: false,
  error: null,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 5,
};

describe('usersSlice', () => {
  it('should handle initial state', () => {
    expect(usersReducer(undefined, { type: 'unknown' })).toEqual({
      users: [],
      filteredUsers: [],
      loading: false,
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
    });
  });

  it('should handle setSearchQuery', () => {
    const actual = usersReducer(
      { ...initialState, filteredUsers: initialState.users },
      setSearchQuery('John')
    );
    expect(actual.searchQuery).toBe('John');
    expect(actual.currentPage).toBe(1);
    expect(actual.filteredUsers.length).toBe(1);
    expect(actual.filteredUsers[0].name).toBe('John Doe');
  });

  it('should handle setCurrentPage', () => {
    const actual = usersReducer(initialState, setCurrentPage(2));
    expect(actual.currentPage).toBe(2);
  });

  it('should filter users by email', () => {
    const actual = usersReducer(
      { ...initialState, filteredUsers: initialState.users },
      setSearchQuery('jane@example.com')
    );
    expect(actual.filteredUsers.length).toBe(1);
    expect(actual.filteredUsers[0].email).toBe('jane@example.com');
  });

  it('should reset filtered users when search is empty', () => {
    const stateWithSearch = {
      ...initialState,
      filteredUsers: [initialState.users[0]],
      searchQuery: 'John',
    };
    const actual = usersReducer(stateWithSearch, setSearchQuery(''));
    expect(actual.filteredUsers).toEqual(initialState.users);
  });
});

