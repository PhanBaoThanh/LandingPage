import React from 'react'
import './productitem.scss'
const ProductItem = ({picture,header,text}) => {
  return (
    <div className='productItem'>
        <img className='product__img' src={picture} alt='bedroom' />
        <div className='product__text'>
            <p className='product__header'>{header}</p>
            <p className='product__description'>{text}</p>
        </div>
        <div className='blur'></div>
    </div>
  )
}

export default ProductItem