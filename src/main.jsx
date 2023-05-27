import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./assets/css/preflight.css"
import "./assets/css/index.css"
import CartContextProvider from './store/contexts/cart'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
)
