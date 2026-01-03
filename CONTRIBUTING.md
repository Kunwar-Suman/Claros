# Contributing to Claros Dashboard

Thank you for considering contributing to Claros Dashboard! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear, descriptive title
- Provide a detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**
   ```bash
   git commit -m "Add some amazing feature"
   ```

5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**

## 📋 Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing naming conventions
- Use functional components with hooks
- Keep components small and focused
- Write meaningful commit messages

### Component Structure

```typescript
import React from 'react';

interface ComponentProps {
  prop1: string;
  prop2?: number;
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX
  );
};

export default Component;
```

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Aim for good test coverage

```bash
npm test
```

### Commit Messages

Follow conventional commits:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example: `feat: add user profile page`

## 🧪 Testing Your Changes

Before submitting:

1. Run tests: `npm test`
2. Check linting: `npm run lint`
3. Build the project: `npm run build`
4. Test in development: `npm run dev`

## 📝 Need Help?

Feel free to ask questions by creating an issue with the "question" label.

## 🎉 Thank You!

Your contributions make this project better for everyone!

