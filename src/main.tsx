import React from 'react'
import ReactDOM from 'react-dom/client'
import { RoutesList } from './routes/RoutesList'
import "./assets/css/global.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RoutesList/>
  </React.StrictMode>,
)
