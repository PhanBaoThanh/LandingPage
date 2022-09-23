import React,{useState} from 'react'
import './project.scss'
import prj1 from '../../../img/project1.png'
import prj2 from '../../../img/project2.png'
import prj3 from '../../../img/project3.png'
import prj4 from '../../../img/project4.png'
import prj5 from '../../../img/project5.png'
import prj6 from '../../../img/project6.png'
import ProjectItem from './ProjectItem'
import Container from '../../container/Container'
const Project = ({link}) => {
    const [selected,setSelected] = useState(0)
    const data = [
        [
            {
                img: prj1,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj2,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj3,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj4,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj5,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj6,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            }
        ],
        [
            {
                img: prj1,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj2,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj3,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj4,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj5,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj6,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            }
        ],
        [
            {
                img: prj1,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj2,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj3,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj4,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj5,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj6,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            }
        ]
        ,
        [
            {
                img: prj1,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj2,
                name: "Aenean Tempus ipsum",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj3,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            },
            {
                img: prj4,
                name: "Aenean habitasse",
                address: "Riyadh, Saudi Arabia"
            }
        ]
        
    ]

    const handleClickBtnPage = (str) => {
        if(str === 'right'){
            if(selected === data.length - 1)
                setSelected(0)
            else
                setSelected(prev => prev + 1)
        }
        else if(str === 'left')
            if(selected === 0)
                setSelected(data.length - 1)
            else
                setSelected(prev => prev -1)
    }

  return (
    <div id={link} className="project">
        <Container>
            <div className='project__header'>
                <p className='project__header__name'>Projects</p>
                <div className='project__header__btn' >
                    <button>all project</button>
                </div>
            </div>

            <div className='project__box'>
                <div className='project__box__items' style={{width: `${data.length*100}%`,transform: `translate(-${selected*100/data.length}%,0)`}}>
                    {data.map((item,index) => {
                        return <div key={index} className='project__items' style={{width: `${100/data.length}%`}}>
                            {item.map((it,idx) => <ProjectItem key={idx} img={it.img} name={it.name} address={it.address} />)}
                        </div>
                    })}
                </div>

                <div className='projectBtnItem left' onClick={() => handleClickBtnPage('left')}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
                </div>

                <div className='projectBtnItem right' onClick={() => handleClickBtnPage('right')}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
                </div>
            </div>


            <div className='project__pageBtn'>
                {data.map((item,index) => 
                    <div key={index} onClick={() => setSelected(index)} className={selected=== index ? 'project__pageBtn__item selected':'project__pageBtn__item '}></div>
                )}
            </div>
        </Container>
    </div>
  )
}

export default Project