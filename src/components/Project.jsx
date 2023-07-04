import React from 'react'
import ALink from './ALink'

const Project = ({img, title, link, text}) => {
  return (
    <div className='projectItem'>
        <img className='projectIMG' src={img}/>
        <pre className='preText projectText' ><a href={link}><ALink text={title}/></a></pre>
        <pre className='preText projectText'>{text}</pre>
    </div>
  )
}

export default Project