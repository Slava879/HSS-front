import React from 'react'

export const Button = ({label, onClick}) => {
  return (
    <button onClick={() => onClick('1234')}>{label}</button>
  )
}
