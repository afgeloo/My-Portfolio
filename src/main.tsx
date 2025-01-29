import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './homepage'
import Bubbles1 from './bubbles1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Homepage />
    <Bubbles1 />
  </StrictMode>,
)
