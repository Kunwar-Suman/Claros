import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { User, UsersState } from '../types/user.types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Helper function to generate mock users
const generateMockUsers = (baseUsers: User[]): User[] => {
  const mockUsers: User[] = [];
  
  // Get companies and cities from base users (can be reused)
  const baseCompanies = baseUsers.map(user => user.company.name);
  const baseCities = baseUsers.map(user => user.address.city);
  
  // Additional companies and cities (can be mixed with base ones)
  const additionalCompanies = [
    'TechCorp', 'InnovateLabs', 'Digital Solutions', 'Cloud Systems', 'Data Analytics Inc',
    'Web Services Co', 'Mobile Apps Ltd', 'Software Hub', 'IT Solutions', 'DevOps Pro',
    'Code Masters', 'Future Tech', 'Smart Systems', 'NextGen Solutions', 'Cyber Security',
    'AI Innovations', 'Blockchain Co', 'Cloud Native', 'Dev Tools Inc', 'Startup Labs'
  ];
  
  const additionalCities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio',
    'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Columbus',
    'Fort Worth', 'Charlotte', 'Seattle', 'Denver', 'Boston', 'Nashville'
  ];
  
  // Combine base and additional companies/cities
  const allCompanies = [...baseCompanies, ...additionalCompanies];
  const allCities = [...baseCities, ...additionalCities];
  
  const firstNames = [
    'Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Blake', 'Cameron',
    'Dakota', 'Emery', 'Finley', 'Harper', 'Hayden', 'Jamie', 'Kai', 'Logan', 'Parker', 'Reese'
  ];
  const lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez',
    'Martinez', 'Hernandez', 'Lopez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson',
    'Martin', 'Lee'
  ];

  // Generate 20 additional mock users (companies and cities can repeat)
  for (let i = 0; i < 20; i++) {
    const firstName = firstNames[i % firstNames.length];
    const lastName = lastNames[(i + 10) % lastNames.length];
    
    // Randomly select from all companies and cities (allowing repetition)
    const company = allCompanies[Math.floor(Math.random() * allCompanies.length)];
    const city = allCities[Math.floor(Math.random() * allCities.length)];
    
    mockUsers.push({
      id: baseUsers.length + i + 1,
      name: `${firstName} ${lastName}`,
      username: `${firstName.toLowerCase()}${lastName.toLowerCase()}${i}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@example.com`,
      phone: `+1-555-${String(Math.floor(Math.random() * 9000) + 1000)}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      website: `www.${firstName.toLowerCase()}${lastName.toLowerCase()}.com`,
      company: {
        name: company
      },
      address: {
        city: city
      }
    });
  }

  return [...baseUsers, ...mockUsers];
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk<User[], void, { rejectValue: string }>(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<User[]>(API_URL);
      // Generate additional users to reach 30 total
      const allUsers = generateMockUsers(response.data);
      return allUsers;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  }
);

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  loading: false,
  error: null,
  searchQuery: '',
  currentPage: 1,
  itemsPerPage: 5,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page on search
      
      // Filter users based on search query
      if (action.payload.trim() === '') {
        state.filteredUsers = state.users;
      } else {
        const query = action.payload.toLowerCase();
        state.filteredUsers = state.users.filter(
          (user) =>
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.username.toLowerCase().includes(query) ||
            user.company.name.toLowerCase().includes(query)
        );
      }
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page when changing items per page
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.filteredUsers = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch users';
      });
  },
});

export const { setSearchQuery, setCurrentPage, setItemsPerPage } = usersSlice.actions;
export default usersSlice.reducer;

