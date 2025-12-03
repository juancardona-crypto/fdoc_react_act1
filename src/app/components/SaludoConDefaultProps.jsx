{/*Props: nombre (string, opcional).
Debe tener valor por defecto para nombre (en JS: valor por defecto en parámetro o fallback interno; evita defaultProps).
Caso: cuando no se pasa nombre, muestra "Invitado".*/}
import React from 'react'

export default function SaludoConDefaultProps({nombre = "Invitado"}) {
  return (
    <div>
        <h1>Hola, {nombre}</h1>
    </div>
  )
}