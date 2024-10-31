import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div>
        Trang home
        <Link to="/cart">Cart</Link>
    </div>  
  )
}
