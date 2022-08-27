import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './pages/App';

const rootElement = 'root';
const container = document.getElementById(rootElement);
if (!container) {
  throw new Error(`Could not find ${rootElement}`);
}
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
