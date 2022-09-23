import React from 'react'
import './navitem.scss'
const NavItem = ({item,active,setActive,isDropDown = false}) => {
  return (
    <>
        <a 
            href={item.link}
            className={active === item.id ? `nav__item ${isDropDown ? 'navItemDropDown' : 'active'} uppercase` : `nav__item  ${isDropDown ? 'navItemDropDown' : ''} uppercase ` }
            onClick={() => setActive(item.id)}
        >{item.value}</a>
        
    </>
  )
}

export default NavItem