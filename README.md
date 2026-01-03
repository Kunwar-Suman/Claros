# Claros Dashboard

A modern, responsive dashboard application built with React, TypeScript, Redux Toolkit, and TailwindCSS. This project demonstrates best practices in web development with a clean, user-friendly interface.

## 🌟 Features

- **📊 Data Management**: Interactive table displaying user data from JSONPlaceholder API
- **🔍 Real-time Search**: Instant search across multiple fields (name, email, username, company)
- **📄 Smart Pagination**: Navigate through data with an elegant pagination system
- **📱 Fully Responsive**: Beautiful UI that works seamlessly on desktop, tablet, and mobile
- **⚡ Fast & Efficient**: Built with Vite for lightning-fast development and optimized builds
- **🎨 Modern Design**: Clean interface using TailwindCSS with smooth animations
- **🔄 State Management**: Predictable state with Redux Toolkit
- **🛡️ Type Safety**: Full TypeScript support for better code quality
- **⚠️ Error Handling**: User-friendly error messages with retry functionality
- **💀 Loading States**: Skeleton loaders for better UX
- **🧪 Tested**: Comprehensive unit tests with Vitest

## 🚀 Tech Stack

- **[React 18](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - Efficient state management
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[React Testing Library](https://testing-library.com/react)** - Testing utilities

## 📋 Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

## 🛠️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Kunwar-Suman/Claros.git
cd Claros
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Visit `http://localhost:5173` to see the application running.

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm test` | Run unit tests |
| `npm run lint` | Lint code with ESLint |

## 📁 Project Structure

```
Claros/
├── src/
│   ├── components/         # React components
│   │   ├── ErrorMessage.tsx    # Error display component
│   │   ├── Header.tsx          # Page header
│   │   ├── Home.tsx            # Home page
│   │   ├── LoadingSkeleton.tsx # Loading state component
│   │   ├── Pagination.tsx      # Pagination controls
│   │   ├── SearchBar.tsx       # Search input
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   └── UserTable.tsx       # Data table
│   ├── features/          # Redux slices
│   │   └── usersSlice.ts      # User state management
│   ├── store/             # Redux store
│   │   ├── hooks.ts           # Typed Redux hooks
│   │   └── store.ts           # Store configuration
│   ├── test/              # Unit tests
│   │   ├── Home.test.tsx
│   │   ├── SearchBar.test.tsx
│   │   ├── usersSlice.test.ts
│   │   └── setup.ts
│   ├── types/             # TypeScript types
│   │   └── user.types.ts
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js     # TailwindCSS config
├── tsconfig.json          # TypeScript config
└── vite.config.ts         # Vite config
```

## 🎯 Key Features Explained

### Search Functionality
- Search across name, email, username, and company name
- Real-time filtering as you type
- Clear button to reset search

### Pagination
- Configurable items per page (default: 5)
- Smart page number display with ellipsis
- Previous/Next navigation
- Mobile-friendly controls

### State Management
- Centralized Redux store
- Async data fetching with Redux Toolkit
- Optimistic UI updates
- Error state management

### Error Handling
- Graceful error messages
- Retry functionality
- Network error handling
- User-friendly feedback

## 🌐 API Integration

This application uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch user data:

- **Endpoint**: `https://jsonplaceholder.typicode.com/users`
- **Method**: GET
- **Data**: 10 sample users with complete information

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- Component rendering
- User interactions
- Redux state management
- Search and filter logic

## 🎨 Design Philosophy

- **Clean & Minimal**: Focus on content and functionality
- **Responsive First**: Mobile-friendly from the ground up
- **Performance**: Optimized for speed and efficiency
- **Accessibility**: Semantic HTML and ARIA labels
- **User Experience**: Smooth animations and clear feedback

## 🚀 Deployment

Build the project for production:

```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- And more...

## 📝 Development Workflow

This project follows a clear Git commit strategy:

1. ✅ Initial project setup
2. ✅ Redux store and state management
3. ✅ Dashboard layout with sidebar
4. ✅ Data table with search and pagination
5. ✅ Tests and final polish

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for learning or production!

## 👤 Author

**Kunwar Suman**
- GitHub: [@Kunwar-Suman](https://github.com/Kunwar-Suman)

## 🙏 Acknowledgments

- JSONPlaceholder for the free API
- React and Redux teams for amazing tools
- TailwindCSS for beautiful styling utilities
- Vite for blazing-fast development experience

---

**Made with ❤️ and modern web technologies**
