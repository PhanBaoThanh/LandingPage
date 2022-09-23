import React from 'react'
import './smallitem.scss'
const SmallItem = ({header,text}) => {
  return (
    <div className='smallItem '>
        <div className='smallItem__box'>
            <p className='smallItem__header'>{header}</p>
            <p className='smallItem__description'>{text}</p>
            <div className='smallItem__box__btn'>
              <button className='smallItem__btn'>read more</button>
            </div>
        </div>
    </div>
  )
}

export default SmallItem