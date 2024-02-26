import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Prods = () => {
    const MY_SERVER = 'http://127.0.0.1:8000/'
    const [products, setproducts] = useState([])
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        console.log( localStorage.getItem("token"))

        const token =localStorage.getItem("token")
        const axiosConfig = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        };
        if (token){
        axios.get(MY_SERVER + "products", axiosConfig).then(res => setproducts(res.data))
        }
    }, [refresh])

    const add_data = async () => {
        await axios.post(MY_SERVER + "addproduct", { desc, price })
        setrefresh(!refresh)
    }

    const del_data = async (id) => {
        await axios.delete(MY_SERVER + "delproduct/" + id)
        setrefresh(!refresh)
    }
    return (
        <div> 
            <h1>number of items: {products.length}</h1>
            {products.map(prod => <div>
                Desc:{prod.desc},
                Price: {prod.price}
                <button onClick={() => del_data(prod.id)}>Del</button>
            </div>)}

            Desc: <input onChange={(e) => setdesc(e.target.value)} />
            Price:<input onChange={(e) => setprice(e.target.value)} />
            {/* Post - send data to a server */}
            <button onClick={() => add_data()}>Add</button> </div>
    )
}

export default Prods