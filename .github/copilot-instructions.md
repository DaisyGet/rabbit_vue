# AI Coding Guidelines for rabbit_vue

## Project Overview

This is a Vue 3 e-commerce frontend application built with Vite, featuring product categories, banners, and product listings. It uses Pinia for state management, Vue Router for navigation, Element Plus for UI components, and Axios for API communication.

## Architecture

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite with hot reload
- **State Management**: Pinia stores (see `src/stores/`)
- **Routing**: Vue Router with nested routes (see `src/router/index.js`)
- **UI Library**: Element Plus with auto-import and SCSS theming
- **API Layer**: Centralized HTTP client in `src/utils/http.js`, API functions in `src/api/`
- **Styling**: SCSS with global variables (`src/styles/var.scss`) and Element overrides (`src/styles/element/index.scss`)

## Key Patterns

- **API Calls**: Export named functions from `src/api/*.js` that use the `http` utility (e.g., `getcategoryapi()` in `src/api/layout.js`)
- **State Stores**: Use Pinia composition API stores (e.g., `usecategoryStore` in `src/stores/usecategory.js`)
- **Component Structure**: Views in `src/views/` with `index.vue`, components in `components/` subfolders
- **Auto Imports**: Element Plus components are auto-imported; use them directly in templates (e.g., `<el-button>`)
- **Styling**: Scoped SCSS with global variables via `@use` directives in `vite.config.js`

## Development Workflow

- **Install**: `npm install`
- **Dev Server**: `npm run dev` (Vite hot reload)
- **Build**: `npm run build` (production build)
- **Lint**: `npm run lint` (ESLint with auto-fix)
- **API Base URL**: Dev API at `http://pcapi-xiaotuxian-front-devtest.itheima.net` (configured in `src/utils/http.js`)

## Conventions

- **File Naming**: PascalCase for Vue components, camelCase for JS files
- **Imports**: Use `@/` alias for `src/` directory
- **Router Links**: Use `<RouterLink>` for navigation (auto-imported)
- **Data Fetching**: Call store actions in components (e.g., `categoryStore.getcategory()` on mount)
- **Error Handling**: Axios interceptors handle common errors; components should handle specific cases
- **Responsive Design**: Use Element Plus responsive utilities and custom SCSS media queries

## Key Files

- `src/main.js`: App initialization with Pinia and router
- `src/App.vue`: Root component
- `src/views/home/index.vue`: Home page composition
- `src/views/layout/index.vue`: Main layout wrapper
- `vite.config.js`: Build config with auto-imports and SCSS setup</content>
  <parameter name="filePath">d:\work\vue\rabbit_vue\.github\copilot-instructions.md
