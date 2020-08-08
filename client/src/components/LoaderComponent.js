import React from 'react'
import loaderGif from '../assets/rippleload.gif';

const LoaderComponent = (props) => {
  return (
    <>
    {props.loading ? (
      <img
        src={loaderGif}
        className={`loader ${props.mini ? 'mini' : ''}`}
      />
    ) : props.children}
    </>
  )
}

export default LoaderComponent;