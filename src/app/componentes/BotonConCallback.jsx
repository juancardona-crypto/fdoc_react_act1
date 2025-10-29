//Props: onClick (función), texto (string).
//Debe invocar onClick cuando se hace clic.
import React from 'react'

export default function BotonConCallback({onClick, texto}) {
  return (
    <>
      <button onClick={onClick}>{texto}</button>
    </>
  )
}