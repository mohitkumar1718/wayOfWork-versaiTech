import React from 'react'

export const FadeBox = (props) => {
  const widthProp =  `h-full ${props.width} border border-slate-200 rounded-md`;
  return (
    // Vertical Boxes inside background
    <div className={widthProp}></div>
  )
}
