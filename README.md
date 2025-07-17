# Blog Application - Open Source Learning Project

This is a demo blog application designed for teaching students how to identify and fix issues in open source projects. The codebase contains various intentional bugs, security issues, and bad practices that students can discover and fix.

## Project Structure

```
blog-app/
├── src/
│   ├── index.js          # Main application entry point
│   ├── config/           # Configuration files (with security issues to fix)
│   ├── models/           # Data models with schema issues
│   ├── routes/           # API routes with various bugs
│   ├── services/         # Business logic with logic errors
│   ├── middleware/       # Middleware with security vulnerabilities
│   └── utils/            # Utility functions with bugs
└── package.json
```

## Common Issues to Find and Fix

### 1. Syntax Errors
- Missing semicolons
- Missing closing brackets
- Typos in variable names


### 2. Logic Errors
- Assignment instead of comparison operators
- Wrong array methods
- Incorrect conditional logic

### 3. Security Issues
- Hardcoded credentials
- SQL injection vulnerabilities
- Missing input validation
- Weak encryption
- Exposed sensitive data

### 4. Best Practice Violations
- Not using async/await properly
- Missing error handling
- Memory leaks
- Synchronous file operations

## Getting Started

1. Clone the repository
2. Run `npm install`
3. Start finding and fixing issues!

## Running the Application

```bash
# Development mode
npm run dev

# Production mode
npm start

# Run tests
npm test

# Lint code
npm run lint
```

## Learning Objectives

- Understanding common coding mistakes
- Learning debugging techniques
- Understanding security best practices
- Learning to read and understand existing codebases
- Contributing to open source projects

## Contributing

Students should:
1. Fork the repository
2. Create a feature branch
3. Fix issues they find
4. Submit pull requests with clear descriptions

Happy debugging! 🐛