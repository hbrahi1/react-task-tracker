import React from 'react'

const Button = ({color,text,onclickfct}) => {

  return (
    <button onClick={onclickfct}
            style={{backgroundColor: color}}className='btn'>{text}</button>
  )
}

export default Button