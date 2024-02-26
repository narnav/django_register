import React from 'react'

const Fruit = (props) => {
    console.log(props);
  return (
    <div>
        {props.desc} ,{props.price}
        </div>
  )
}

export default Fruit