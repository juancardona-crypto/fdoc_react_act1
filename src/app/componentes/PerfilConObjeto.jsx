{/*Prop: usuario (objeto con nombre: string; hobbies: string[]).
Debe listar hobbies separados por comas.
Casos: hobbies vacío (muestra "Sin hobbies") y con varios elementos.*/}

export default function PerfilConObjeto({usuario}) {
  return (
    <div>
        Hola {usuario.nombre} sus hobbies son: {usuario.hobbies.length === 0 ? "sin hobbies" : usuario.hobbies.join(", ")}
    </div>
  )
}