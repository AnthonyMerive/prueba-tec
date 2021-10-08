import React from 'react'

export default function Imagen(props) {

    return (<>

        <li className="card">
                <img width={230} height={345} className="imagen" src={props.imagen} alt={props.titulo} />
            <div className="titulo">
                <span>{props.titulo}</span>
            </div>
        </li>

    </>)
}
