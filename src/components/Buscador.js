import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectListContactos } from "../features/contactosSlice";

function Buscador () {

    const listContactos = useSelector(selectListContactos);
    const [busqueda, setBusqueda] = useState("");
    const [resultBusqueda, setResultBusqueda] = useState([]);
  
  


  const updateSearch = (event) => {
    if(event.target.value === ""){
        setResultBusqueda([]);
        setBusqueda("");
        return;
    }
    console.log(event);
    console.log(listContactos);
    const resultBusqueda = listContactos.filter(function (contact) {
      if (contact.nombre.toLowerCase().includes(event.target.value.toLowerCase())){
        return contact;
      }
    });
    setBusqueda(event.target.value);
    setResultBusqueda(resultBusqueda);
  }

  

 
    return (
      <div className="App">
        <input
          class="form-control"
          type="text"
          placeholder="Search"
          value={busqueda}
          onChange={(updateSearch)}
        />
    
        {resultBusqueda.map((contact) => {
          return <>
          
          <div className="card text-white bg-info mb-3">
                
                <div>Nombre:{' '}{contact.nombre}</div>
                <div>Edad:{' '}{contact.edad}</div>
                <div>Telefono:{' '}{contact.telefono}</div>
               
    
            </div> 
          </>
        })}
      </div>
    );
  }


export default Buscador;
