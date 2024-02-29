import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import MyContext from './MyContext';
const Products = () => {
    const MY_SERVER = "http://127.0.0.1:8000/products"
    const [products, setproducts] = useState([])
    const [msg, setmsg] = useState("")
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState(0)
    const [refresh, setrefresh] = useState(true)
    const { logged, setlogged} = useContext(MyContext)
    useEffect(() => {
            const TOKEN= localStorage.getItem("token")
            axios.get(MY_SERVER,{ headers: { Authorization: `Bearer ${TOKEN}` } }).then(res => setproducts(res.data)).catch(error => {
                setmsg(error.message)
            })
    }, [refresh])

    const handleAdd=() =>{
        const TOKEN= localStorage.getItem("token")
            axios.post(MY_SERVER,{desc,price},{ headers: { Authorization: `Bearer ${TOKEN}` } }).then(res => setrefresh(!refresh)).catch(error => {
                setmsg(error.message)
            })
    }
    const handleUpd=(id) =>{
        const TOKEN= localStorage.getItem("token")
            axios.put(MY_SERVER+"/" +id,{desc,price},{ headers: { Authorization: `Bearer ${TOKEN}` } }).then(res => setrefresh(!refresh)).catch(error => {
                setmsg(error.message)
            })
    }
    const handleDelete=(id) =>{
        // console.log(id);
        let url=MY_SERVER + "/" +id
        // console.log(url);
        axios.delete(url).then(res => console.log(res.data))
    }

  return (
    <div>
        {logged ? "logged" :"please login"}
        <h1>{msg}</h1>
        <hr></hr>
        Products
        {products.map(prod=> <div>
            {prod.desc},
            {prod.price},
            {prod.id}
            <button onClick={()=>handleDelete(prod.id)}>Del</button>
            <button onClick={()=>handleUpd(prod.id)}>Update</button>
            </div>)}
            <hr></hr>
            <h1>Add a new product</h1>
            desc<input onChange={(e)=>setdesc(e.target.value)}/>
            price<input onChange={(e)=>setprice(e.target.value)}/>
            <button onClick={()=>handleAdd()}>Add</button>
            

    </div>
  )
}

export default Products