import React,{useState} from 'react'
import './feature.scss'
import Collection1 from '../../../img/collection1.png'
import Collection2 from '../../../img/collection2.png'
import Collection3 from '../../../img/collection3.png'
import FeatureItem from './FeatureItem'
const Feature = () => {
  const [translateValue,setTranslateValue] = useState(0)
  const data = [
    {
      img: Collection1,
      header: "Air Insulated Switchgear",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
    {
      img: Collection2,
      header: "Mira Switches",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
    {
      img: Collection3,
      header: "Transformers & Package Substations",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
    {
      img: Collection1,
      header: "Air Insulated Switchgear",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
    {
      img: Collection2,
      header: "Mira Switches",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
    {
      img: Collection3,
      header: "Transformers & Package Substations",
      text: "Ante mus blandit sapien sociosqu per consequat ad. Aenean habitasse interdum letius lobortis primis tortor."
    },
  ]

  const handleClickBtnNext = () => {
    if(translateValue < data.length-3)
      setTranslateValue(prev => prev + 1)
    else
      setTranslateValue(0)
  }

  const handleClickBtnPrev = () => {
    if(translateValue === 0)
      setTranslateValue(data.length-3)
    else
      setTranslateValue(prev => prev - 1)
  }

  return (
    <div className='feature'>
      <div className='featureBtn'>
        <div className='featureBtnItem' onClick={handleClickBtnPrev}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
        </div>
      </div>

      <div className="featureItems">
        <div className="featureItemsBox" style={{transform: `translate(-${translateValue * 100/data.length}%,0)`,width: `${100/3 * data.length}%`}}>
          {
            data.map((item,index) => <FeatureItem key={index} img={item.img} header={item.header} text={item.text}/>)
          }
        </div>
      </div>

      <div className='featureBtn'>
        <div className='featureBtnItem' onClick={handleClickBtnNext}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
        </div>
      </div>
    </div>
  )
}

export default Feature