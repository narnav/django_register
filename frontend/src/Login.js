import React, { useEffect, useState, useContext  } from 'react'
import axios from 'axios'
import MyContext from './MyContext';
const Login = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    // const [logged, setlogged] = useState(false)
    const [msg, setmsg] = useState("")
    const MY_SERVER = "http://127.0.0.1:8000/login"
    const [Token, setToken] = useState("")
    const { logged, setlogged} = useContext(MyContext)

    useEffect(() => {
        if (Token.length > 10) {
            setlogged(true) //set login true
            localStorage.setItem("token", Token)
        }
    }, [Token])

    const handleLogin = () => {
        axios.post(MY_SERVER,{username,password}).then(res => setToken(res.data.access))
        .catch(error => {
            setmsg(error.message)
        })
    }
    const handleLogout = () => {
        setlogged(false)
        localStorage.setItem("token", "")
    }
    return (
        <div style={{ padding: "100px" }}>
            {logged ? "logged" :"please login"}

            <p style={{color:"red"}}>{msg}</p>
            {/* logged =true  */}
            {logged && <button onClick={() => handleLogout()}>Logout</button>}

            {/* logged =false  */}
            {!logged &&
                <div>
                    user name:<input onChange={(e) => setusername(e.target.value)} />
                    password: <input onChange={(e) => setpassword(e.target.value)} />
                    <button onClick={() => handleLogin()}>Login</button>
                </div>}
        </div>
    )
}

export default Login