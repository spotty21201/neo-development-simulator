# Contributing to Neo Development Simulator

We love your input! We want to make contributing to Neo Development Simulator as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

1. **Fork the repo** and create your branch from `master`.
2. **If you've added code that should be tested, add tests**.
3. **If you've changed APIs, update the documentation**.
4. **Ensure the test suite passes**.
5. **Make sure your code lints**.
6. **Issue that pull request!**

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using GitHub's issues

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/your-username/neo-development-simulator/issues).

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Development Setup

1.  **Fork and clone the repository**
    ```bash
    git clone https://github.com/your-username/neo-development-simulator.git
    cd neo-development-simulator
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up your environment**
    ```bash
    cp .env.example .env
    # Edit .env with your configuration
    ```

4.  **Set up the database**
    ```bash
    npm run db:push
    ```

5.  **Run the development server**
    ```bash
    npm run dev
    ```

## Code Style

- **TypeScript**: All code must be written in TypeScript with proper type annotations
- **ESLint**: Follow the configured ESLint rules
- **Prettier**: Code should be formatted with Prettier
- **Component Structure**: Use the existing component structure and patterns
- **Naming Conventions**: Use camelCase for variables, PascalCase for components

## Commit Messages

Use semantic commit messages:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

Example:
```
feat: add land subdivision auto-division algorithm
fix: resolve zoning rules calculation error
docs: update README with installation instructions
```

## Branch Organization

- `master`: Main production branch
- `feature/*`: Feature branches
- `fix/*`: Bug fix branches
- `docs/*`: Documentation changes

## Testing

- Add tests for new features
- Ensure all tests pass before submitting a pull request
- Use Jest and React Testing Library for component tests

## Documentation

- Update documentation for any API changes
- Add comments for complex logic
- Keep README and other docs up to date

## Issues

- Use GitHub issues for bug reports and feature requests
- Search existing issues before creating new ones
- Provide detailed information and reproduction steps

## Code Review

All pull requests require review from at least one maintainer. Be prepared to:

- Respond to review comments
- Make requested changes
- Explain your design decisions
- Update tests and documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out to the maintainers if you have any questions about contributing to Neo Development Simulator.

---

Thank you for contributing to Neo Development Simulator! 🏗️✨