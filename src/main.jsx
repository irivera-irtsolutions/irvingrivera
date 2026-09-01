import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// hydrateRoot (not createRoot) because index.html's #root already has
// prerendered markup from scripts/prerender.mjs — see that file.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
