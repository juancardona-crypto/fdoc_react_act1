{/*Props: nombre (string), edad (number).
Debe usar desestructuración en la firma del componente.
Muestra nombre y edad claramente.*/}
export default function SaludoDesestructurado({nombre, edad}){
    return (
        <>
            Hola {nombre}, tienes {edad} años
        </>
    )
}