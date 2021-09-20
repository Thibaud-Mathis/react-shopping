import React, { useState } from 'react'
import './App.css'
import Home from "./pages/Home"
import ProductList from './pages/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProductList/>
    </div>
  )
}

export default App
