import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sections from './Sections';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sections />
  </StrictMode>,
)
