import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './index.styles'
import App from './App'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
