import React from 'react'
import SaludoConDefaultProps from './components/SaludoConDefaultProps'
import SaludoDesestructurado from './components/SaludoDesestructurado'
import PerfilConObjeto from './components/PerfilConObjeto'
import SaludoBasico from './components/SaludoBasico'
import CajaChildren from './components/CajaChildren'
import BotonConCallback from './components/BotonConCallback'
import ContenedorRenderProp from './components/ContenedorRenderProp'


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
        
        {/*BotonConCallback*/}
        <BotonConCallback texto="Haz clic aquí" onClick={() => alert("¡Botón clickeado!")} />
        <BotonConCallback texto="Otro botón" onClick={() => console.log("Otro botón clickeado")} />        
        <ContenedorRenderProp contenido={<p>Contenido directo</p>} />

      <ContenedorRenderProp render={() => <p>Contenido desde render</p>} />

    </>
  )
}
