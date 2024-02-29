import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const MY_SERVER = "http://127.0.0.1:8000/register"
    const handleRegister=() =>{
        axios.post(MY_SERVER, { username, password,email }).then(res => console.log("register done"))
    }
    return (
        <div>
            <hr></hr><h1>Register</h1><br></br>
                user name:<input onChange={(e) => setusername(e.target.value)} />
                password: <input onChange={(e) => setpassword(e.target.value)} />
                email: <input onChange={(e) => setemail(e.target.value)} />
                <button onClick={() => handleRegister()}>Register</button>
        </div>
    )
}

export default Register