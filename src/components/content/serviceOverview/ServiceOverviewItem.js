import React from 'react'
import './serviceoverviewitem.scss'
const ServiceOverviewItem = ({img,text}) => {
  return (
    <div className='serviceOverviewItem'>
        <div className='serviceOverviewItem__img'>
            <img src={img} alt='serviceoverview' />
            <p className='serviceOverviewItem__text'>{text}</p>
            <div className='blur'></div>
        </div>
    </div>
  )
}

export default ServiceOverviewItem