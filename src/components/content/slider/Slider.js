import React,{useState} from 'react'
import './slider.scss'
import SliderImg from '../../../img/sliderImg.png'
import RotateBox1 from '../RotateBox/RotateBox1';
import RotateBox2 from '../RotateBox/RotateBox2';
import Container from '../../container/Container'
const Slider = ({link}) => {
    const [selected,setSelected] = useState(0)
    const [slide,setSlide] = useState(0)
    const data = [
        {
            img: SliderImg,
            header: "1. New generation ceramic tile",
            text: "1. Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo."
        },
        {
            img: SliderImg,
            header: "2. New generation ceramic tile",
            text: "2. Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo."
        },
        {
            img: SliderImg,
            header: "3. New generation ceramic tile",
            text: "3. Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo."
        },
        {
            img: SliderImg,
            header: "4. New generation ceramic tile",
            text: "4. Penatibus sem vitae mollis luctus mi tellus. Maximus eu eleifend aptent dapibus metus maecenas consequat. Elementum interdum a semper. Netus nullam eros nisi volutpat nibh ex ultricies. Pharetra sagittis sit aliquet at. Magna nam platea justo."
        }
    ]



    const handleClickPageBtn = (index) => {
        setSelected(index)
        setSlide(index)
    }

  return (
    <div id={link} className="slider">
        <RotateBox1 />
        <RotateBox2 />

        <Container>
            <div className='slider__box '>
                <div className='slider__box__item'>
                    <div className='slider__box__items' style={{width: `${data.length*100}%`,transform: `translate(-${selected * 100 / data.length}%,0)`}}>
                        {data.map((item,index) => (
                            <div key={index}  className={index===slide ? "slider__box__item1 appear" : "slider__box__item1"}>
                                    <div className="slider__box__text">
                                        <h3 className='slider__box__text__header'>{item.header}</h3>
                                        <p className='slider__box__text__description'>{item.text}</p>
                                        <button className='slider__box__text__btn'>LEARN MORE</button>
                                    </div>
                                    <div className="slider__box__img">
                                        <img src={item.img} alt="pictureAbout..." className='slider__box__img__item' />
                                        <a target='__blank' href='https://www.youtube.com/watch?v=lxBC4SYjb2I' className='circleFirst'>
                                            <div className='circleSecond'>
                                                <div className='playBtn'>
                                                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24l18-12-18-12v24zm16.197-12l-15.197 10.132v-20.263l15.197 10.131"/></svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='slider__box__item2'>
                        {
                            data.map((item,index) => <div key={index}  onClick={() => handleClickPageBtn(index)} className={selected=== index ? 'pageBtn selected':'pageBtn'}></div>) 
                        }
                    </div>
                </div>
            </div>
        </Container>
        
    </div>
  )
}

export default Slider