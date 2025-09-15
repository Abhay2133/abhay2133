# Gemini Project Information

This document provides essential information for the Gemini AI assistant to understand and effectively assist with this project.

## Project Overview

This is a personal portfolio website built with Vue.js and Tailwind CSS. It showcases my skills, experience, and projects. The project is structured as a single-page application (SPA) with multiple sections.

## Tech Stack

- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Vue Router
- **Linting**: ESLint
- **Formatting**: Prettier

## Project Structure

- `src/`: Contains the main source code.
  - `main.ts`: The entry point of the application.
  - `App.vue`: The root Vue component.
  - `router/index.ts`: Defines the application routes.
  - `pages/`: Contains the different pages of the portfolio (Home, About, Experience, Projects, Contact).
  - `components/`: Contains reusable Vue components.
  - `data/`: Contains the data for experiences and projects.
  - `assets/`: Contains static assets like images and SVGs.
- `public/`: Contains static assets that are not processed by the build tool.
- `index.html`: The main HTML file.
- `vite.config.ts`: The Vite configuration file.
- `tailwind.config.js`: The Tailwind CSS configuration file.
- `package.json`: Defines project dependencies and scripts.

## Available Scripts

The following scripts are available in `package.json`:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run format`: Formats the code using Prettier.

## Content Management

The content for the "Experience" and "Projects" sections is managed in the `src/data` directory.

- To add or update work experience, modify the `src/data/experiences.ts` file.
- To add or update projects, modify the `src/data/projects.ts` file.

The data structures are defined in these files, and the components in `src/pages/Experience.vue` and `src/pages/Projects.vue` render the data dynamically.
