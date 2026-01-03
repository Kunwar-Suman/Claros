# Claros Dashboard

A modern, responsive dashboard application built with React, TypeScript, Redux Toolkit, and TailwindCSS.

## Features

- 📊 **Data Table**: Display and manage data from JSONPlaceholder API
- 🔍 **Search & Filter**: Real-time search functionality
- 📄 **Pagination**: Navigate through data efficiently
- 📱 **Responsive Design**: Works seamlessly on all devices
- 🎨 **Modern UI**: Clean interface with TailwindCSS
- 🔄 **State Management**: Redux Toolkit for predictable state
- ⚡ **Error Handling**: User-friendly error messages
- 🧪 **Tested**: Unit tests included

## Tech Stack

- **React 18** with TypeScript
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **Axios** for API calls
- **Vite** for fast development

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kunwar-Suman/Claros.git
cd Claros
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

## Project Structure

```
src/
├── components/       # React components
├── features/        # Redux slices
├── store/           # Redux store configuration
├── types/           # TypeScript types
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## API

This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch and display user data.

## Contributing

Feel free to submit issues and pull requests!

## License

MIT
