import React from 'react'

const Student = ({color,emaail}) => {
  return (
    <div>
        <p style={{color:{color}}}>{emaail} </p>
    </div>
  )
}

export default Student