import React from 'react'
import './container.scss'
const Container = (props) => {
  return (
    <div className='containerBox'>
        {props.children}
    </div>
  )
}

export default Container