import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from '../pages/HomeScreen'
import TransactionScreen from '../pages/TransactionScreen'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="buy" element={<TransactionScreen />} />
            <Route path="sell" element={<TransactionScreen />} />
        </Routes>
    )
}

export default AppRouter