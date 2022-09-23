import React from 'react'
import './serviceitem.scss'
const ServiceItem = ({img,header,text,isRight}) => {
  return (
    <div className='serviceItem'>
        {
            isRight ? (
                <>
                    <div className='service__text '>
                        <p className='service__text__header'>{header}</p>
                        <p className='service__text__description'>{text}</p>
                        <div className='service__text__btn'>
                        <button>learn more</button>
                        </div>
                    </div>
                    <div className='service__img'>
                        <img src={img} alt="service" />
                    </div>
                </>
            ) : (
                <>
                    <div className='service__img'>
                        <img src={img} alt="service" />
                    </div>

                    <div className='service__text'>
                        <p className='service__text__header'>{header}</p>
                        <p className='service__text__description'>{text}</p>
                        <div className='service__text__btn'>
                            <button>learn more</button>
                        </div>
                    </div>
                </>
            )
        }
    </div>
  )
}

export default ServiceItem