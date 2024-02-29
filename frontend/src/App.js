import React, { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import MyNav from './MyNav'
import { Outlet } from 'react-router-dom'
import MyContext from './MyContext'

const App = () => {
    const [logged, setlogged] = useState(false)

    return (
        <div>
            <MyContext.Provider value={{ logged, setlogged }}>
                <MyNav></MyNav>
                <Outlet></Outlet>
            </MyContext.Provider>
        </div>
    )
}
export default App