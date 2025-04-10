import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//import { Practices } from './Practices'
import { Practice } from './Practice.jsx'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*<Practice />*/},
  </StrictMode>,
)
