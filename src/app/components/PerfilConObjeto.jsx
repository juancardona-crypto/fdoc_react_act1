import React from 'react'

export default function PerfilConObjeto({usuario}) {
  return (
    <div>
        Hola {usuario.nombre} sus hobbies son: {usuario.hobbies.length === 0 ? "sin hobbies" : usuario.hobbies.join(", ")}
    </div>
  )
}