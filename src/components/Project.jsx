import React from 'react'
import ALink from './ALink'

const Project = ({img, title, link, text, download}) => {
  return (
    <div className='projectItem'>
        <img className='projectIMG' src={img}/>
        <div className='projectTextHolder'>
          <pre className='preText projectText' ><a href={link} download={download}><ALink text={title}/></a></pre>
          <pre className='preText projectText'>{text}</pre>
        </div>
    </div>
  )
}

export default Project