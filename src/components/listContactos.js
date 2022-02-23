import React from "react";
import { useSelector } from "react-redux";
import { selectListContactos } from "../features/contactosSlice";

function ListContactos(){
    const listContactos = useSelector(selectListContactos);
    return (
        <div>
            {listContactos.map(c => 
            <div>nombre ---- {c.nombre }<br/>edad ----{c.edad}<br/>telefono ----{c.telefono}<br/><br/></div>
            )}
               
        </div>
    )
}

export default ListContactos;