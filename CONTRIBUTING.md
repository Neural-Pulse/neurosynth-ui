# Contributing Guidelines for Neuro Synth

## Introduction

Thank you for considering contributing to Neuro Synth. To maintain the project's quality and to facilitate contributions from the community, we follow certain practices and standards. Here's how you can contribute.

## Semantic Versioning (SemVer)

We follow [Semantic Versioning](https://semver.org/). When you make changes, ensure that your versioning reflects the changes accordingly:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backward-compatible manner, and
- PATCH version when you make backward-compatible bug fixes.

## Conventional Commits

Our commit messages adhere to [Conventional Commits](https://www.conventionalcommits.org/) standards. This means our commit messages are structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Where `type` is one of the following:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Other changes that don't modify `src` or `test` files
- `revert`: Reverts a previous commit

## Micro Commits

We encourage "micro commits," which are small, self-contained commits that contain a single change or a small group of related changes. They make it easier to review code and roll back changes if necessary.

## ESLint Configuration

We use ESLint to enforce code style and quality. Here is our configuration:

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Define project-specific rules here
  },
};
```

Before submitting a pull request, please run `eslint` on your code to ensure it meets our coding standards.

## Project Structure

Our project follows this structure:

```
malagurti
├── LICENSE
├── README.md
├── dist
│   ├── assets
│   ├── components
│   └── various distribution files
├── src
│   ├── components
│   └── various source files
├── public
│   └── public assets
```

- Place your code in the appropriate directories.
- Components should be in the `src/components` directory.
- Storybook files should be added to the `src/components/[component-name]` directory.
- Unit test files should be added to the `src/components/[component-name]` directory.
- Static assets should go in the `public` or `dist/assets` directories as appropriate.

## Pull Request Process

1. Fork the repository and create your branch from `main`.
2. Write clear and concise commit messages following the conventional commits guideline.
3. Make sure your code lints and the test suite passes.
4. Add or update tests as necessary based on your changes.
5. Update the documentation if you are introducing new features or changes to the API.
6. Submit a pull request to the `main` branch.
7. Your pull request will be reviewed by the maintainers, who may request changes or merge it.

## Code Reviews

All submissions require review. We use GitHub pull requests for this purpose. Review comments may require you to make further changes.

## License

By contributing, you agree that your contributions will be licensed under its MIT.

---
