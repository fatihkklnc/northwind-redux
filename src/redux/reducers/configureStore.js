/* Annova Software

File:configureStore.js

Contents: reducer kitaplığındaki redux'ın createstore fonksiyonuna combinlenen reducerlar gönderildi

History: 12.03.2021 FatihK
*/ 
import { createStore } from "redux";
import rootReducer from "./index";



export default function configureStore(){
    return createStore(rootReducer)
}