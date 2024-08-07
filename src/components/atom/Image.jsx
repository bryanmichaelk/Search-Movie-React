import React from 'react'

function Image(props) {
const { src = "", alt = "", width, height, className} = props;
  return (
    <img src={src} alt={alt} width={width} height={height} className={`${className}`} />
  )
}

export default Image