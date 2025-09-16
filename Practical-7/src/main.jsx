import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductList from './ProductList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductList />
  </StrictMode>,
)
