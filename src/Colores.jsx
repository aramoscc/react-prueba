import { useState , useEffect } from "react"
import Formulario from "./Formulario"
import Item from "./Item"

function Colores(){

    let[colores, setColores] = useState([])

    useEffect(() => {
        fetch("https://api-bx2j.onrender.com/api-colores")
        .then(respuesta => respuesta.json())
        .then(colores => setColores(colores))
    }, [])

    function nuevoColor(color){

        setColores([...colores, color])

    }

    function borrarColor(id){

        setColores(colores.filter(color => color.id != id))

    }

    return (
        <>
            <Formulario nuevoColor={nuevoColor}/>
            <ul>
                {colores.map(color => <Item key={color.id} id={color.id} r={color.r} g={color.g} b={color.b} borrarColor={borrarColor}/>)}
            </ul>
        </>
    )
}

export default Colores