{/*Props: nombre (string, requerida), entusiasta (boolean, opcional).
Debe mostrar "Hola, {nombre}" y, si entusiasta es true, un énfasis adicional.
Casos: con y sin entusiasta.*/}
import React from 'react'

export default function SaludoBasico({nombre, entusiasta}) {
  return (
    <div>
        <h1>Hola, {nombre}</h1>
        {entusiasta && <h2>¡Eres un entusiasta!</h2>}
    </div>
  )
}