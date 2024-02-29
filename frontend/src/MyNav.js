import React, { useEffect, useState, useContext } from 'react'
import { Outlet, Link } from "react-router-dom";
import MyContext from './MyContext';
const MyNav = () => {
    const { logged, setlogged } = useContext(MyContext)
    return (
        <div>
            <Link to="/">Home</Link> |{" "}
            <Link to="/Login">Login</Link> |{" "}
            <Link to="/Register">Register</Link> |{" "}
            {logged && <Link to="/products">products</Link>}
        </div>
    )
}

export default MyNav