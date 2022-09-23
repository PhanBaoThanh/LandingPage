import React from 'react'
import './lightcontent.scss'
import Container from '../../container/Container'
const LightContent = ({text,Item,link}) => {
  return (
    <div id={link} className='lightContent'>
      <Container>
        <h3 className='lightContent__header'>{text}</h3>
        <Item />
      </Container>
    </div>
  )
}

export default LightContent