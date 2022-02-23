import { configureStore } from "@reduxjs/toolkit";
import contactosReducer from './features/contactosSlice';

export const store = configureStore({
    reducer:{
        contactos: contactosReducer,
        // counter: cointerReducer
    }
})