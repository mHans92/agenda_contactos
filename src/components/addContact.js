import React, { useState } from 'react'; 

import { useDispatch } from 'react-redux'; 

import { 

    añadirContacto, 

    

} from '../features/contactosSlice'; 

 
 

function AddContact() { 


    const dispatch = useDispatch(); 

    const [contacto, setContacto] = useState({ 
        nombre: "", 
        edad: "", 
        telefono: "" 
    }) 

    const handleInputs = (e) => { 

        console.log(e.target.value) 

        setContacto({ 

            ...contacto, 

            [e.target.name]: e.target.value 

        }); 

    } 

    const addContact =() => {
        dispatch(añadirContacto(contacto));
        reset();
    }

    let reset = () =>{
        setContacto({
          nombre:'',
          edad:'',
          telefono:'',
        });
      }

 
 

    return ( 

        <div> 
            
            <div> 
                <label>nombre</label> 
                <input value={contacto.nombre}  
                    name={"nombre"}
                    onChange={handleInputs} 
                /> 
            </div> 

            <div> 
                <label>edad</label> 
                <input value={contacto.edad} 
                    type="number"
                    name={"edad"} 
                    onChange={handleInputs} 

                /> 
            </div> 
            <div> 
                <label>telefono</label> 
                <input value={contacto.telefono} 
                    type="number"
                    name={"telefono"} 
                    onChange={handleInputs} 

                />
            </div>  

            {/* contacto va ser el action payload en el archivo contactosSlice */} 

            <button  onClick={() => addContact()}>añadir</button> 
           
        </div>
    ) 

 
 

} 

 
 

export default AddContact; 