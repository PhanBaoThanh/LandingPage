import React from 'react'
import './contact.scss'
import ContactPicture from '../../../img/contact.png'
import Container from '../../container/Container'
const Contact = ({link}) => {
  return (
    <div id={link} className='contact' >
        <Container>
            <div className='contact__box'>
                <div className='contact__img'>
                    <img src={ContactPicture} alt="contact" />
                    <a href="https://www.youtube.com/watch?v=lxBC4SYjb2I" target='__blank' className='contact__circleFirst'>
                        <div className='contact__circleSecond'>
                            <div className='contact__playBtn'>
                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24l18-12-18-12v24zm16.197-12l-15.197 10.132v-20.263l15.197 10.131"/></svg>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='contact__text'>
                    <h3 className='contact__text__header'>Why Choose Us?</h3>
                    <div className='contact__text__box' >
                        <p className='contact__text__description '>Neque quisque sollicitudin tempor vestibulum elit taciti. Sagittis tempor consequat turpis. Aenean curae elementum vestibulum dapibus vitae laoreet. Bibendum suspendisse himenaeos malesuada. Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant. </p> 
                        <p className='contact__text__description '>Nisl taciti si platea dui. Euismod malesuada facilisis duis lobortis aliquet massa. Tincidunt vivamus ac consectetuer molestie pharetra. Sodales pulvinar non habitant.</p>
                        <ul className='contact__text__list '>
                            <li>SUSTAINABLY SOURCED</li>
                            <li>EASY TO RECYCLE</li>
                            <li>IMPROVED HOME RESALE VALUE</li>
                            <li>A SMART WAY TO LEED CERTIFICATION</li>
                        </ul>
                    </div>
                    <div className='contact__text__btn '>
                        <button className='bg-black' >learn more</button>
                    </div>
                </div>

                <div className='rotateItem'></div>
            </div>
        </Container>
    </div>
  )
}

export default Contact