<p align="center">
  <img src="./public/neuralsynth-ui-no-background-readme.png" alt="Logo do seu projeto" width="500"/>
</p>

# NeuroSynthUI
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

NeuroSynthUI is a modern React component library designed to provide developers with a set of pre-built components that can be used to create beautiful and functional user interfaces with ease.

## Features

- A comprehensive set of UI components
- Built with React and TypeScript for robust applications
- Fully customizable components
- Storybook integration for component documentation and testing
- Jest for unit testing

## Getting Started

To get started with NeuroSynthUI, you need to have Node.js installed on your system. If you don't have Node.js installed, you can download it from [nodejs.org](https://nodejs.org/).

### Installation

You can install NeuroSynthUI in your project by running the following command:

```sh
npm install neurosynth-ui
```

or if you are using `yarn`:

```sh
yarn add neurosynth-ui
```

### Usage

After installation, you can import and use the components in your React application:

```jsx
import { Button, Modal } from 'neurosynth-ui';

function App() {
  return (
    <div>
      <Button label="Click Me" variant="primary" />
      <Modal isOpen={true} onClose={() => {}} title="Welcome">
        Hello, World!
      </Modal>
    </div>
  );
}

export default App;
```

## Running Locally

To run the NeuroSynthUI locally for development, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/your-username/neurosynth-ui.git
```

2. Install the dependencies:

```sh
cd neurosynth-ui
npm install
```

3. Start the development server:

```sh
npm run dev
```

This will start the Vite development server, and you can begin working on the components.

## Storybook

NeuroSynthUI uses Storybook to showcase its components. To view the components in Storybook, run:

```sh
npm run storybook
```

This will start the Storybook server, and you can view the component stories by navigating to `http://localhost:6006` in your browser.

## Building for Production

To build the NeuroSynthUI library for production, run:

```sh
npm run build
```

This will generate the production build of the library in the `dist` directory.

## Running Tests

NeuroSynthUI comes with Jest set up for testing. To run the tests, use:

```sh
npm test
```

To run tests in watch mode:

```sh
npm run test:watch
```

## Linting

To ensure code quality and consistency, you can run the linter using:

```sh
npm run lint
```

## Contributing

Contributions to NeuroSynthUI are always welcome. Please read the contributing guidelines before making any changes or opening a pull request.

## License

Copyright Neuro Pulse@2023.

---
