# Concourse challenge

## GPT Powered Activity Graph

This project integrates a GPT (Generative Pre-trained Transformer) model with the GitHub API to create an activity graph. The GPT model can answer questions formulated by the user in natural language about the GitHub API response.

## Tech Stack

- ⚡ [Vite](https://vitejs.dev/): Fast and opinionated web development build tool that serves your code via native ES Module imports during development.
- ⚛️ [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- 🆎 [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- 🐼 [PandaCSS](https://panda-css.com/): A minimal, lightweight and zero-runtime CSS-in-js framework for small projects.
- 📦 [SWR](https://swr.vercel.app/): React Hooks library for data fetching.
- 🤖 [OpenAI GPT-4](https://platform.openai.com/docs): A powerful language model that can generate human-like text.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en) (version 20 or above)
- pnpm (preferred), npm or yarn

### Set up

1. Clone the repository

```bash
git clone https://github.com/llapenna/concourse-challenge.git
cd concourse-challenge
```

2. Install dependencies

```bash
pnpm install
```

### Running the app

``` bash
pnpm dev
```

You can now access the app at [localhost:5173](http://localhost:5173).

## Project Architecture

- `src/main.tsx`: where all the state providers are rendered.
- `src/App.tsx`: main component that renders the application layout.
- `src/components`: React components reused across the application.
- `src/context`: React context used to manage global state.
- `src/hooks`: custom hooks used to fetch data and manage state.
- `src/services`: functions that interact directly with externals APIs (like OpenAI).
- `src/styles`: global styles and theme configuration.
- `src/types`: TypeScript types used across the application.
- `src/utils`: utility functions and constants.
