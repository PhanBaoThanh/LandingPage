import React from 'react'
import './service.scss'
import ServiceItem from './ServiceItem'
import Service1 from '../../../img/service1.png'
import Service2 from '../../../img/service2.png'
import Service3 from '../../../img/service3.png'

const Service = () => {
  const data = [
    {
      img: Service1,
      header: "Measurement Service",
      text: "Our sales support team will come & measure your property in order to ensure accuracy in design and help you calculate how many tiles you need. Please call our toll free number 800 122 22 20 to arrange a visit, or visit one of our Showrooms."
    },
    {
      img: Service2,
      header: "Product Advice",
      isRight: true,
      text: "Consult our professionals by calling our toll free number 800 122 22 20 or by visiting one of our showrooms where our qualified sales team will offer you product advice highlighting the latest interior and exterior trends."
    },
    {
      img: Service3,
      header: "Interior Design",
      text: "Benefit from our free interior design service. Our fully qualified interior designers will provide CAD visuals to help you visualise your selected tiles before you buy."
    },
  ]
  return (
    <div className='service' >
      {
        data.map((item,index) => <ServiceItem key={index} img={item.img} header={item.header} text={item.text} isRight={item.isRight} />)
      }
    </div>
  )
}

export default Service