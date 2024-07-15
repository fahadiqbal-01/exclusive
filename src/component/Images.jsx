import React from 'react'

const Images = ({src, alt, className, onClick}) => {
  return <img onClick={onClick} src={src} alt={alt} className={className} />
}

export default Images