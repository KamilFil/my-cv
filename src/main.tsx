import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CVView} from "./views/CVView/CVView.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CVView />
  </StrictMode>,
)
