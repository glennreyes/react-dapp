import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/app/App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No root element found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
