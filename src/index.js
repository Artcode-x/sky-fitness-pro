import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './index.styles'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
