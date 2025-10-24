import React from 'react'
import SaludoConDefaultProps from './componentes/SaludoConDefaultProps'
import SaludoDesestructurado from './componentes/SaludoDesestructurado'
import PerfilConObjeto from './componentes/PerfilConObjeto'
import SaludoBasico from './componentes/SaludoBasico'
import CajaChildren from './componentes/CajaChildren'


export default function page() {
  return (
    <>
          {/*<SaludoBasico />*/}
          <SaludoBasico nombre="Carlos" entusiasta={true} />
          <SaludoBasico nombre="Juan" entusiasta={false} />
          <SaludoBasico nombre="Maria"  />

          {/*SaludoDesestructurado*/}
          <SaludoDesestructurado nombre="Ana" edad={28} />
          <SaludoDesestructurado nombre="Maria" edad={18} />
          <SaludoDesestructurado nombre="Cristian" edad={17} />

          {/*PerfilConObjeto*/}
          <PerfilConObjeto usuario={{nombre: "Luis", hobbies: ["futbol", "ajedrez", "programación"]}} />
          <PerfilConObjeto usuario={{nombre: "Sofia", hobbies: []}} />
          <PerfilConObjeto usuario={{nombre: "Miguel", hobbies: ["lectura"]}} />

          {/*<SaludoConDefaultProps />*/}
          <SaludoConDefaultProps nombre="Carlos" />
          <SaludoConDefaultProps nombre="Juan" />
          <SaludoConDefaultProps />
          
          {/*CajaChildren*/}
          <CajaChildren>
          <h2>Children</h2>
          <p>
            hola hola hola hola hola hola hola hola hola hola hoal hola
            hola hola
          </p>
          
        </CajaChildren>
        <CajaChildren>
          <h3>Elementos</h3>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </CajaChildren>
     </>  
  )
}
