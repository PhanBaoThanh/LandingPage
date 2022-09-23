import React from 'react'
import './featureitem.scss'
const FeatureItem = ({img,header,text}) => {
   return (
    <div className='featureItem'>
        <div className='featureItemBox'>
            <div className='featureItem__img'>
                <img src={img} alt="pictureCollection" />
            </div>

            <div className='featureItem__text'>
                <p className='featureItem__text__header'>{header}</p>
                <p className='featureItem__text__description'>{text}</p>
                <div className='featureItem__text__btn'>
                    <button>view collection</button>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureItem