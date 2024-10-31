import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import Cart from './pages/cart'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  )
}

export default App