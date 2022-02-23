import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    listContactos:[]
}

export const contactosSlice = createSlice({
    name:'contactos',
    initialState,
        // los reducer nos define el nuevo valor y las acciones asociadas que modifican el valor
        // en los reducers dentro de la accion tenemos que pasarle el state y el action
        // dentro del objeto action esta el payload que sera donde esta la informacion del contacto nuevo
        reducers:{
        añadirContacto:(state, action) => {
            console.log("contactos", action.payload);
            state.listContactos.push(action.payload);
        }
    }
});

export const {añadirContacto} = contactosSlice.actions;

export const selectListContactos = (state) => state.contactos.listContactos;
export default contactosSlice.reducer;