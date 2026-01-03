# Claros Dashboard

## Project Overview
This is a modern, responsive dashboard application demonstrating best practices in React development with TypeScript, Redux Toolkit, and TailwindCSS.

## Commits Summary

### Commit 1: Initial Project Setup
- Set up React + TypeScript project with Vite
- Configured TailwindCSS for styling
- Added Redux Toolkit and Axios dependencies
- Created initial project structure and README

### Commit 2: Redux Store and State Management
- Created user types and interfaces
- Implemented usersSlice with async thunks
- Set up Redux store configuration
- Added typed hooks for Redux

### Commit 3: Dashboard Layout with Sidebar
- Built responsive sidebar with mobile menu
- Created header component
- Designed home page with stats cards
- Implemented navigation between views

### Commit 4: Data Table with Features
- Integrated JSONPlaceholder API
- Built comprehensive user table component
- Implemented real-time search functionality
- Added smart pagination with ellipsis
- Included loading and error states

### Commit 5: Tests and Documentation
- Added Vitest testing setup
- Created unit tests for components and Redux
- Implemented loading skeleton and error components
- Enhanced README with comprehensive documentation
- Added CONTRIBUTING guidelines

### Commit 6: Final Polish
- Added MIT LICENSE
- Enhanced HTML metadata
- Final code cleanup

## Technical Highlights

### State Management
- Redux Toolkit for efficient state management
- Async data fetching with createAsyncThunk
- Real-time filtering and search in Redux

### UI/UX
- Fully responsive design (mobile-first)
- Loading skeletons for better UX
- Error boundaries with retry functionality
- Smooth animations and transitions

### Code Quality
- TypeScript for type safety
- Unit tests with Vitest
- Clean component architecture
- Reusable components

### Performance
- Vite for fast development
- Optimized pagination (5 items per page)
- Efficient re-renders with Redux selectors

## Features Implemented

✅ User data table from API
✅ Real-time search (name, email, username, company)
✅ Pagination with smart page numbers
✅ Responsive sidebar navigation
✅ Loading states with skeleton UI
✅ Error handling with retry
✅ TypeScript throughout
✅ Redux state management
✅ Unit tests
✅ Comprehensive documentation

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to see the app in action!

## Testing

```bash
npm test
```

## Building

```bash
npm run build
```

This project demonstrates professional-level React development suitable for production use.

