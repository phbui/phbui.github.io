import React from 'react'

const Project = ({img, title, link, text}) => {
  return (
    <div className='projectItem'>
        <img className='projectIMG' src={img}/>
        <pre className='preText projectText' ><a href={link} className='links'>{title}</a></pre>
        <pre className='preText projectText'>{text}</pre>
    </div>
  )
}

export default Project