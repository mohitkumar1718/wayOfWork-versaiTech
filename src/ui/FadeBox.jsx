import React from 'react'

export const FadeBox = (props) => {
  const widthProp =  `h-full ${props.width} border border-slate-200 rounded-md`;
  return (
    <div className={widthProp}></div>
  )
}
