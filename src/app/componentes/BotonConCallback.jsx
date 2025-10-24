import react from 'react'
export default function BotonConCallback({ texto, onClick }) {
  return (
    <button onClick={onClick} disabled={!onClick}>
      {texto}
    </button>
  )
}
