import React from 'react'

function Ejercicios(props) {
    const ejercicios=props.ejercicios
  return (
    <div>
        <p>item</p>
        <div>
            <img src={ejercicios.imgUrl}/>
            <p>{ejercicios.Titulo}</p>
            <p>{ejercicios.descripcion}</p>
            <button><img src="./Icons.svg"/></button>
        </div>
    </div>
  )
}

export default Ejercicios