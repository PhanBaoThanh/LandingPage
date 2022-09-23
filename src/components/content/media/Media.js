import React from 'react'
import LargeItem from './LargeItem'
import './media.scss'
import SmallItem from './SmallItem'
import MediaPct from '../../../img/media1.png'
const Media = () => {
    const data = [
        {
            header: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
            text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur."
        },
        {
            header: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
            text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur."
        },
        {
            header: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
            text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur."
        },
        {
            header: "Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion",
            text: "Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur."
        }
        
    ]
  return (
    <div className='media'>
        <div className='media__items'>
            <div className='media__items__firstColumn'>
                <LargeItem img={MediaPct} header="Alfanar exa corp innovation at Expo 2020 with the Italian Pavilion" text="Sociosqu nostra ipsum curabitur lacus diam. Ipsum sollicitudin eros ullamcorper adipiscing penatibus habitant ex nascetur." />
            </div>

            <div className='media__items__secondColumn'>
                {data.map((item,index) => <SmallItem key={index } header={item.header} text={item.text} />)}
            </div>
        </div>
        <div className='media__btn'>
            <button>view all</button>
        </div>
    </div>
  )
}

export default Media