import React, { useEffect, useState } from 'react'
import Prods from './components/Prods'
import Login from './components/Login'
import Register from './components/Register'

const App = () => {
    return (
        <div style={{ padding: "100px" }}>
            <Login/>
            <Register></Register>
            <Prods/>
        </div>
    )
}

export default App