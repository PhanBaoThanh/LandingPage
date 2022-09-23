import React from 'react'
import './projectitem.scss'
const ProjectItem = ({img,name,address}) => {
  return (
    <div className='projectItem' >
        <div className='projectItem__box'>
            <img src={img} alt="project" />
            <div className='projectItem__box__text'>
                <p className='projectItem__box__text__name'>{name}</p>
                <p className='projectItem__box__text__address'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
                        <path d="M7.16211 0C3.2066 0 0 3.20658 0 7.16211C0 8.48494 0.258922 9.8512 1.00195 10.8359L7.16211 19L13.3223 10.8359C13.9972 9.94151 14.3242 8.3603 14.3242 7.16211C14.3242 3.20658 11.1176 0 7.16211 0ZM7.16211 4.14813C8.82645 4.14813 10.1761 5.49778 10.1761 7.1621C10.1761 8.82645 8.82645 10.1761 7.16211 10.1761C5.49778 10.1761 4.14814 8.82645 4.14814 7.16211C4.14814 5.49778 5.49778 4.14813 7.16211 4.14813Z" fill="white"/>
                    </svg>
                    {address}  
                </p>
            </div>
            <div className='blur'></div>
        </div>
    </div>
  )
}

export default ProjectItem