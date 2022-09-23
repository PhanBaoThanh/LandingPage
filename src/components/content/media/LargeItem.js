import React from 'react'
import './largeitem.scss'

const LargeItem = ({img,header,text}) => {
  return (
    <div className="largeItem ">

        <div className='largeItem__img'>
            <img src={img} alt="largeItem" />
        </div>

        <div className='largeItem__text'>
            <p className='largeItem__text__header  '>{header}</p>
            <p className='largeItem__text__description'>{text}</p>
            <div className='largeItem__text__btn'>
                <button>read more</button>
            </div>
        </div>

    </div>
  )
}

export default LargeItem