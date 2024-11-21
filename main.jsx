import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PollProvider } from "./context/PollContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PollProvider>
      <App />
    </PollProvider>
  </StrictMode>
)
