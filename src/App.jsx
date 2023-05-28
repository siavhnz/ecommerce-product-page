import { useState } from 'react'
import Product from './pages/Product'
import ProductContextProvider from './store/contexts/product'

function App() {

  return <ProductContextProvider>
    <Product />
  </ProductContextProvider>
}

export default App
