import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <nav>
      <Link to="/buy">Buy</Link>
      <Link to="/sell">Sell</Link>
    </nav>
  )
}

export default HomeScreen