import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MyBrowser } from './Components/Routs/Routs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={MyBrowser} />
  </React.StrictMode>,
)
