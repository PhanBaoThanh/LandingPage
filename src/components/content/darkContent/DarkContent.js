import React from 'react'
import './darkcontent.scss'
import Container from '../../container/Container'
const DarkContent = ({text,Item,link}) => {
  return (

    <div id={link} className='darkContent'>
      <Container>
        <h3 className='darkContent__header'>{text}</h3>
        <Item />
      </Container>
    </div>
  )
}

export default DarkContent