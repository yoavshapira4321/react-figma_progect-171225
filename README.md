# Security Insights Page (React)

This is a small React implementation of the *Security and DevOps Insights* page shown in the design.

Files added:

- `src/components/SecurityInsightsPage.jsx` — page container
- `src/components/Sidebar.jsx` — left navigation icons
- `src/components/Header.jsx` — top header and action buttons
- `src/components/Card.jsx` — card component used in the grid
- `src/components/SecurityInsightsPage.css` — styles for the page
- `src/App.jsx`, `src/index.js` — demo app entry

Usage

1. Install dependencies:

```bash
npm install
# or
yarn
```

2. Start the dev server:

```bash
npm start
# or
npm run dev
```

> The project uses Vite as the dev server. `npm start` runs Vite (same as `npm run dev`).

3. Import and render `SecurityInsightsPage` in your app (example `App.jsx`):

```jsx
import SecurityInsightsPage from './components/SecurityInsightsPage';

export default function App() {
  return <SecurityInsightsPage />;
}
```

Customization

- Replace sample data in `SecurityInsightsPage.jsx` with real data.
- Swap emoji icons for SVGs as needed.
- Adjust colors in `SecurityInsightsPage.css`.

Notes

This is a presentational implementation meant to be integrated into an existing React setup. It intentionally avoids any backend or CI/CD specifics and focuses on layout and styling.
