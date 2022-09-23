import React from 'react'
import './product.scss'
import BedRoom from '../../../img/productImg1.png'
import BathRoom from '../../../img/productImg2.png'
import OutDoor from '../../../img/productImg3.png'
import Kitchen from '../../../img/productImg4.png'
import ProductItem from './ProductItem'
const Product = () => {
  return (
    <div className='product'>
      <div className='product__firstColumn'>
        <ProductItem picture={BedRoom} header="Bedroom Tiles" text="Ante mus blandit sapien sociosqu per consequat ad." />
      </div>
      <div className='product__secondColumn'>
        <div className='product__secondColumn__firstRow'>
          <ProductItem picture={BathRoom} header="Bathroom Tiles" text="Ante mus blandit sapien sociosqu per consequat ad." />
          <ProductItem picture={OutDoor} header="Outdoor Tiles" text="Ante mus blandit sapien sociosqu per consequat ad." />
        </div>
        <div className='product__secondColumn__secondRow'>
          <ProductItem picture={Kitchen} header="Kitchen Tiles" text="Ante mus blandit sapien sociosqu per consequat ad." />
        </div>
      </div>
    </div>
  )
}

export default Product