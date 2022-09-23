import React from 'react'
import './serviceoverview.scss'
import ptc1 from '../../../img/serviceOvv1.png'
import ptc2 from '../../../img/serviceOvv2.png'
import ptc3 from '../../../img/serviceOvv3.png'
import ptc4 from '../../../img/serviceOvv4.png'
import ptc5 from '../../../img/serviceOvv5.png'
import ptc6 from '../../../img/serviceOvv6.png'
import ServiceOverviewItem from './ServiceOverviewItem'
const ServiceOverview = () => {
    const data = [
        {
            img: ptc1,
            name: "Bathroom"
        },
        {
            img: ptc2,
            name: "Kitchen"
        },
        {
            img: ptc3,
            name: "Living Room"
        },
        {
            img: ptc4,
            name: "Bedroom"
        },
        {
            img: ptc5,
            name: "Outdoor"
        },
        {
            img: ptc6,
            name: "Commercial"
        },
    ]
  return (
    <div className='serviceOverview'>
        {data.map((item,index) => <ServiceOverviewItem key={index} img={item.img} text={item.name} />)}
    </div>
  )
}

export default ServiceOverview