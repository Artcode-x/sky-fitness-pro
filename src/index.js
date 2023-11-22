import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './index.styles'
import { Provider } from 'react-redux'
import { store } from './store'
import App from './App'
import './firebase'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
